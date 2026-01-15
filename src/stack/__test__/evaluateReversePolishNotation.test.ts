import { describe, expect, test, beforeEach } from "bun:test";

import evalRPN from "../evaluateReversePolishNotation";

describe("evalRPN (Evaluate Reverse Polish Notation)", () => {
	test("Example 1: Simple addition and multiplication ['2', '1', '+', '3', '*']", () => {
		const tokens = ["2", "1", "+", "3", "*"];
		// (2 + 1) * 3 = 9
		expect(evalRPN(tokens)).toBe(9);
	});

	test("Example 2: Division and addition ['4', '13', '5', '/', '+']", () => {
		const tokens = ["4", "13", "5", "/", "+"];
		// 13 / 5 = 2.6 -> truncates to 2
		// 4 + 2 = 6
		expect(evalRPN(tokens)).toBe(6);
	});

	test("Example 3: Complex nested expression", () => {
		const tokens = [
			"10",
			"6",
			"9",
			"3",
			"+",
			"-11",
			"*",
			"/",
			"*",
			"17",
			"+",
			"5",
			"+",
		];
		// Breakdown:
		// 9 + 3 = 12
		// 12 * -11 = -132
		// 6 / -132 = 0 (truncates toward zero)
		// 10 * 0 = 0
		// 0 + 17 = 17
		// 17 + 5 = 22
		expect(evalRPN(tokens)).toBe(22);
	});

	test("Should truncate division toward zero for negative results", () => {
		// 6 / -132 should be 0, not -1 (floor)
		const tokens = ["6", "-132", "/"];
		expect(evalRPN(tokens)).toBe(0);

		// -13 / 5 should be -2, not -3
		const tokens2 = ["-13", "5", "/"];
		expect(evalRPN(tokens2)).toBe(-2);
	});

	test("Should handle subtraction correctly (order matters)", () => {
		const tokens = ["4", "3", "-"];
		// 4 - 3 = 1
		expect(evalRPN(tokens)).toBe(1);

		const tokens2 = ["3", "4", "-"];
		// 3 - 4 = -1
		expect(evalRPN(tokens2)).toBe(-1);
	});

	test("Should handle single integer input", () => {
		const tokens = ["18"];
		expect(evalRPN(tokens)).toBe(18);
	});
});
