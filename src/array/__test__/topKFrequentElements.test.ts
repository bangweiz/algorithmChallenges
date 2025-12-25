import { describe, test, expect } from "bun:test";

import topKFrequent from "../topKFrequentElements";

function containsSameElements(arr1: number[], arr2: number[]): boolean {
	if (arr1.length !== arr2.length) return false;
	const sorted1 = [...arr1].sort((a, b) => a - b);
	const sorted2 = [...arr2].sort((a, b) => a - b);
	return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

describe("topKFrequent", () => {
	test("returns top 2 frequent elements", () => {
		const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
		expect(containsSameElements(result, [1, 2])).toBe(true);
	});

	test("returns single element when k=1", () => {
		expect(topKFrequent([1], 1)).toEqual([1]);
	});

	test("handles array with multiple frequencies", () => {
		const result = topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);
		expect(containsSameElements(result, [1, 2])).toBe(true);
	});
});
