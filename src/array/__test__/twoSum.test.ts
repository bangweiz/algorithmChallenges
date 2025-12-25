import { test, describe, expect } from "bun:test";

import twoSum from "../twoSum";

describe("twoSum", () => {
	test("returns indices for basic case", () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	});

	test("returns indices when solution is not at start", () => {
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	});

	test("returns indices when numbers are the same", () => {
		expect(twoSum([3, 3], 6)).toEqual([0, 1]);
	});
});
