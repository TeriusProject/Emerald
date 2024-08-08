import { React } from "react";
import { Header } from "./sections/header";
import { Series } from "./sections/series";
import "./frames.css";

export function Adf() {
	const adfHeader = {
		version: "0.9.2"
	};
	return (
		<div className="adf-content">
			<Header adfHeader={adfHeader} />
			<Series n={0} periodSec={10} />
		</div>
	);
}