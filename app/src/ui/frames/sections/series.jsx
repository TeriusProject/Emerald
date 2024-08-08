import { React } from "react";
import { Ridgeline } from "../../../charts/ridgeline";
import { Histogram } from "../../../charts/histogram";
import { data as ridgeData } from "./mock_ridge";
import { data as histogramData } from "./mock_histogram"
import { Table } from "../../component/table";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './sections.css';
import { TimeSeries } from "../../../charts/timeseries";

function AdditiveTable({ title, rows }) {
	const header = ["ChEBI ID", "Name", "Concentration (g/kg)"];
	// fetch(`https://www.ebi.ac.uk/webservices/chebi/2.0/test/getCompleteEntity?chebiId=${rows[0].id}`)
	// 	.then((response) => response.text())
	// 	.then((text) => {
	// 		const parser = new DOMParser();
	// 		const doc = parser.parseFromString(text, "text/xml");
	// 	});
	const tableRows = rows.map(row => [
		row.id,
		'name',
		row.concentration
	]);
	return (
		<Table title={title} header={header} rows={tableRows} />
	);
}

export function Series({ adfSeries, n, periodSec }) {
	const soilAdditiveTableTitle = "Soil Additives";
	const atmosphereAdditiveTableTitle = "Atmosphere Additives";

	const mock_additives = [{
		id: '17632',
		concentration: 13.45
	},
	{
		id: '18420',
		concentration: 1.79
	}];

	return (
		<>
			<div className="series-title">
				<ArrowBackIosNewIcon />
				<div>Series {n} ({periodSec * n} - {periodSec * (n + 1) - 1})</div>
				<ArrowForwardIosIcon />
			</div>
			<div className="additives-section">
				<AdditiveTable title={soilAdditiveTableTitle} rows={mock_additives} />
				<AdditiveTable title={atmosphereAdditiveTableTitle} rows={mock_additives} />
			</div>
			<div className="ridge-row">
				<Ridgeline data={ridgeData} width={1000} height={400} />
				<Ridgeline data={ridgeData} width={1000} height={400} />
			</div>
			<div className="histogram-row">
				<Histogram data={histogramData} width={400} height={400} />
				<Histogram data={histogramData} width={400} height={400} />
			</div>
			<TimeSeries />
		</>
	);
}