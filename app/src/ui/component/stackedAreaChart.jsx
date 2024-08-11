/*
 * stackedAreaChart.jsx
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
import { LineChart, lineElementClasses } from "@mui/x-charts";

export function StackedAreaChart({ title, seriesDataCollection, labelFormatter }) {
	const series = seriesDataCollection.series;
	const data = Object.keys(series).map(seriesDataKey => {
		return {
			data: series[seriesDataKey],
			label: seriesDataKey,
			area: true,
			stack: 'total',
			showMark: false
		};
	});

	return (
		<div className="area-chart-component">
			<div className="area-chart-component-title">
				{title}
			</div>
			<LineChart
				style={{ width: "100%", height: "100%" }}
				series={data}
				xAxis={[{ scaleType: 'point', data: seriesDataCollection.labels, valueFormatter: labelFormatter}]}
				sx={{
					[`& .${lineElementClasses.root}`]: {
						display: 'none',
					},
				}}
			/>
		</div>
	);
}
