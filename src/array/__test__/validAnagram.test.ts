import { test, describe, expect } from "bun:test";

import isAnagram from "../validAnagram";

describe("isAnagram", () => {
	test("returns true for valid anagrams", () => {
		expect(isAnagram("anagram", "nagaram")).toBe(true);
	});

	test("returns false when strings are not anagrams", () => {
		expect(isAnagram("rat", "car")).toBe(false);
	});

	test("returns true for empty strings", () => {
		expect(isAnagram("", "")).toBe(true);
	});
});
