import { describe, expect, test } from "bun:test";

import trap from "../trappingRainWater";

describe("trap (Trapping Rain Water)", () => {
	test("Example 1: Complex elevation map [0,1,0,2,1,0,1,3,2,1,2,1]", () => {
		const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
		expect(trap(height)).toBe(6);
	});

	test("Example 2: Bowl shape with uneven edges [4,2,0,3,2,5]", () => {
		const height = [4, 2, 0, 3, 2, 5];
		expect(trap(height)).toBe(9);
	});

	test("Should return 0 for ascending heights (cannot trap water)", () => {
		const height = [1, 2, 3, 4, 5];
		expect(trap(height)).toBe(0);
	});

	test("Should return 0 for descending heights (cannot trap water)", () => {
		const height = [5, 4, 3, 2, 1];
		expect(trap(height)).toBe(0);
	});

	test("Should return 0 for flat surface", () => {
		const height = [3, 3, 3, 3];
		expect(trap(height)).toBe(0);
	});

	test("Should return 0 for empty array", () => {
		const height: number[] = [];
		expect(trap(height)).toBe(0);
	});

	test("Should return 0 for single element or two elements", () => {
		expect(trap([5])).toBe(0);
		expect(trap([5, 8])).toBe(0);
	});

	test("Should handle simple bucket [5, 0, 5]", () => {
		const height = [5, 0, 5];
		// Walls are height 5, bottom is 0. Water trapped is 5.
		expect(trap(height)).toBe(5);
	});

	test("Should handle W shape [5, 1, 5, 1, 5]", () => {
		const height = [5, 1, 5, 1, 5];
		// Two buckets of depth 4. Total 8.
		expect(trap(height)).toBe(8);
	});
});
