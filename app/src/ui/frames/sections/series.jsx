/* series.jsx
 * ------------------------------------------------------------------------
 * Emerald - data visualizer
 * Copyright (C) 2024 Matteo Nicoli
 *
 * This file is part of Terius
 *
 * Emerald is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Terius is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import { React, useEffect } from "react";
import { EmeraldTable } from "../../component/emeraldTable";
import { EmeraldSection } from "../../component/emeraldSection";
import { ColumnAlign } from "../../../model/columnAlign";
import { EmeraldBarChart } from "../../component/emeraldBarChart";
import { EmeraldStackedAreaChart } from "../../component/emeraldStackedAreaChart";
import { EmeraldStackedBarChart } from "../../component/emeraldStackedBarChart";
import { EmeraldArrowButton } from "../../component/emeraldArrowButton";
import { formatTime, formatFloatingPoint } from "../../../utils/formatter";
import {
	pastelPalette,
	palettesByFamily,
	soilDepthPalette,
	lightExposurePalette
} from "../../../utils/palette";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./sections.css";

const soilAdditiveTableTitle = "Soil Additives";
const atmosphereAdditiveTableTitle = "Atmosphere Additives";

function AdditiveTable({ tableId, title, rows }) {
	const chEBIUrl = "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:";
	const header = ["Name", "Concentration (g/kg)"];
	const columnsAlign = [ColumnAlign.LEFT, ColumnAlign.RIGHT];

	const getAdditiveUrl = (id, name) => {
		return (
			<a href={`${chEBIUrl}${id}`} target="_blank" rel="noopener noreferrer">
				{name}
			</a>
		);
	};
	const tableRows = rows.map(row => [
		getAdditiveUrl(row.id, row.name),
		row.concentration
	]);

	return (
		<EmeraldTable
			tableId={tableId}
			title={title}
			headers={header}
			rows={tableRows}
			columnsAlign={columnsAlign}
		/>
	);
}

function SoilDepthBarChart({ soilTemperatureData }) {
	const chartSeriesToColor = () => {
		if (soilTemperatureData.series.length === 0) return;
		return Object.keys(soilTemperatureData.series[0])
			.map(k => parseInt(k))
			.sort()
			.map((seriesKey, i) => {
				return [seriesKey, soilDepthPalette[i]];
			});
	};
	const colors = chartSeriesToColor()
		? Object.fromEntries(chartSeriesToColor())
		: undefined;

	return (
		<EmeraldStackedBarChart
			title={"Soil temperature (\u2103)"}
			data={soilTemperatureData}
			labelFormatter={function (v) { return `${formatFloatingPoint(v)} \u2103`; }}
			colors={colors}
		/>
	);
}

function LightExposureAreaChart({ lightExposureData }) {
	const chartSeriesToColor = () => {
		return Object.keys(lightExposureData.series)
			.map(k => parseInt(k))
			.sort()
			.map((seriesKey, i) => {
				return [seriesKey, lightExposurePalette[i]];
			});
	};

	return (
		<EmeraldStackedAreaChart
			title={"Light exposure (W/m\u00B2)"}
			seriesDataCollection={lightExposureData}
			labelFormatter={function (v) { return `${formatFloatingPoint(v)} nm`; }}
			colors={Object.fromEntries(chartSeriesToColor())}
		/>
	);
}

export function Series(props) {
	const {
		adf,
		time,
		timeUnit,
		selectedSeriesMetadata,
		setSelectedSeriesMetadata
	} = props;

	const isStillRepeating = () => {
		var totalPreviousRepeatedSeries = 0;
		for(var i = 0; i < selectedSeriesMetadata.index; i++) {
			totalPreviousRepeatedSeries += adf.series[i].repeated;
		}
		const currentRepetition = selectedSeriesMetadata.number-totalPreviousRepeatedSeries;
		return currentRepetition < adf.series[selectedSeriesMetadata.index].repeated;
	};

	const onBackButtonClick = (_) => {
		if (selectedSeriesMetadata.number === 1) return;
		const newIndex = adf.series[selectedSeriesMetadata.index].repeated === 1
			? selectedSeriesMetadata.index - 1
			: selectedSeriesMetadata.index;
		setSelectedSeriesMetadata({
			number: selectedSeriesMetadata.number - 1,
			index: newIndex,
		});
	}

	const onNextButtonClick = (_) => {
		if (selectedSeriesMetadata.number === adf.metadata.nSeries) return;
		const newIndex = isStillRepeating()
		? selectedSeriesMetadata.index
		: selectedSeriesMetadata.index + 1;
		setSelectedSeriesMetadata({
			number: selectedSeriesMetadata.number + 1,
			index: newIndex,
		});
	}

	const renderOrdinalSeries = () => {
		const seriesNumber = selectedSeriesMetadata.number;
		const suffix = seriesNumber === 1
			? "st" : seriesNumber === 2
				? "nd" : "th";
		return `${seriesNumber}${suffix}`;
	};

	const startSeriesTime = () => {
		return formatTime((selectedSeriesMetadata.number - 1) * time, timeUnit);
	};

	const endSeriesTime = () => {
		return formatTime((selectedSeriesMetadata.number * time), timeUnit);
	};

	useEffect(() => {
		setSelectedSeriesMetadata(selectedSeriesMetadata);
	}, [selectedSeriesMetadata, setSelectedSeriesMetadata]);

	return (
		<EmeraldSection className="adf-series-section" elevation={3}>
			<div className="series-title">
				<EmeraldArrowButton onClick={onBackButtonClick}>
					<KeyboardArrowLeftIcon />
				</EmeraldArrowButton>
				<div className="series-metadata">
					<span>{renderOrdinalSeries()} series</span>
					<span>
						{startSeriesTime()} &mdash; {endSeriesTime()}
					</span>
				</div>
				<EmeraldArrowButton onClick={onNextButtonClick}>
					<KeyboardArrowRightIcon />
				</EmeraldArrowButton>
			</div>
			<div className="additives-section">
				<AdditiveTable
					tableId={`${selectedSeriesMetadata.index}-soilAdditiveTable`}
					title={soilAdditiveTableTitle}
					rows={adf.series[selectedSeriesMetadata.index].soilAdditives}
				/>
				<AdditiveTable
					tableId={`${selectedSeriesMetadata.index}-atmAdditiveTable`}
					title={atmosphereAdditiveTableTitle}
					rows={adf.series[selectedSeriesMetadata.index].atmAdditives}
				/>
			</div>
			<div className="multidimension-chart-row">
				<LightExposureAreaChart
					lightExposureData={adf.series[selectedSeriesMetadata.index].lightExposure}
				/>
				<SoilDepthBarChart
					soilTemperatureData={adf.series[selectedSeriesMetadata.index].soilTemperature}
				/>
			</div>
			<div className="histogram-row">
				<EmeraldBarChart
					data={adf.series[selectedSeriesMetadata.index].waterUse}
					xAxisKey={"chunk"}
					dataKey={"mm"}
					seriesLabel={"Water use (mm)"}
					labelFormatter={(v) => `${formatFloatingPoint(v)} mm`}
					colors={{ "mm": palettesByFamily.blue[0] }}
				/>
				<EmeraldBarChart
					data={adf.series[selectedSeriesMetadata.index].environmentTemp}
					xAxisKey={"chunk"}
					dataKey={"temp"}
					seriesLabel={"Environment temperature (\u2103)"}
					labelFormatter={(v) => `${formatFloatingPoint(v)} \u2103`}
					colors={{ "temp": pastelPalette[2] }}
				/>
			</div>
		</EmeraldSection>
	);
}
