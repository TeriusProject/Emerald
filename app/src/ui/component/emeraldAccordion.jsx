/* emeraldAccordion.jsx
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

import { React, useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./components.css";

export const EmeraldAccordion = ({ openByDefault, title, content, sx, className }) => {
	const [isOpen, setIsOpen] = useState(openByDefault);
	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div className={`analytics-accordion ${className ? className : ''}`} style={sx}>
			<div className="analytics-accordion-title no-select" onClick={toggle}>
				{isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
				{title}
			</div>
			<div
				className="analytics-accordion-body" style={{ display: isOpen ? "block" : "none" }}>
				{content}
			</div>
		</div>
	);
}
