import { React } from "react";
import { BarChart } from "@mui/x-charts";

export function EmeraldBarChart({ data, xAxisKey, dataKey, labelFormatter, seriesLabel }) {
	return (
		<BarChart
			className="emerald-series-histogram"
			dataset={data}
			xAxis={[{ scaleType: 'band', dataKey: xAxisKey }]}
			series={[{ dataKey: dataKey, label: seriesLabel, valueFormatter: labelFormatter }]}
			height={350}
			grid={{ horizontal: true }}
			borderRadius={10}
			slotProps={{
				legend: {
					direction: 'row',
					position: { vertical: 'bottom', horizontal: 'middle' },
					padding: -5,
				},
			}}
		/>
	);
}
