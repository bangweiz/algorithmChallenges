import { describe, expect, test } from "bun:test";

import isValidSudoku from "../validSudoku";

describe("isValidSudoku", () => {
	test("Example 1: Should return true for a valid Sudoku board", () => {
		const board = [
			["5", "3", ".", ".", "7", ".", ".", ".", "."],
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(true);
	});

	test("Example 2: Should return false for invalid 3x3 sub-box (duplicate 8s)", () => {
		const board = [
			["8", "3", ".", ".", "7", ".", ".", ".", "."], // Changed '5' to '8' here
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		// This is invalid because the top-left 3x3 box contains two '8's
		expect(isValidSudoku(board)).toBe(false);
	});

	test("Should return false for duplicates in a Row", () => {
		const board = [
			["5", "3", ".", ".", "7", ".", ".", ".", "5"], // Duplicate '5' at start and end of row
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(false);
	});

	test("Should return false for duplicates in a Column", () => {
		const board = [
			["5", "3", ".", ".", "7", ".", ".", ".", "."],
			["5", ".", ".", "1", "9", "5", ".", ".", "."], // Duplicate '5' in the first column (rows 0 and 1)
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(false);
	});

	test("Should return true for a completely empty board", () => {
		// An empty board (filled with dots) is technically valid state in Sudoku
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		expect(isValidSudoku(board)).toBe(true);
	});
});
