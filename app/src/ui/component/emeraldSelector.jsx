/* emeraldSelector.jsx
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
import { TextField } from "@mui/material";
import { timeUnits } from "../../model/timeUnit";
import { adfVersions } from "../../model/adfVersion";
import Autocomplete from '@mui/material/Autocomplete';

export function EmeraldSelector({ data, formatter, label, initValue, onValueChange, className }) {
	return (
		<Autocomplete
			className={className}
			options={data}
			value={initValue}
			defaultValue={initValue}
			getOptionLabel={formatter}
			renderInput={(params) => (
				<TextField {...params} label={label} variant="standard" />
			)}
			onChange={onValueChange}
		/>
	);
}

export function TimeUnitSelector({ init, onChange }) {
	return (
		<EmeraldSelector
			className="emerald-time-unit-selector"
			data={timeUnits}
			initValue={init}
			label="Time Unit"
			formatter={(item) => item.label}
			onValueChange={onChange}
		/>
	);
}

export function AdfVersionSelector({ init, onChange }) {
	return (
		<EmeraldSelector
			data={adfVersions}
			initValue={init}
			label="ADF Version"
			formatter={(item) => item.label}
			onValueChange={onChange}
		/>
	);
}
