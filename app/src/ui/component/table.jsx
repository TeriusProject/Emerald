import { React } from "react";
import "./components.css";

export function Table({ title, header, rows }) {
	const renderRow = (rowArray) => {
		return (
			<tr key={`row-${rowArray[0]}`}>
				{
					rowArray.map(cell => <td key={`row-${rowArray[0]}-${cell}`}>{cell}</td>)
				}
			</tr>
		);
	};

	return (
		<div className="emerald-table-component">
			<div className="emerald-component-title">
				{title}
			</div>
			<table className="emerald-table">
				<thead>
					<tr>
						{header.map(columnName => <th key={`column-${columnName}`}>{columnName}</th>)}
					</tr>
				</thead>
				<tbody>
					{rows.map(row => renderRow(row))}
				</tbody>
			</table>
		</div>
	);
}
