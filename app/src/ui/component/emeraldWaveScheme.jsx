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

import { Fragment, React, useCallback, useEffect, useState } from "react";
import { EmeraldNotification } from "./emeraldNotification";
import { uvLightNM, infraredLightNM, visibleLightNM } from "../../model/wavelengths";

const invalidWavelengthRangeMessage = "The range of wavelength must be"
	+ `[${uvLightNM.min}-${infraredLightNM.max}]`;

export function EmeraldWaveScheme({ title, width, height, maxLength, minLength, n }) {
	const [openNotification, setOpenNotification] = useState(false);

	/* 1 pixel is removed because of the bottom border 1 px thick */
	const wavelengthBlockHeight = (height / n) - 1;
	const spectrumSchemeWidth = 20;
	const blockWavelengthRange = (maxLength - minLength) / n;
	const uvStartingPoint = (uvLightNM.max - minLength) <= 0
		? undefined
		: minLength;
	const visibleStartingPoint = (visibleLightNM.max - minLength) <= 0
		? undefined
		: uvStartingPoint ? Math.min(uvLightNM.max, maxLength) : minLength;
	const irStartingPoint = (infraredLightNM.max - minLength) <= 0
		? undefined
		: visibleStartingPoint ? Math.min(visibleLightNM.max, maxLength) : minLength;
	const uvEndingPoint = visibleStartingPoint
		? visibleStartingPoint
		: maxLength;
	const visibleEndingPoint = irStartingPoint
		? irStartingPoint
		: maxLength;
	const irEndingPoint = maxLength;
	const uvLength = uvEndingPoint - uvStartingPoint;
	const visibleLength = visibleEndingPoint - visibleStartingPoint;
	const irLength = irEndingPoint - irStartingPoint;
	const schemeStyle = {
		width: `${width}px`,
		height: `${height}px`,
	};
	const spectrumSchemeStyle = {
		height: `${height}px`,
		width: `${spectrumSchemeWidth}px`,
	};
	const blocksSectionStyle = {
		height: `${height}px`,
	};
	const onCloseNotification = () => {
		setOpenNotification(false);
	};
	const checkRange = useCallback(() => {
		if (minLength < uvLightNM.min
			|| maxLength > infraredLightNM.max) {
			setOpenNotification(true);
		}
	}, [minLength, maxLength]);
	const renderBlock = (index) => {
		const borderBlockStyle = {
			height: `${wavelengthBlockHeight}px`,
		}

		if (index === 0) {
			borderBlockStyle["borderTopStyle"] = "solid";
			borderBlockStyle["borderTopWidth"] = "1px";
		}

		return (
			<div
				key={`wavelength-block-${index}`}
				className="wavelength-block"
				style={borderBlockStyle}
			>
				<span>
					{minLength + ((index + 1) * blockWavelengthRange)}nm
				</span>
			</div>
		)
	};
	const spectrumSection = (sectionLength) => {
		return {
			height: `${sectionLength}px`,
			width: `${spectrumSchemeWidth}px`,
		};
	};
	const renderUvSection = () => {
		return (
			<div className="uv-pattern" style={spectrumSection(uvLength)}></div>
		);
	};
	const renderVisibleLightSection = () => {
		return (
			<div className="visible-light-subsection" style={spectrumSection(visibleLength)}></div>
		);
	};
	const renderInfraredSection = () => {
		return (
			<div className="ir-pattern" style={spectrumSection(irLength)}></div>
		);
	};
	const renderUvLabelSection = () => {
		return (
			<div className="spectrum-secton-label" style={spectrumSection(uvLength)}>UV</div>
		);
	};
	const renderVisibleLightLabelSection = () => {
		return (
			<div className="spectrum-secton-label" style={spectrumSection(visibleLength)}>V</div>
		);
	};
	const renderInfraredLabelSection = () => {
		return (
			<div className="spectrum-secton-label" style={spectrumSection(irLength)}>IR</div>
		);
	};

	useEffect(() => {
		checkRange();
	}, [minLength, maxLength, checkRange]);

	return (
		<div className="wave-scheme-component">
			<EmeraldNotification
				id={`invalid-wavelength-range`}
				open={openNotification}
				handleClose={onCloseNotification}
				message={invalidWavelengthRangeMessage}
			/>
			{
				title ? <div className="emerald-component-title">{title}</div> : <Fragment></Fragment>
			}
			<div className="wavelength-scheme" style={schemeStyle}>
				<div className="wave-spectrum-labels">
					{uvLength ? renderUvLabelSection(): <Fragment></Fragment>}
					{visibleLength ? renderVisibleLightLabelSection() : <Fragment></Fragment>}
					{irLength ? renderInfraredLabelSection() : <Fragment></Fragment>}
				</div>
				<div className="spectrum-scheme" style={spectrumSchemeStyle}>
					{uvLength ? renderUvSection() : <Fragment></Fragment>}
					{visibleLength ? renderVisibleLightSection() : <Fragment></Fragment>}
					{irLength ? renderInfraredSection() : <Fragment></Fragment>}
				</div>
				<div className="wavelength-block-container" style={blocksSectionStyle}>
					<span className="first-wavelength-label">{minLength}nm</span>
					{[...Array(n).keys()].map((i) => renderBlock(i))}
				</div>
			</div>
		</div>
	);
}
