import { describe, expect, test } from "bun:test";

import isValid from "../validParentheses";

describe("isValid (Valid Parentheses)", () => {
	test("Example 1: Should return true for simple pair '()'", () => {
		expect(isValid("()")).toBe(true);
	});

	test("Example 2: Should return true for sequential pairs '()[]{}'", () => {
		expect(isValid("()[]{}")).toBe(true);
	});

	test("Example 3: Should return false for mismatched closing type '(]'", () => {
		expect(isValid("(]")).toBe(false);
	});

	test("Example 4: Should return true for nested brackets '([])'", () => {
		expect(isValid("([])")).toBe(true);
	});

	test("Example 5: Should return false for interleaved/improperly nested brackets '([)]'", () => {
		expect(isValid("([)]")).toBe(false);
	});

	test("Should return false for single opening bracket", () => {
		expect(isValid("(")).toBe(false);
	});

	test("Should return false for single closing bracket", () => {
		expect(isValid("]")).toBe(false);
	});

	test("Should return false if string starts with a closing bracket", () => {
		expect(isValid("]()[")).toBe(false);
	});

	test("Should return true for complex valid nesting '(([]){})'", () => {
		expect(isValid("(([]){})")).toBe(true);
	});

	test("Should return false for long string with one missing closer", () => {
		// ((( ... ))) but one ) is missing
		const s = "(".repeat(10) + ")".repeat(9);
		expect(isValid(s)).toBe(false);
	});
});
