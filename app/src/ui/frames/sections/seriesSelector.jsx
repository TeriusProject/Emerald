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
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { EmeraldChartRangeSelector } from "../../component/emeraldChartRangeSelector";
import { EmeraldIconButton } from "../../component/emeraldIconButton";
import { SelectorDataType } from "../../../model/seriesSelectorDataType";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeblurIcon from '@mui/icons-material/Deblur';
import HPlusMobiledataIcon from '@mui/icons-material/HPlusMobiledata';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import "./sections.css";

function WaterUseButton({ isCurrentDataType, onClick }) {
	const hexColor = "#54afff";
	const btnStyle = {
		color: isCurrentDataType ? "white" : hexColor
	};
	return (
		<EmeraldIconButton
			colorHex={hexColor}
			icon={<WaterDropIcon style={btnStyle} />}
			label={"Water use"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function TemperatureButton({ isCurrentDataType, onClick }) {
	const hexColor = "#f48617";
	const btnStyle = {
		color: isCurrentDataType ? "white" : hexColor
	};
	return (
		<EmeraldIconButton
			colorHex={hexColor}
			icon={<DeviceThermostatIcon style={btnStyle} />}
			label={"Temperature"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function SoilDensityButton({ isCurrentDataType, onClick }) {
	const hexColor = "#765341";
	const btnStyle = {
		color: isCurrentDataType ? "white" : hexColor
	};
	return (
		<EmeraldIconButton
			colorHex={hexColor}
			icon={<DeblurIcon style={btnStyle} />}
			label={"Soil density"}
			onClick={onClick}
			selected={isCurrentDataType}
		/>
	);
}

function PHButton({ isCurrentDataType, onClick }) {
	const hexColor = "#1d7c1d";
	const btnStyle = {
		color: isCurrentDataType ? "white" : hexColor
	};
	return (
		<EmeraldIconButton
			colorHex={hexColor}
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

	return (
		<Accordion defaultExpanded style={{ margin: "var(--default-section-margins)", borderRadius: "4px" }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				Select the starting series
			</AccordionSummary>
			<AccordionDetails style={{ margin: "var(--default-section-margins)" }}>
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
			</AccordionDetails>
		</Accordion>
	);
}
