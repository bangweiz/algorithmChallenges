import { test, describe, expect } from "bun:test";

import containsDuplicate from "../containsDuplicate";

describe("containsDuplicate", () => {
	test("returns true when array has duplicates at different positions", () => {
		expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
	});

	test("returns false when all elements are distinct", () => {
		expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
	});

	test("returns true when array has multiple duplicates", () => {
		expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
	});
});
