/* emeraldWaveScheme.jsx
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

import { Fragment, React, useState } from "react";
import { EmeraldNotification } from "./emeraldNotification";
import { uvLightNM, infraredLightNM, visibleLightNM } from "../../model/wavelengths";

const invalidWavelengthRangeMessage = `The range of wavelength must be [${uvLightNM.min}-${infraredLightNM.max}]`;

export function EmeraldWaveScheme({ width, height, maxLength, minLength, n }) {

	const [openNotification, setOpenNotification] = useState(false);

	const wavelengthBlockWidth = width / n;
	const spectrumSchemeHeight = 20;
	const blocksSectionHeight = height - spectrumSchemeHeight;
	const spectrumLength = maxLength - minLength;
	const uvSectionEndingAt = uvLightNM.max - minLength;
	const visibleLightStartingAt = Math.max(uvSectionEndingAt, 0);
	const visibleLightEndingAt = visibleLightNM.max - visibleLightStartingAt;
	const infraredStartingAt = Math.max(visibleLightEndingAt, 0);
	const infraredEndingAt = maxLength;
	const uvSectionLength = uvSectionEndingAt;
	const visibleLightSectionLength = (visibleLightEndingAt - visibleLightStartingAt);
	const infraredSectionLength = (infraredEndingAt - infraredStartingAt);
	const totalLength = uvSectionEndingAt + visibleLightSectionLength + infraredSectionLength;
	console.log(`${uvSectionLength} + ${visibleLightSectionLength} + ${infraredSectionLength} = ${spectrumLength}`)
	const schemeStyle = {
		width: `${width}px`,
		height: `${height}px`,
	};
	const spectrumSchemeStyle = {
		width: `${width}px`,
		height: `${spectrumSchemeHeight}px`,
	};
	const blocksSectionStyle = {
		width: `${width}px`,
		height: `${blocksSectionHeight}px`,
		display: "grid",
		gridTemplateColumns: "auto ".repeat(n).trimEnd(),
	};
	const onCloseNotification = () => {
		setOpenNotification(false);
	};
	const checkRange = () => {
		if (minLength < uvLightNM.min
			|| maxLength > infraredLightNM.max) {
			setOpenNotification(true);
		}
	};
	const renderBlock = (index) => {
		const borderBlockStyle = {
			height: `10px`,
			width: `${wavelengthBlockWidth}px`,
			borderColor: "#bebebe",
		}
		if (index < n - 1) {
			borderBlockStyle["borderRightStyle"] = "solid";
			borderBlockStyle["borderRightWidth"] = "1px"
		}

		return (
			<div
				key={`wavelength-block-${index}`}
				className="wavelength-block"
				style={borderBlockStyle}
			>
			</div>
		)
	};
	const renderUvSection = () => {
		const lengthPerc = uvSectionLength / totalLength;
		const pixelLength = width * lengthPerc;
		const uvSectionStyle = {
			width: `${pixelLength}px`,
			height: `${spectrumSchemeHeight}px`,
		};

		return (
			<div className="spectrum-subsection" style={uvSectionStyle}>
				UV
			</div>
		);
	};
	const renderVisibleLightSection = () => {
		const lengthPerc = visibleLightSectionLength / totalLength;
		const pixelLength = width * lengthPerc;
		const visibleSectionStyle = {
			width: `${pixelLength}px`,
			height: `${spectrumSchemeHeight}px`,
		};

		return (
			<div className="visible-light-subsection" style={visibleSectionStyle}>
			</div>
		);
	};
	const renderInfraredSection = () => {
		const lengthPerc = infraredSectionLength / totalLength;
		const pixelLength = width * lengthPerc;
		const infraRedSectionStyle = {
			width: `${pixelLength}px`,
			height: `${spectrumSchemeHeight}px`,
		};

		return (
			<div style={infraRedSectionStyle}>
				IR
			</div>
		);
	};

	checkRange();

	return (
		<Fragment>
			<EmeraldNotification
				id={`invalid-wavelength-range`}
				open={openNotification}
				handleClose={onCloseNotification}
				message={invalidWavelengthRangeMessage}
			/>
			<div className="wavelength-scheme" style={schemeStyle}>
				<div className="wavelength-block-container" style={blocksSectionStyle}>
					{[...Array(n).keys()].map((i) => renderBlock(i))}
				</div>
				<div className="spectrum-scheme" style={spectrumSchemeStyle}>
					{uvSectionLength > 0 ? renderUvSection() : <Fragment></Fragment>}
					{visibleLightEndingAt > 0 ? renderVisibleLightSection() : <Fragment></Fragment>}
					{infraredSectionLength > 0 ? renderInfraredSection() : <Fragment></Fragment>}
				</div>
			</div>
		</Fragment>
	);
}
