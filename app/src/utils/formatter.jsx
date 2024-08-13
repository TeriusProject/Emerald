export const formatTime = (time, timeUnit) => {
	const timeStr = time.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
	return `${timeStr} ${timeUnit.symbol}`
}
