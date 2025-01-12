/* emeraldDragAndDrop.jsx
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

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./components.css";

export const EmeraldDragAndDrop = ({ onUpload }) => {

	const onDrop = useCallback((acceptedFiles) => {
		console.log("Uploaded files:", acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div
			{...getRootProps()}
			className="drag-and-drop-div"
			style={{
				backgroundColor: isDragActive ? "var(--emerald-color-transperent)" : "#fafafa",
			}}
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop here...</p>
			) : (
				<p>Let's start by dragging & dropping your ADF file here (or click to select one)</p>
			)}
		</div>
	);
}
