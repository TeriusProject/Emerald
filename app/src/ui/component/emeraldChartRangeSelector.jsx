/*
 * emeraldChartRangeSelector.jsx
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

import { Fragment, React, useEffect, useState } from "react";
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from "@mui/x-charts";
import { Slider } from '@mui/material';
import { formatTime } from "../../utils/formatter";
import useId from '@mui/utils/useId';

export function EmeraldChartRangeSelector({ series, time, timeUnit, onRangeChange }) {
	const [rangeLimits, setRangeLimits] = useState([0, series.length - 1]);

	const minDistance = 1;
	const id = useId();
	const add = (acc, x) => acc + x;
	const clipPathId = `${id}-clip-path`;
	const headers = [...Array(series.length).keys()];
	const marks = [
		{
			value: 0,
			label: formatTime(0, timeUnit),
		},
		{
			value: series.length - 1,
			label: formatTime(time * (series.length - 1), timeUnit),
		},
	];
	const chartData = series.map(s => s.waterUse.map(wu => wu.mm).reduce(add, 0));

	useEffect(() => {
		onRangeChange(rangeLimits);
	}, [rangeLimits, onRangeChange]);

	const handleChange = (_, newValue, activeThumb) => {
		if (!Array.isArray(newValue))
			return;

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - minDistance);
				setRangeLimits([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setRangeLimits([clamped - minDistance, clamped]);
			}
		} else {
			setRangeLimits(newValue);
		}
	};

	return (
		<Fragment>
			<ResponsiveChartContainer
				xAxis={[
					{
						label: 'series',
						min: rangeLimits[0],
						max: rangeLimits[1],
						data: headers,
						tickMinStep: 1,
					},
				]}
				yAxis={[
					{
						min: 0,
						valueFormatter: (v) => `${v} ml`
					}
				]}
				series={[
					{
						type: 'line',
						data: chartData,
						color: "var(--menu-font-color)"
					},
				]}
				height={250}
				margin={{ top: 10 }}
			>
				<ChartsGrid />
				<ChartsTooltip trigger="axis" />
				<g clipPath={`url(#${clipPathId})`}>

					<LinePlot />
				</g>
				<ChartsXAxis />
				<ChartsYAxis />
				<MarkPlot />
			</ResponsiveChartContainer>
			<Slider
				min={0}
				max={series.length - 1}
				value={rangeLimits}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={(v) => v.label}
				valueLabelFormat={(v) => `${formatTime(time * v, timeUnit)}`}
				marks={marks}
				sx={{
					mt: 2,
					'& .MuiSlider-thumb': {
						color: "var(--menu-font-color)"
					},
					'& .MuiSlider-track': {
						color: "var(--menu-font-color)"
					},
					'& .MuiSlider-rail': {
						color: "var(--table-border)"
					},
					'& .MuiSlider-active': {
						color: "var(--table-border)"
					},
					marginTop: "0px",
				}}
			/>
		</Fragment>
	);
}
