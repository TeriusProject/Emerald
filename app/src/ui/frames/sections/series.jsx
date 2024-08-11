/*
 * series.jsx
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

import { React, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { Table } from "../../component/table";
import { BarChart } from '@mui/x-charts/BarChart';
import { ColumnAlign } from "../../../model/columnAlign";
import { StackedAreaChart } from "../../component/stackedAreaChart";
import { StackedBarChart } from "../../component/stackedBarChart";
import { EmeraldArrowButton } from "../../component/emeraldArrowButton";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './sections.css';

const soilAdditiveTableTitle = "Soil Additives";
const atmosphereAdditiveTableTitle = "Atmosphere Additives";

function AdditiveTable({ title, rows }) {
	const chEBIUrl = "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:";
	const header = ["Name", "Concentration (g/kg)"];
	const columnsAlign = [ColumnAlign.LEFT, ColumnAlign.RIGHT];
	const getAdditiveUrl = (id, name) => {
		return (
			<a href={`${chEBIUrl}${id}`} target="_blank" rel="noopener noreferrer">{name}</a>
		);
	};
	const tableRows = rows.map(row => [
		getAdditiveUrl(row.id, row.name),
		row.concentration
	]);

	return (
		<Table title={title} headers={header} rows={tableRows} columnsAlign={columnsAlign} />
	);
}

export function Series({ adf, timeUnit }) {
	const [seriesIndex, setSeriesIndex] = useState(0);
	const [series, setSeries] = useState(adf.series[0]);

	const onBackButtonClick = (event) => {
		if (seriesIndex === 0) return;
		setSeriesIndex(seriesIndex - 1);
	}
	const onNextButtonClick = (event) => {
		if (seriesIndex === adf.series.length - 1) return;
		setSeriesIndex(seriesIndex + 1);
	}

	useEffect(() => {
		setSeries(adf.series[seriesIndex]);
	}, [seriesIndex, adf.series]);


	const renderOrdinalSeries = () => {
		const suffix = seriesIndex === 0
			? "st" : seriesIndex === 1
				? "nd" : "th";
		return `${seriesIndex + 1}${suffix}`;
	};

	return (
		<Paper className="adf-series-section" elevation={3}>
			<div className="series-title">
				<EmeraldArrowButton onClick={onBackButtonClick}>
					<KeyboardArrowLeftIcon />
				</EmeraldArrowButton>
				<div>{renderOrdinalSeries()} series</div>
				<EmeraldArrowButton onClick={onNextButtonClick}>
					<KeyboardArrowRightIcon />
				</EmeraldArrowButton>
			</div>
			<div className="additives-section">
				<AdditiveTable title={soilAdditiveTableTitle} rows={series.soilAdditives} />
				<AdditiveTable title={atmosphereAdditiveTableTitle} rows={series.atmAdditives} />
			</div>
			<div className="multidimension-chart-row">
				<StackedAreaChart
					title={"Light exposure (W/m\u00B2)"}
					seriesDataCollection={series.lightExposure}
					labelFormatter={function (v) { return `${v} nm`; }}
				/>
				<StackedBarChart
					title={"Soil temperature (\u2103)"}
					data={series.soilTemperature}
					labelFormatter={function (v) { return `${v} \u2103`; }}
				/>
			</div>
			<div className="histogram-row">
				<BarChart
					className="emerald-series-histogram"
					dataset={series.waterUse}
					xAxis={[{ scaleType: 'band', dataKey: 'chunk' }]}
					series={[{ dataKey: 'mm', label: 'Water use (mm)', valueFormatter: function (v) { return `${v} mm`; } }]}
					height={350}
					borderRadius={10}
				/>
				<BarChart
					className="emerald-series-histogram"
					dataset={series.environmentTemp}
					xAxis={[{ scaleType: 'band', dataKey: 'chunk' }]}
					series={[{ dataKey: 'temp', label: 'Environment temperature', valueFormatter: function (v) { return `${v} \u2103`; } }]}
					height={350}
					borderRadius={10}
				/>
			</div>
		</Paper>
	);
}
