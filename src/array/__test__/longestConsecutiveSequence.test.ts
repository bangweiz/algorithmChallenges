import { describe, expect, test } from "bun:test";

import longestConsecutive from "../longestConsecutiveSequence";

describe("longestConsecutive", () => {
	test("Example 1: Should find sequence [1, 2, 3, 4]", () => {
		const nums = [100, 4, 200, 1, 3, 2];
		expect(longestConsecutive(nums)).toBe(4);
	});

	test("Example 2: Should handle mixed order and larger sequence [0...8]", () => {
		const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
		// Sequence is 0, 1, 2, 3, 4, 5, 6, 7, 8 (length 9)
		// Note: The duplicate '0' does not break the sequence but shouldn't be counted twice
		expect(longestConsecutive(nums)).toBe(9);
	});

	test("Example 3: Should handle duplicates correctly (1, 0, 1, 2)", () => {
		const nums = [1, 0, 1, 2];
		// Sequence is 0, 1, 2 (length 3)
		expect(longestConsecutive(nums)).toBe(3);
	});

	test("Should return 0 for an empty array", () => {
		const nums: number[] = [];
		expect(longestConsecutive(nums)).toBe(0);
	});

	test("Should return 1 for a single element array", () => {
		const nums = [10];
		expect(longestConsecutive(nums)).toBe(1);
	});

	test("Should handle negative numbers", () => {
		const nums = [-1, -2, -3, 10, 11];
		// Sequence is -3, -2, -1 (length 3)
		expect(longestConsecutive(nums)).toBe(3);
	});

	test("Should handle unsorted array with no consecutive elements", () => {
		const nums = [10, 30, 50, 20];
		// Longest sequence is just a single number itself, so length is 1
		expect(longestConsecutive(nums)).toBe(1);
	});
});
