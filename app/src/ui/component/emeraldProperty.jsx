import { React } from "react";

export function EmeraldProperty({ label, value }) {
	return (
		<div className="emerald-property">
			<span>{`${label}:`}</span>
			<div>
				{value}
			</div>
		</div>
	);
}
