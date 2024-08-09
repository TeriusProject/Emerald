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

import { React } from "react";
import { Header } from "./sections/header";
import { Series } from "./sections/series";
import { adfSeries } from "./mock_series";
import "./frames.css";

export function Adf() {
	const adfHeader = {
		version: "0.9.2"
	};

	return (
		<div className="adf-content">
			<Header adfHeader={adfHeader} />
			<Series adfSeries={adfSeries[0]} n={0} periodSec={10} />
		</div>
	);
}