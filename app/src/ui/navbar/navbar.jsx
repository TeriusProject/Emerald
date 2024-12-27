/* navbar.jsx
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

import { React, Fragment, useState, useEffect } from "react";
import { TimeUnitSelector } from "../component/emeraldSelector";
import { EmeraldNotification } from "../component/emeraldNotification";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as EmeraldName } from "../../img/emerald.svg";
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css";

const menuNotImplementedMessage = "Menu hasn't been implemented yet";

export function Navbar({ timeUnit, onUnitChange }) {
	const [openNotification, setOpenNotification] = useState(false);
	const [isShrunk, setIsShrunk] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 85)
				setIsShrunk(true);
			else
				setIsShrunk(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [setIsShrunk]);

	const defaultNavbar = (
		<div className="navbar">
			<Logo />
		</div>
	);
	const shrunkNavbar = (
		<Fragment>
			<div className="navbar-shrunk">
				<EmeraldName />
				<div className="navbar-shrunk-item-container">
					<TimeUnitSelector init={timeUnit} onChange={onUnitChange} />
					<div className="navbar-menu-button" onClick={() => setOpenNotification(true)}>
						<MenuIcon />
					</div>
				</div>
			</div>
			<EmeraldNotification
				id={`menu-not-implemented`}
				open={openNotification}
				handleClose={() => setOpenNotification(false)}
				message={menuNotImplementedMessage}
			/>
		</Fragment>
	);

	return isShrunk ? shrunkNavbar : defaultNavbar;
}
