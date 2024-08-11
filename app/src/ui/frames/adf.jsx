/*
 * adf.jsx
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
import { Header } from "./sections/header";
import { Series } from "./sections/series";
import { adf } from "./mock_adf";
import { timeUnits } from "../../model/timeUnit";
import { Ribbon } from "./sections/ribbon";
import "./frames.css";

export function Adf() {

	const [timeUnit, setTimeUnit] = useState(timeUnits[0]);

	const onUnitChange = (event, newValue) => {
		if (!newValue) return;
		setTimeUnit(newValue);
	};

	return (
		<div className="adf-content">
			<Ribbon timeUnit={timeUnit} onUnitChange={onUnitChange} />
			<Header adf={adf} timeUnit={timeUnit} />
			<Series adf={adf} timeUnit={timeUnit} />
		</div>
	);
}