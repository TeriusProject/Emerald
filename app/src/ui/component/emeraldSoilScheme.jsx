/* emeraldSoilScheme.jsx
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

import { Fragment, React } from "react";
import { ReactComponent as Grass } from "../../img/grass.svg"
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import "./components.css";

export function EmeraldSoilScheme({ height, width, n, maxDepth, tY }) {
	const blockBottomMargin = 30;
	const blockHeight = height / n;
	const blockContentHeight = blockHeight - blockBottomMargin;
	const blockContentWidth = width + 120;
	const sensorTopPosition = blockHeight - blockBottomMargin - 15;
	const sensorLeftPosition = (width / 2) - 10;
	const labelTopPosition = blockContentHeight - 20;
	const blockStyle = {
		height: `${blockHeight}px`,
		width: `${width}px`
	};
	const blockContentStyle = {
		height: `${blockContentHeight}px`,
		width: `${blockContentWidth}px`
	};
	const iconStyle = {
		top: `${sensorTopPosition}px`,
		left: `${sensorLeftPosition}px`
	};
	const labelStyle = {
		top: `${labelTopPosition}px`
	}
	const blockSizeMm = (maxDepth - tY) / n;
	const renderBlock = (index) => {
		return (
			<div key={`scheme-block-${index}`} className="soil-scheme-block" style={blockStyle}>
				<div key={`block-content-${index}`} className="soil-block-content" style={blockContentStyle}>
					<DeviceThermostatIcon key={`icon-${index}`} className="sensor" style={iconStyle} />
					<div key={`label-${index}`} className="block-label" style={labelStyle}>
						{`${blockSizeMm * (index + 1)}mm`}
					</div>
				</div>
			</div>
		);
	};

	const renderTranslationBlock = () => {
		const translationBlockStyle = {
			width: `${width}px`,
			height: `20px`,
		};
		const translationBlockContent = {
			width: `${blockContentWidth}px`,
			height: '100%',
		};
		const translationBlockLabel = {
			top: `1px`
		};
		return (
			<div className="translation-block" style={translationBlockStyle}>
				<div className="translation-block-content" style={translationBlockContent}>
					<div className="block-label" style={translationBlockLabel}>
						{`${tY}mm`}
					</div>
				</div>
			</div>
		);
	};
	
	const renderShiftBlock = () => {
		const shiftBlockStyle = {
			width: `${width}px`,
			height: `30px`,
		};
		return (
			<div className="soil-scheme-block" style={shiftBlockStyle}>
			</div>
		)
	}

	return (
		<div className="soil-scheme">
			<Grass style={{ width: `${width}px`, height: "20px" }} />
			{tY ? renderTranslationBlock() : <Fragment></Fragment>}
			{renderShiftBlock()}
			{[...Array(n).keys()].map(i => renderBlock(i))}
		</div>
	);
}
