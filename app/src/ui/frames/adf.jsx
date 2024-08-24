/* adf.jsx
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

import { React, useCallback, useEffect, useState } from "react";
import { Header } from "./sections/header";
import { Series } from "./sections/series";
import { timeUnits } from "../../model/timeUnit";
import { Ribbon } from "./sections/ribbon";
import { EmeraldNotification } from "../component/emeraldNotification";
import { SeriesSelector } from "./sections/seriesSelector";
import "./frames.css";

const warningMessage = "WARN: The time unit you chose is bigger than the measure itself";

export function Adf({ adf }) {
	const [timeUnit, setTimeUnit] = useState(timeUnits[0]);
	const [timeLength, setTimeLength] = useState(adf.metadata.periodSec);
	const [currentSeries, setCurrentSeries] = useState({ index: 0, number: 1 });
	const [openNotification, setOpenNotification] = useState(false);
	const [repeatedMask, setRepeatedMask] = useState([]);

	const onUnitChange = (_, newValue) => {
		if (!newValue) return;

		if (checkTimeUnit(newValue))
			setOpenNotification(true);
		setTimeUnit(newValue);
	};

	const getRepetatedMask = (series) => {
		return series.map(s => s.repeated);
	};

	const onCloseNotification = () => {
		setOpenNotification(false);
	};

	const checkTimeUnit = (newValue) => {
		return (adf.metadata.periodSec < newValue.timeInSeconds)
	};

	const getSeriesIndex = useCallback((seriesNumber) => {
		if (repeatedMask.length === 0) return 0;
		for (var i = 0, acc = 0; i < repeatedMask.length; i++) {
			var lowerBound = acc;
			acc += repeatedMask[i];
			if (seriesNumber >= lowerBound && seriesNumber <= acc)
				return i;
		}
		throw new Error("Series index out of bound");
	},[repeatedMask]);

	const onSeriesRangeChange = useCallback((newRange) => {
		setCurrentSeries({
			index: getSeriesIndex(newRange[0]),
			number: newRange[0],
		});
	}, [getSeriesIndex]);

	const onSeriesClick = (_, clickedItem) => {
		setCurrentSeries({
			index: getSeriesIndex(clickedItem.dataIndex),
			number: clickedItem.dataIndex + 1,
		});
	};

	useEffect(() => {
		setTimeLength(adf.metadata.periodSec / timeUnit.timeInSeconds);
	}, [timeUnit, adf.metadata.periodSec]);

	useEffect(() => {
		setRepeatedMask(getRepetatedMask(adf.series));
	}, [adf]);

	return (
		<div className="adf-content">
			<EmeraldNotification
				id={`unit-conversion-failed`}
				open={openNotification}
				handleClose={onCloseNotification}
				message={warningMessage}
			/>
			<Ribbon timeUnit={timeUnit} onUnitChange={onUnitChange} />
			<Header adf={adf} time={timeLength} timeUnit={timeUnit} />
			<SeriesSelector
				time={timeLength}
				timeUnit={timeUnit}
				adf={adf}
				onRangeChange={onSeriesRangeChange}
				onSeriesClick={onSeriesClick}
			/>
			<p>
				...
			</p>
			<Series
				adf={adf}
				time={timeLength}
				timeUnit={timeUnit}
				selectedSeriesMetadata={currentSeries}
				setSelectedSeriesMetadata={setCurrentSeries}
			/>
		</div>
	);
}
