/*
 * stackedBarChart.jsx
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
import { BarChart } from "@mui/x-charts";
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export function EmeraldStackedBarChart({ title, data, labelFormatter }) {
	const getSeries = () => {
		return Object.keys(data.series[0]).map(seriesKey => {
			return {
				dataKey: seriesKey,
				label: `Depth ${seriesKey}`,
				layout: 'vertical',
				stack: 'stack',
				valueFormatter: labelFormatter
			};
		})
	}
	const onClickHandler = (a,b,c) => {
		debugger;
	}
	return (
		<div className="stacked-bar-chart-component">
			<div className="stacked-bar-chart-component-title">
				{title}
			</div>
			<BarChart
				onItemClick={onClickHandler}
				dataset={data.series}
				height={350}
				grid={{ horizontal: true }}
				sx={{
					[`& .${axisClasses.directionY} .${axisClasses.label}`]: {
						transform: 'translateX(-10px)',
					},
				}}
				slotProps={{
					legend: {
						direction: 'row',
						position: { vertical: 'bottom', horizontal: 'middle' },
						padding: -5,
					},
				}}
				xAxis={[{ scaleType: 'band', data: data.labels }]}
				borderRadius={10}
				series={getSeries()}
			/>
		</div>
	);
}
