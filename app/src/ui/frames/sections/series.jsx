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

import { React } from "react";
import { Paper } from "@mui/material";
import { Table } from "../../component/table";
import { BarChart } from '@mui/x-charts/BarChart';
import { ColumnAlign } from "../../../model/columnAlign";
import { StackedAreaChart } from "../../component/stackedAreaChart";
import { StackedBarChart } from "../../component/stackedBarChart";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './sections.css';

function AdditiveTable({ title, rows }) {
	const header = ["ChEBI ID", "Name", "Concentration (g/kg)"];
	const columnsAlign = [ColumnAlign.CENTER, ColumnAlign.LEFT, ColumnAlign.RIGHT];
	const tableRows = rows.map(row => [
		row.id,
		row.name,
		row.concentration
	]);

	return (
		<Table title={title} headers={header} rows={tableRows} columnsAlign={columnsAlign} />
	);
}

export function Series({ adfSeries, n, periodSec }) {
	const soilAdditiveTableTitle = "Soil Additives";
	const atmosphereAdditiveTableTitle = "Atmosphere Additives";

	const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
	const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
	const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
	const xLabels = [
		'Page A',
		'Page B',
		'Page C',
		'Page D',
		'Page E',
		'Page F',
		'Page G',
		];
	const aa = {
		'uv': uData,
		'pv': pData,
		'amt': amtData
	};
	const _data = [
		[3, -7, 'First'],
		[0, -5, 'Second'],
		[10, 0, 'Third'],
		[9, 6, 'Fourth'],
	].map(([high, low, order]) => ({
		high,
		low,
		order,
	}));

	return (
		<Paper className="series-section" elevation={3}>
			<div className="series-title">
				<ArrowBackIosNewIcon />
				<div>Series {n} ({periodSec * n} - {periodSec * (n + 1) - 1})</div>
				<ArrowForwardIosIcon />
			</div>
			<div className="additives-section">
				<AdditiveTable title={soilAdditiveTableTitle} rows={adfSeries.soilAdditives} />
				<AdditiveTable title={atmosphereAdditiveTableTitle} rows={adfSeries.atmAdditives} />
			</div>
			<StackedAreaChart title={"Light exposure (W/m\u00B2)"} seriesDataCollection={aa} xLabels={xLabels} />
			<StackedBarChart title={"Soil temperature (\u2103)"} data={_data}/>
			<div className="histogram-row">
				<BarChart
					dataset={adfSeries.waterUse}
					xAxis={[{ scaleType: 'band', dataKey: 'chunk' }]}
					series={[{ dataKey: 'mm', label: 'Water use (mm)', valueFormatter: function(v) {return`${v} mm`;} }]}
					width={500}
					height={300}
					borderRadius={10}
				/>
				<BarChart
					dataset={adfSeries.environmentTemp}
					xAxis={[{ scaleType: 'band', dataKey: 'chunk' }]}
					series={[{ dataKey: 'temp', label: 'Environment temperature', valueFormatter: function(v) {return`${v} \u2103`;} }]}
					width={500}
					height={300}
					borderRadius={10}
				/>
			</div>
		</Paper>
	);
}