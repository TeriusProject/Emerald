import { formatFloatingPoint, formatTime, transposed } from "./formatter";

describe('formatFloatingPoint', () => {
	test('formats integer without decimal places', () => {
		expect(formatFloatingPoint(1000)).toBe('1,000');
	});

	test('formats float with two decimal places', () => {
		expect(formatFloatingPoint(1234.567)).toBe('1,234.57');
	});

	test('handles zero correctly', () => {
		expect(formatFloatingPoint(0)).toBe('0');
	});

	test('formats negative numbers', () => {
		expect(formatFloatingPoint(-1234.567)).toBe('-1,234.57');
	});

	test('handles large numbers', () => {
		expect(formatFloatingPoint(1234567890.123)).toBe('1,234,567,890.12');
	});
});

describe('formatTime', () => {
	const timeUnit = { symbol: 'hours' };

	test('formats time correctly with unit', () => {
		expect(formatTime(5, timeUnit)).toBe('5 hours');
	});

	test('formats floating point time correctly with unit', () => {
		expect(formatTime(2.5, timeUnit)).toBe('2.5 hours');
	});

	test('handles zero time correctly', () => {
		expect(formatTime(0, timeUnit)).toBe('0 hours');
	});

	test('formats negative time correctly with unit', () => {
		const negativeTimeUnit = { symbol: 'minutes' };
		expect(formatTime(-3.25, negativeTimeUnit)).toBe('-3.25 minutes');
	});
});

describe('transposed', () => {
	test('transposes a 2x2 matrix', () => {
		const input = [
			[1, 2],
			[3, 4]
		];
		const expectedOutput = [
			[1, 3],
			[2, 4]
		];
		expect(transposed(input)).toEqual(expectedOutput);
	});

	test('transposes a 3x3 matrix', () => {
		const input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		];
		const expectedOutput = [
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9]
		];
		expect(transposed(input)).toEqual(expectedOutput);
	});

	test('transposes a rectangular matrix (3x2)', () => {
		const input = [
			[1, 2],
			[3, 4],
			[5, 6]
		];
		const expectedOutput = [
			[1, 3, 5],
			[2, 4, 6]
		];
		expect(transposed(input)).toEqual(expectedOutput);
	});

	test('transposes a single row matrix', () => {
		const input = [
			[1, 2, 3]
		];
		const expectedOutput = [
			[1],
			[2],
			[3]
		];
		expect(transposed(input)).toEqual(expectedOutput);
	});

	test('transposes a single column matrix', () => {
		const input = [
			[1],
			[2],
			[3]
		];
		const expectedOutput = [
			[1, 2, 3]
		];
		expect(transposed(input)).toEqual(expectedOutput);
	});

	test('handles an empty matrix', () => {
		const input = [];
		const expectedOutput = [];
		expect(transposed(input)).toEqual(expectedOutput);
	});
});
