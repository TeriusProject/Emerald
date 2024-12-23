/* emeraldHeatmap.jsx
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

import { React, useLayoutEffect, useEffect, useState } from 'react';
import { soilTemperaturePalette } from "../../utils/palette";
import { formatFloatingPoint, transposed } from "../../utils/formatter";
import "./components.css";

export const EmeraldHeatmap = ({ id, data, xLabels, yLabels, title }) => {
	const [blockSize, setBlockSize] = useState(0);
	const [minMaxValue, setMinMaxValue] = useState([-50, 50]);

	if (!data) throw new Error();
	if (!xLabels) throw new Error();
	if (!yLabels) throw new Error();

	useLayoutEffect(() => {
		const onSizeUpdated = () => {
			const newSize = Math.round((window.innerWidth - 250) / data[0].length);
			setBlockSize(newSize);
		};
		window.addEventListener('resize', onSizeUpdated);
		onSizeUpdated();
		return () => window.removeEventListener('resize', onSizeUpdated);
	}, [data]);

	useEffect(() => {
		setMinMaxValue([Math.min(...data.flat()), Math.max(...data.flat())]);
	}, [data]);

	const getColor = (value) => {
		const val = (value - minMaxValue[0]) / (minMaxValue[1] - minMaxValue[0]);
		const index = Math.floor(val * (soilTemperaturePalette.length - 1));
		return soilTemperaturePalette[index];
	};
	const renderCells = (row, rowIndex) => {
		return row.map((value, colIndex) => (
			<div
				key={`heatmap-${id}-${rowIndex}-${colIndex}`}
				className="heatmap-cell"
				style={{
					backgroundColor: getColor(value),
					width: `${blockSize}px`,
					height: `${blockSize / 2}px`
				}}
			>
				{formatFloatingPoint(value)}
			</div>
		));
	};
	const renderBlocks = (data) => {
		return data.map((row, rowIndex) => (
			<div key={`heatmap-${id}-${rowIndex}`} className="heatmap-row">
				{renderCells(row, rowIndex)}
			</div>
		));
	};
	const legendFill = {
		background: `linear-gradient(to right, ${soilTemperaturePalette[0]}, ${soilTemperaturePalette[soilTemperaturePalette.length - 1]})`,
	}
	const yLabelsStyle = { height: `${blockSize / 2}px` };
	const xLabelsStyle = { width: `${blockSize}px` };

	return (
		<div className="emerald-heatmap">
			<div>
				{title}
			</div>
			<div style={{ display: "flex", alignItems: "start", rowGap: "6px" }}>
				<div>
					{
						data[0].map((_, i) => {
							return (
								<div key={`y-axes-label-${i}`} className="heatmap-y-axes-label" style={yLabelsStyle}>
									{yLabels[i]}
								</div>
							);
						})
					}
				</div>
				<div>
					<div className="heatmap-view">
						{renderBlocks(transposed(data))}
					</div>
					<div style={{ display: "flex", alignItems: "start", columnGap: "6px", paddingLeft: "4px" }}>
						{
							data.map((_, i) => {
								return (
									<div key={`x-axes-label-${i}`} className="heatmap-x-axes-label" style={xLabelsStyle}>
										{xLabels[i]}
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
			<div className="heatmap-legend">
				<span>{`${formatFloatingPoint(minMaxValue[0])}\u2103`}</span>
				<div className="heatmap-legend-gradient" style={legendFill}></div>
				<span>{`${formatFloatingPoint(minMaxValue[1])}\u2103`}</span>
			</div>
		</div>
	);
};
