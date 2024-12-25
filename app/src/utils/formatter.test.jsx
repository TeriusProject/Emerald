/* formatter.test.jsx
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

import {
	formatFloatingPoint,
	formatTime,
	transposed,
	ordinal
} from "./formatter";

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
	const timeUnit = { symbol: 'h' };

	test('formats time correctly with unit', () => {
		expect(formatTime(5, timeUnit)).toBe('5 h');
	});

	test('formats floating point time correctly with unit', () => {
		expect(formatTime(2.5, timeUnit)).toBe('2.5 h');
	});

	test('handles zero time correctly', () => {
		expect(formatTime(0, timeUnit)).toBe('0 h');
	});

	test('formats negative time correctly with unit', () => {
		const negativeTimeUnit = { symbol: 's' };
		expect(formatTime(-3.25, negativeTimeUnit)).toBe('-3.25 s');
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

describe('ordinal function', () => {
	test('returns "1st" for input 1', () => {
		expect(ordinal(1)).toBe('1st');
	});

	test('returns "2nd" for input 2', () => {
		expect(ordinal(2)).toBe('2nd');
	});

	test('returns "3rd" for input 3', () => {
		expect(ordinal(3)).toBe('3rd');
	});

	test('returns "4th" for input 4', () => {
		expect(ordinal(4)).toBe('4th');
	});

	test('returns "21st" for input 21', () => {
		expect(ordinal(21)).toBe('21st');
	});

	test('returns "22nd" for input 22', () => {
		expect(ordinal(22)).toBe('22nd');
	});

	test('returns "23rd" for input 23', () => {
		expect(ordinal(23)).toBe('23rd');
	});

	test('returns "100th" for input 100', () => {
		expect(ordinal(100)).toBe('100th');
	});
});
