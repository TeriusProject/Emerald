import { SelectorDataType } from "../model/seriesSelectorDataType";

export const formatTime = (time, timeUnit) => {
	const timeStr = time.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
	return `${timeStr} ${timeUnit.symbol}`
}

export const formatDataTypeUnit = (dataType) => {
	switch (dataType) {
		case SelectorDataType.WATER_USE:
			return "ml";
		case SelectorDataType.TEMPERATURE:
			return "\u2103";
		default:
			break;
	}
	return "";
}
