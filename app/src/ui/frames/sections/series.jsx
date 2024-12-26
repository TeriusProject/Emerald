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
import { EmeraldBiaxialBarChart } from "../../component/emeraldBarChart";
import { EmeraldStackedAreaChart } from "../../component/emeraldStackedAreaChart";
import { EmeraldArrowButton } from "../../component/emeraldArrowButton";
import { formatTime, formatFloatingPoint, ordinal } from "../../../utils/formatter";
import { lightExposurePalette, seriesButtonColors } from "../../../utils/palette";
import { EmeraldHeatmap } from "../../component/emeraldHeatmap";
import { EmeraldProperty } from "../../component/emeraldProperty";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./sections.css";

const soilAdditiveTableTitle = "Soil Additives";
const atmosphereAdditiveTableTitle = "Atmosphere Additives";
const chEBIUrl = "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:";
const header = ["Name", "Concentration (g/kg)"];
const columnsAlign = [ColumnAlign.LEFT, ColumnAlign.RIGHT];

const AdditiveTable = ({ tableId, title, rows }) => {
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

const LightExposureAreaChart = ({ lightExposureData, seriesLabels }) => {
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
			seriesLabels={seriesLabels}
		/>
	);
}

export const Series = (props) => {
	const {
		adf,
		time,
		timeUnit,
		selectedSeriesMetadata,
		setSelectedSeriesMetadata
	} = props;

	const isStillRepeating = () => {
		var totalPreviousRepeatedSeries = 0;
		for (var i = 0; i < selectedSeriesMetadata.index; i++) {
			totalPreviousRepeatedSeries += adf.series[i].repeated;
		}
		const currentRepetition = selectedSeriesMetadata.number - totalPreviousRepeatedSeries;
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
	const startSeriesTime = () => {
		return formatTime((selectedSeriesMetadata.number - 1) * time, timeUnit);
	};
	const endSeriesTime = () => {
		return formatTime((selectedSeriesMetadata.number * time), timeUnit);
	};
	const getChunksLabels = () => {
		const labels = [];
		for (var i = 0, start = 0, end = time / adf["header"].chunks; start < time; i++) {
			labels.push(`${formatTime(start, timeUnit)} \u2015 ${formatTime(end, timeUnit)}`);
			start += time / adf["header"].chunks;
			end += time / adf["header"].chunks;
		}
		return labels
	}

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
					<span>{ordinal(selectedSeriesMetadata.number)} series</span>
					<span>
						{startSeriesTime()} &mdash; {endSeriesTime()}
					</span>
				</div>
				<EmeraldArrowButton onClick={onNextButtonClick}>
					<KeyboardArrowRightIcon />
				</EmeraldArrowButton>
			</div>
			<div className="series-properties-section">
				<EmeraldProperty label="Soil density" value={`${formatFloatingPoint(adf.series[selectedSeriesMetadata.index].soilDensity)} kg/m\u00B3`} hexColor={seriesButtonColors.SOIL_DENSITY} />
				<EmeraldProperty label="Soil pH" value={formatFloatingPoint(adf.series[selectedSeriesMetadata.index].pH)} hexColor={seriesButtonColors.PH} />
			</div>
			<div className="multidimension-chart-row">
				<LightExposureAreaChart
					lightExposureData={adf.series[selectedSeriesMetadata.index].lightExposure}
					seriesLabels={getChunksLabels()}
				/>
				<EmeraldHeatmap
					id="soilTemperatureHeatmap"
					data={adf.series[selectedSeriesMetadata.index].soilTemperature.series}
					title={"Soil temperature (\u2103)"}
					xLabels={getChunksLabels()}
					yLabels={adf.series[selectedSeriesMetadata.index].soilTemperature.labels}
				/>
			</div>
			<div className="histogram-row">
				<EmeraldBiaxialBarChart
					data={{
						"mm": adf.series[selectedSeriesMetadata.index].waterUse,
						"temp": adf.series[selectedSeriesMetadata.index].environmentTemp
					}}
					xLabels={getChunksLabels()}
					dataKey1={"mm"}
					dataKey2={"temp"}
					seriesLabel={{
						"mm": "Water use (mm)",
						"temp": "Environment temperature (\u2103)"
					}}
					labelFormatter={{
						"mm": (v) => `${formatFloatingPoint(v)} mm`,
						"temp": (v) => `${formatFloatingPoint(v)} \u2103`
					}}
					colors={{
						"mm": "rgba(158, 223, 255, 0.74)",
						"temp": "rgba(255, 202, 68, 0.65)"
					}}
				/>
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
		</EmeraldSection>
	);
}
