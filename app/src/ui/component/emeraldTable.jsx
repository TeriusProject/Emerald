/*
 * table.jsx
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
import "./components.css";

export function EmeraldTable({ title, headers, rows, columnsAlign, tableId }) {

	const getCellStyle = (index) => {
		return {
			textAlign: columnsAlign ? columnsAlign[index] : 'center'
		};
	}

	const renderHeaderCell = (columnName, i) => {
		return (
			<th key={`${tableId}-header-cell-${columnName}`} style={getCellStyle(i)}>
				{columnName}
			</th>
		);
	};

	const renderCell = (cell, i) => {
		return (
			<td key={`${tableId}-cell-${cell}`} style={getCellStyle(i)}>
				{cell}
			</td>
		);
	};

	const renderRow = (rowArray, index) => {
		return (
			<tr key={`${tableId}row-${index}`}>
				{
					rowArray.map((cell, i) => renderCell(cell, i))
				}
			</tr>
		);
	};

	if (columnsAlign && headers.length !== columnsAlign.length)
		throw new Error("You must specify an aligment for either every column or none.");

	return (
		<div className="emerald-table-component">
			<div className="emerald-component-title">
				{title}
			</div>
			<table className="emerald-table">
				<thead>
					<tr>
						{
							headers.map((columnName, i) => renderHeaderCell(columnName, i))
						}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => renderRow(row, i))}
				</tbody>
			</table>
		</div>
	);
}
