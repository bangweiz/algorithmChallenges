import { describe, expect, test } from "bun:test";

import maxArea from "../containerWithMostWater";

describe("maxArea (Container With Most Water)", () => {
	test("Example 1: Should calculate max area for [1,8,6,2,5,4,8,3,7]", () => {
		const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
		// The max area is formed between index 1 (height 8) and index 8 (height 7).
		// Width = 8 - 1 = 7.
		// Height = min(8, 7) = 7.
		// Area = 7 * 7 = 49.
		expect(maxArea(height)).toBe(49);
	});

	test("Example 2: Should handle minimum length array [1,1]", () => {
		const height = [1, 1];
		// Width = 1, Height = 1, Area = 1
		expect(maxArea(height)).toBe(1);
	});

	test("Should handle increasing heights [1, 2, 3, 4, 5]", () => {
		const height = [1, 2, 3, 4, 5];
		// Max area is 6.
		// Option A: indices 1 (val 2) and 4 (val 5) -> width 3 * height 2 = 6
		// Option B: indices 2 (val 3) and 4 (val 5) -> width 2 * height 3 = 6
		expect(maxArea(height)).toBe(6);
	});

	test("Should handle decreasing heights [5, 4, 3, 2, 1]", () => {
		const height = [5, 4, 3, 2, 1];
		// Similar to increasing, max area is 6 (indices 0 and 3, or 0 and 2)
		expect(maxArea(height)).toBe(6);
	});

	test("Should handle arrays with zeros [0, 2]", () => {
		const height = [0, 2];
		// Width 1, min height 0 -> Area 0
		expect(maxArea(height)).toBe(0);
	});

	test("Should handle zeros in the middle [1, 0, 0, 0, 1]", () => {
		const height = [1, 0, 0, 0, 1];
		// Indices 0 and 4. Width 4, height 1. Area 4.
		expect(maxArea(height)).toBe(4);
	});

	test("Should handle very large heights [10000, 10000]", () => {
		const height = [10000, 10000];
		// Width 1, height 10000
		expect(maxArea(height)).toBe(10000);
	});

	test("Should handle widely spaced tall lines [5, 1, 1, 1, 5]", () => {
		const height = [5, 1, 1, 1, 5];
		// Indices 0 and 4. Width 4, height 5. Area 20.
		expect(maxArea(height)).toBe(20);
	});
});
