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

import { React, useRef, useState } from "react";
import { EmeraldSection } from "../../component/emeraldSection";
import { EmeraldProperty } from "../../component/emeraldProperty";
import { formatTime } from "../../../utils/formatter";
import { EmeraldSoilScheme } from "../../component/emeraldSoilScheme";
import { EmeraldWaveScheme } from "../../component/emeraldWaveScheme";
import { EmeraldTable } from "../../component/emeraldTable";
import { ColumnAlign } from "../../../model/columnAlign";
import { ReductionMode } from "../../../model/reductionMode";
import { HeaderTableLabels } from "../../../model/headerTableLabels";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./sections.css";

export function Header({ adf, time, timeUnit }) {
	const [isExpandedSectionOpen, setExpandedSectionOpen] = useState(false);
	const headerRef = useRef(null);
	const header = adf.header;

	const onExpandClick = (_) => {
		if (isExpandedSectionOpen) {
			headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
		setExpandedSectionOpen(!isExpandedSectionOpen);
	};
	const precisionTableRows = () => {
		return [
			[HeaderTableLabels.SOIL_DENSITY, header.precisionInfo.soilDensity.toExponential()],
			[HeaderTableLabels.ATMOSPHERIC_PRESSURE, header.precisionInfo.pressure.toExponential()],
			[HeaderTableLabels.LIGHT_EXPOSURE, header.precisionInfo.lightExposure.toExponential()],
			[HeaderTableLabels.WATER_USE, header.precisionInfo.waterUse.toExponential()],
			[HeaderTableLabels.SOIL_TEMPERATURE, header.precisionInfo.soilTemp.toExponential()],
			[HeaderTableLabels.ENVIRONMENT_TEMPERATURE, header.precisionInfo.envTemp.toExponential()],
			[HeaderTableLabels.ADDITIVE_CONCENTRATION, header.precisionInfo.additive.toExponential()],
		];
	};
	const reductionModeTableRows = () => {
		return [
			[HeaderTableLabels.SOIL_DENSITY, ReductionMode[header.reductionInfo.soilDensity]],
			[HeaderTableLabels.ATMOSPHERIC_PRESSURE, ReductionMode[header.reductionInfo.pressure]],
			[HeaderTableLabels.LIGHT_EXPOSURE, ReductionMode[header.reductionInfo.lightExposure]],
			[HeaderTableLabels.WATER_USE, ReductionMode[header.reductionInfo.waterUse]],
			[HeaderTableLabels.SOIL_TEMPERATURE, ReductionMode[header.reductionInfo.soilTemp]],
			[HeaderTableLabels.ENVIRONMENT_TEMPERATURE, ReductionMode[header.reductionInfo.envTemp]],
			[HeaderTableLabels.ADDITIVE_CONCENTRATION, ReductionMode[header.reductionInfo.additive]],
		];
	};

	return (
		<EmeraldSection className="adf-header-section">
			<div className="adf-header-properties" ref={headerRef}>
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
						n={header.soilTempInfo.n}
						maxDepth={header.soilTempInfo.max}
						tY={header.soilTempInfo.tY}
					/>
					<EmeraldWaveScheme
						title={"Wavelengths tracked"}
						height={400}
						width={150}
						minLength={header.lightInfo.min}
						maxLength={header.lightInfo.max}
						n={header.lightInfo.n}
					/>
				</div>
				<div className="reduction-and-precision-section">
					<EmeraldTable
						className="reduction-and-precision-table"
						tableId={"reduction-table"}
						title={"Reduction info"}
						headers={["Field", "Reduction mode"]}
						columnsAlign={[ColumnAlign.LEFT, ColumnAlign.CENTER]}
						rows={reductionModeTableRows()}
					/>
					<EmeraldTable
						className="reduction-and-precision-table"
						tableId={"precision-table"}
						title={"Precision info"}
						headers={["Field", "Precision"]}
						columnsAlign={[ColumnAlign.LEFT, ColumnAlign.RIGHT]}
						rows={precisionTableRows()}
					/>
				</div>
			</div>
			<div className="expand-button-row" onClick={onExpandClick}>
				<div className="expand-button">
					{isExpandedSectionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</div>
			</div>
		</EmeraldSection>
	);
}
