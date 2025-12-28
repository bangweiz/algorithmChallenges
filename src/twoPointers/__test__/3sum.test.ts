import { describe, expect, test } from "bun:test";

import threeSum from "../3sum";

// Helper to normalize the output for comparison (sorts internal numbers and the array of arrays)
const normalize = (triplets: number[][]) => {
	return triplets
		.map((t) => t.slice().sort((a, b) => a - b)) // Sort numbers inside each triplet
		.sort((a, b) => {
			// Sort the triplets themselves to ensure consistent order
			if (a[0] !== b[0]) return a[0] - b[0];
			if (a[1] !== b[1]) return a[1] - b[1];
			return a[2] - b[2];
		});
};

describe("threeSum", () => {
	test("Example 1: Should return unique triplets summing to 0", () => {
		const nums = [-1, 0, 1, 2, -1, -4];
		const expected = [
			[-1, -1, 2],
			[-1, 0, 1],
		];

		// Normalize both actual and expected to ignore order differences
		expect(normalize(threeSum(nums))).toEqual(normalize(expected));
	});

	test("Example 2: Should return empty array if no triplets sum to 0", () => {
		const nums = [0, 1, 1];
		const expected: number[][] = [];
		expect(threeSum(nums)).toEqual(expected);
	});

	test("Example 3: Should handle all zeros", () => {
		const nums = [0, 0, 0];
		const expected = [[0, 0, 0]];
		expect(normalize(threeSum(nums))).toEqual(normalize(expected));
	});

	test("Should handle multiple zeros correctly (e.g. four zeros)", () => {
		const nums = [0, 0, 0, 0];
		// Should still only return one unique triplet
		const expected = [[0, 0, 0]];
		expect(normalize(threeSum(nums))).toEqual(normalize(expected));
	});

	test("Should handle large negative numbers and mixed inputs", () => {
		const nums = [-5, 1, 4, -5, 10, -5];
		// -5 + 1 + 4 = 0
		// -5 + -5 + 10 = 0
		const expected = [
			[-5, -5, 10],
			[-5, 1, 4],
		];
		expect(normalize(threeSum(nums))).toEqual(normalize(expected));
	});

	test("Should return empty for array with no solution", () => {
		const nums = [1, 2, 3];
		expect(threeSum(nums)).toEqual([]);
	});
});
