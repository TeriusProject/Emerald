/* emeraldBarChart.jsx
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
import { pastelPalette } from "../../utils/palette";

export const EmeraldBarChart = (props) => {
	const { data, xLabels, dataKey, labelFormatter, seriesLabel, colors } = props;
	return (
		<BarChart
			className="emerald-series-histogram"
			dataset={data}
			xAxis={[{ scaleType: 'band', data: xLabels }]}
			series={[{
				dataKey: dataKey,
				label: seriesLabel,
				valueFormatter: labelFormatter,
				color: colors ? colors[dataKey] ?? pastelPalette[0] : pastelPalette[1]
			}]}
			height={350}
			grid={{ horizontal: true }}
			borderRadius={10}
			slotProps={{
				legend: {
					direction: 'row',
					position: { vertical: 'bottom', horizontal: 'middle' },
					padding: -5,
				},
			}}
		/>
	);
}

export const EmeraldBiaxialBarChart = (props) => {
	const {
		data,
		xLabels,
		dataKey1,
		dataKey2,
		labelFormatter,
		seriesLabel,
		colors
	} = props;

	return (
		<BarChart
			className="emerald-series-histogram"
			series={[
				{
					data: data[dataKey1],
					label: seriesLabel[dataKey1],
					valueFormatter: labelFormatter[dataKey1],
					color: colors ? colors[dataKey1]: pastelPalette[1],
					yAxisId: dataKey1,
				},
				{
					data: data[dataKey2],
					label: seriesLabel[dataKey2],
					valueFormatter: labelFormatter[dataKey2],
					color: colors ? colors[dataKey2] : pastelPalette[1],
					yAxisId: dataKey2,
				}
			]}
			xAxis={[{ scaleType: 'band', data: xLabels }]}
			yAxis={[{ id: dataKey1 }, { id: dataKey2 }]}
			rightAxis={`${dataKey2}`}
			height={350}
			grid={{ horizontal: true }}
			borderRadius={10}
			slotProps={{
				legend: {
					direction: 'row',
					position: { vertical: 'bottom', horizontal: 'middle' },
					padding: -5,
				},
			}}
		/>
	);
}
