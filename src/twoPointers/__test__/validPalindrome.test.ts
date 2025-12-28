import { test, describe, expect } from "bun:test";

import isPalindrome from "../validPalindrome";

describe("isPalindrome", () => {
	test("Example 1: Should ignore punctuation and case ('A man, a plan, a canal: Panama')", () => {
		const s = "A man, a plan, a canal: Panama";
		expect(isPalindrome(s)).toBe(true);
	});

	test("Example 2: Should return false for non-palindromes ('race a car')", () => {
		const s = "race a car";
		// Cleans to "raceacar", which is not a palindrome
		expect(isPalindrome(s)).toBe(false);
	});

	test("Example 3: Should handle strings containing only whitespace", () => {
		const s = " ";
		// Cleans to "", which is a valid palindrome
		expect(isPalindrome(s)).toBe(true);
	});

	test("Should return true for an empty string", () => {
		const s = "";
		expect(isPalindrome(s)).toBe(true);
	});

	test("Should return true for a single character", () => {
		const s = "a";
		expect(isPalindrome(s)).toBe(true);
	});

	test("Should handle strings with only symbols (results in empty string)", () => {
		const s = "!!!, ...";
		expect(isPalindrome(s)).toBe(true);
	});

	test("Should be case insensitive for simple strings", () => {
		const s = "Noon";
		expect(isPalindrome(s)).toBe(true);
	});

	test("Should handle alphanumeric characters correctly", () => {
		const s = "0P";
		// Cleans to "0p" or "0P", which is not a palindrome
		expect(isPalindrome(s)).toBe(false);
	});
});
