import { describe, test, expect } from "bun:test";

import productExceptSelf from "../productsOfArrayExceptSelf";

describe("productExceptSelf", () => {
	test("calculates product for basic positive numbers", () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});

	test("handles array with zero and negative numbers", () => {
		const products = productExceptSelf([-1, 1, 0, -3, 3]).map((product) =>
			product === 0 ? 0 : product,
		);
		expect(products).toEqual([0, 0, 9, 0, 0]);
	});

	test("handles two elements", () => {
		expect(productExceptSelf([2, 3])).toEqual([3, 2]);
	});
});
