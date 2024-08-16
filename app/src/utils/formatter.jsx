/*
 * formatter.jsx
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

import { SelectorDataType } from "../model/seriesSelectorDataType";

export const formatFloatingPoint = (n) => {
	return n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });;
}

export const formatTime = (time, timeUnit) => {
	const timeStr = formatFloatingPoint(time);
	return `${timeStr} ${timeUnit.symbol}`
}

export const formatDataTypeUnit = (dataType) => {
	switch (dataType) {
		case SelectorDataType.WATER_USE:
			return "ml";
		case SelectorDataType.TEMPERATURE:
			return "\u2103";
		case SelectorDataType.SOIL_DENSITY:
			return "kg/m\u00B3";
		case SelectorDataType.PH:
		default:
			break;
	}
	return "";
}
