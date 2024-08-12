/*
 * header.jsx
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
import { EmeraldProperty } from "../../component/emeraldProperty";
import "./sections.css";

export function Header({ adf, timeUnit }) {
	const [timeLength, setTimeLength] = useState(adf.metadata.periodSec);

	useEffect(() => {
		setTimeLength(adf.metadata.periodSec / timeUnit.timeInSeconds);
	}, [timeUnit, adf.metadata.periodSec]);

	const formatTime = () => {
		const timeStr = timeLength.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
		return `${timeStr} ${timeUnit.symbol}`
	}

	return (
		<Paper className="adf-header-section" elevation={2}>
			<EmeraldProperty label="ADF version" value={adf.header.version.label} hexColor="#2996CD" />
			<EmeraldProperty label="Farming technique" value={adf.header.farmingTechnique.label} />
			<EmeraldProperty label="Series duration" value={formatTime()} hexColor="#F67E92" />
		</Paper>
	);
}
