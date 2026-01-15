import { describe, expect, test, beforeEach } from "bun:test";

import MinStack from "../minimumStack";

describe("MinStack", () => {
	let minStack: MinStack;

	beforeEach(() => {
		minStack = new MinStack();
	});

	test("Example 1: Standard flow from problem description", () => {
		// Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
		// Values: [[],[-2],[0],[-3],[],[],[],[]]

		minStack.push(-2);
		minStack.push(0);
		minStack.push(-3);

		expect(minStack.getMin()).toBe(-3); // Returns -3

		minStack.pop(); // Removes -3

		expect(minStack.top()).toBe(0); // Returns 0
		expect(minStack.getMin()).toBe(-2); // Returns -2
	});

	test("Should handle duplicate minimum values correctly", () => {
		// Push: 5 -> 2 -> 2
		minStack.push(5);
		minStack.push(2);
		minStack.push(2);

		expect(minStack.getMin()).toBe(2);

		minStack.pop(); // Removes the top '2'

		// The minimum should STILL be 2 because one '2' remains
		expect(minStack.getMin()).toBe(2);
		expect(minStack.top()).toBe(2);

		minStack.pop(); // Removes the second '2'

		// Now the minimum should revert to 5
		expect(minStack.getMin()).toBe(5);
		expect(minStack.top()).toBe(5);
	});

	test("Should handle mixed positive and negative numbers", () => {
		minStack.push(-10); // Min: -10
		expect(minStack.getMin()).toBe(-10);

		minStack.push(10); // Min: -10 (10 > -10)
		expect(minStack.getMin()).toBe(-10);

		minStack.push(-20); // Min: -20
		expect(minStack.getMin()).toBe(-20);

		minStack.pop(); // Removes -20
		expect(minStack.getMin()).toBe(-10); // Back to -10
	});

	test("Should verify top() does not remove elements", () => {
		minStack.push(100);
		minStack.push(200);

		expect(minStack.top()).toBe(200);
		expect(minStack.top()).toBe(200); // Calling it again should still be 200
		expect(minStack.getMin()).toBe(100);
	});

	test("Should handle single element stack", () => {
		minStack.push(7);
		expect(minStack.top()).toBe(7);
		expect(minStack.getMin()).toBe(7);

		minStack.pop();
		// Stack is now empty (Constraints say pop/top/getMin won't be called on empty,
		// so we don't strictly need to test empty state behavior here)
	});
});
