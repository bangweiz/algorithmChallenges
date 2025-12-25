import { describe, test, expect } from "bun:test";

import groupAnagrams from "../groupAnagrams";

function arraysEqualIgnoreOrder(arr1: string[][], arr2: string[][]): boolean {
	if (arr1.length !== arr2.length) return false;

	const sorted1 = arr1
		.map((group) => [...group].sort())
		.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
	const sorted2 = arr2
		.map((group) => [...group].sort())
		.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));

	return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

describe("groupAnagrams", () => {
	test("groups multiple anagram sets", () => {
		const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
		const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
		expect(arraysEqualIgnoreOrder(result, expected)).toBe(true);
	});

	test("handles single empty string", () => {
		const result = groupAnagrams([""]);
		expect(result).toEqual([[""]]);
	});

	test("handles single character string", () => {
		const result = groupAnagrams(["a"]);
		expect(result).toEqual([["a"]]);
	});
});
