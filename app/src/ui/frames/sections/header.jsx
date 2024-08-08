import { React } from "react";

export function Header({ adfHeader }) {
	return (
		<>
		<div>ADF version: {adfHeader.version}</div>
		<div>Farming technique: {adfHeader.farmingTechnique}</div>
		</>
	);
}