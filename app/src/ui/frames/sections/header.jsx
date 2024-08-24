/* header.jsx
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

import { React, useState } from "react";
import { EmeraldSection } from "../../component/emeraldSection";
import { EmeraldProperty } from "../../component/emeraldProperty";
import { formatTime } from "../../../utils/formatter";
import { EmeraldSoilScheme } from "../../component/emeraldSoilScheme";
import { EmeraldWaveScheme } from "../../component/emeraldWaveScheme";
import { EmeraldTable } from "../../component/emeraldTable";
import { ColumnAlign } from "../../../model/columnAlign";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./sections.css";
import { ReductionMode } from "../../../model/reductionMode";

export function Header({ adf, time, timeUnit }) {

	const [isExpandedSectionOpen, setExpandedSectionOpen] = useState(false);

	const header = adf.header;
	const onExpandClick = (_) => {
		setExpandedSectionOpen(!isExpandedSectionOpen);
	};
	const precisionTableRows = () => {
		return [
			["Soil density", header.precisionInfo.soilDensity.toExponential()],
			["Atmospheric pressure", header.precisionInfo.pressure.toExponential()],
			["Light exposure", header.precisionInfo.lightExposure.toExponential()],
			["Water use", header.precisionInfo.waterUse.toExponential()],
			["Soil temperature", header.precisionInfo.soilTemp.toExponential()],
			["Environment temperature", header.precisionInfo.envTemp.toExponential()],
			["Additive concentration", header.precisionInfo.additive.toExponential()],
		];
	};
	const reductionModeTableRows = () => {
		return [
			["Soil density", ReductionMode[header.reductionInfo.soilDensity]],
			["Atmospheric pressure", ReductionMode[header.reductionInfo.pressure]],
			["Light exposure", ReductionMode[header.reductionInfo.lightExposure]],
			["Water use", ReductionMode[header.reductionInfo.waterUse]],
			["Soil temperature", ReductionMode[header.reductionInfo.soilTemp]],
			["Environment temperature", ReductionMode[header.reductionInfo.envTemp]],
			["Additive concentration", ReductionMode[header.reductionInfo.additive]],
		];
	};

	return (
		<EmeraldSection className="adf-header-section">
			<div className="adf-header-properties">
				<EmeraldProperty label="ADF version" value={adf.header.version.label} hexColor="#2996CD" />
				<EmeraldProperty label="Farming technique" value={adf.header.farmingTechnique.label} />
				<EmeraldProperty label="Series duration" value={formatTime(time, timeUnit)} hexColor="#F67E92" />
			</div>
			<div className="expanded-section" style={{ display: isExpandedSectionOpen ? 'flex' : 'none' }}>
				<div className="soil-wave-section">
					<EmeraldSoilScheme
						title={"Soil temperature sensors"}
						height={200}
						width={70}
						n={2}
						maxDepth={500}
						tY={20}
					/>
					<EmeraldWaveScheme
						title={"Wavelengths tracked"}
						width={400}
						height={80}
						minLength={header.lightInfo.min}
						maxLength={header.lightInfo.max}
						n={header.lightInfo.n}
					/>
				</div>
				<div className="reduction-and-precision-section">
					<EmeraldTable
						tableId={"reduction-table"}
						title={"Reduction info"}
						headers={["Field", "Reduction mode"]}
						columnsAlign={[ColumnAlign.LEFT, ColumnAlign.CENTER]}
						rows={reductionModeTableRows()}
					/>
					<EmeraldTable
						tableId={"precision-table"}
						title={"Precision info"}
						headers={["Field", "Precision"]}
						columnsAlign={[ColumnAlign.LEFT, ColumnAlign.RIGHT]}
						rows={precisionTableRows()}
					/>
				</div>
			</div>
			<div className="expand-button" onClick={onExpandClick}>
				{isExpandedSectionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
			</div>
		</EmeraldSection>
	);
}
