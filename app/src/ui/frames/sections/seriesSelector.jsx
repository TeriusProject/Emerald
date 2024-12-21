/* seriesSelector.jsx
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

import { React, useState } from "react";
import { EmeraldAccordion } from "../../component/emeraldAccordion";
import { EmeraldChartRangeSelector } from "../../component/emeraldChartRangeSelector";
import { EmeraldIconButton } from "../../component/emeraldIconButton";
import { SelectorDataType } from "../../../model/seriesSelectorDataType";
import { seriesButtonColors } from "../../../utils/palette";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeblurIcon from '@mui/icons-material/Deblur';
import HPlusMobiledataIcon from '@mui/icons-material/HPlusMobiledata';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import "./sections.css";

function WaterUseButton({ isCurrentDataType, onClick }) {
	const btnStyle = {
		color: isCurrentDataType ? "white" : seriesButtonColors.WATER
	};
	return (
		<EmeraldIconButton
			colorHex={seriesButtonColors.WATER}
			icon={<WaterDropIcon style={btnStyle} />}
			label={"Water use"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function TemperatureButton({ isCurrentDataType, onClick }) {
	const btnStyle = {
		color: isCurrentDataType ? "white" : seriesButtonColors.TEMPERATURE
	};
	return (
		<EmeraldIconButton
			colorHex={seriesButtonColors.TEMPERATURE}
			icon={<DeviceThermostatIcon style={btnStyle} />}
			label={"Temperature"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function SoilDensityButton({ isCurrentDataType, onClick }) {
	const btnStyle = {
		color: isCurrentDataType ? "white" : seriesButtonColors.SOIL_DENSITY
	};
	return (
		<EmeraldIconButton
			colorHex={seriesButtonColors.SOIL_DENSITY}
			icon={<DeblurIcon style={btnStyle} />}
			label={"Soil density"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function PHButton({ isCurrentDataType, onClick }) {
	const btnStyle = {
		color: isCurrentDataType ? "white" : seriesButtonColors.PH
	};
	return (
		<EmeraldIconButton
			colorHex={seriesButtonColors.PH}
			icon={<HPlusMobiledataIcon style={btnStyle} />}
			label={"Soil pH"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

export function SeriesSelector({ adf, time, timeUnit, onRangeChange, onSeriesClick }) {
	const [currentDataType, setCurrentDataType] = useState(SelectorDataType.WATER_USE);

	const onWaterUseButtonClick = (_) => {
		setCurrentDataType(SelectorDataType.WATER_USE);
	}

	const onTemperatureButtonClick = (_) => {
		setCurrentDataType(SelectorDataType.TEMPERATURE);
	}

	const onPHButtonClick = (_) => {
		setCurrentDataType(SelectorDataType.PH);
	}

	const onSoilDensityButtonClick = (_) => {
		setCurrentDataType(SelectorDataType.SOIL_DENSITY);
	}

	const accordionContent = (
		<div style={{ margin: "var(--default-section-margins)" }}>
			<div className="series-selector-buttons-layout">
				<WaterUseButton
					isCurrentDataType={currentDataType === SelectorDataType.WATER_USE}
					onClick={onWaterUseButtonClick}
				/>
				<TemperatureButton
					isCurrentDataType={currentDataType === SelectorDataType.TEMPERATURE}
					onClick={onTemperatureButtonClick}
				/>
				<SoilDensityButton
					isCurrentDataType={currentDataType === SelectorDataType.SOIL_DENSITY}
					onClick={onSoilDensityButtonClick}
				/>
				<PHButton
					isCurrentDataType={currentDataType === SelectorDataType.PH}
					onClick={onPHButtonClick}
				/>
			</div>
			<EmeraldChartRangeSelector
				timeUnit={timeUnit}
				time={time}
				nSeries={adf.metadata.nSeries}
				series={adf.series}
				onRangeChange={onRangeChange}
				onSeriesClick={onSeriesClick}
				dataType={currentDataType}
			/>
		</div>
	);

	return (
		<EmeraldAccordion
			className="emerald-section"
			title="Select the starting series"
			openByDefault={true}
			content={accordionContent}
			sx={{ margin: "var(--default-section-margins)"}}
		/>
	);
}
