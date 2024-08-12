import { React } from "react";

export function EmeraldProperty({ label, value, hexColor }) {
	const hexBorderColor = hexColor ?? "#c6c6c69c";
	return (
		<div className="emerald-property">
			<span>{`${label}:`}</span>
			<div className="emerald-property-value" style={{borderColor: hexBorderColor}}>
				{value}
			</div>
		</div>
	);
}
