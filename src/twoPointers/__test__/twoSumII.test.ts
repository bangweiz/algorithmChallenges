import { describe, expect, test } from "bun:test";

import twoSum from "../twoSumII";

describe("twoSum", () => {
	test("Example 1: Should find indices for [2, 7, 11, 15] with target 9", () => {
		const numbers = [2, 7, 11, 15];
		const target = 9;
		// 2 + 7 = 9. Indices 0 and 1. 1-based: [1, 2]
		expect(twoSum(numbers, target)).toEqual([1, 2]);
	});

	test("Example 2: Should find indices for [2, 3, 4] with target 6", () => {
		const numbers = [2, 3, 4];
		const target = 6;
		// 2 + 4 = 6. Indices 0 and 2. 1-based: [1, 3]
		expect(twoSum(numbers, target)).toEqual([1, 3]);
	});

	test("Example 3: Should handle zero and negative numbers [-1, 0]", () => {
		const numbers = [-1, 0];
		const target = -1;
		// -1 + 0 = -1. Indices 0 and 1. 1-based: [1, 2]
		expect(twoSum(numbers, target)).toEqual([1, 2]);
	});

	test("Should handle all negative numbers [-5, -3, -2, -1]", () => {
		const numbers = [-5, -3, -2, -1];
		const target = -8;
		// -5 + (-3) = -8. Indices 0 and 1. 1-based: [1, 2]
		expect(twoSum(numbers, target)).toEqual([1, 2]);
	});

	test("Should handle duplicates if they form the solution [0, 0, 3, 4]", () => {
		const numbers = [0, 0, 3, 4];
		const target = 0;
		// 0 + 0 = 0. Indices 0 and 1. 1-based: [1, 2]
		expect(twoSum(numbers, target)).toEqual([1, 2]);
	});

	test("Should work with larger gaps in sorted array", () => {
		const numbers = [1, 5, 10, 20, 50];
		const target = 70;
		// 20 + 50 = 70. Indices 3 and 4. 1-based: [4, 5]
		expect(twoSum(numbers, target)).toEqual([4, 5]);
	});
});
