import { describe, test, expect, beforeEach } from "bun:test";

import EncodeAndDecodeStrings from "../encodeAndDecodeStrings";

describe("EncodeAndDecodeStrings", () => {
	let codec: EncodeAndDecodeStrings;

	// Create new instance before each test
	beforeEach(() => {
		codec = new EncodeAndDecodeStrings();
	});

	test("encodes and decodes basic word array", () => {
		const input = ["neet", "code", "love", "you"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("encodes and decodes array with special characters", () => {
		const input = ["we", "say", ":", "yes"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles empty array", () => {
		const input: string[] = [];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles single empty string", () => {
		const input = [""];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles multiple empty strings", () => {
		const input = ["", "", ""];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles mix of empty and non-empty strings", () => {
		const input = ["hello", "", "world", ""];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles single character strings", () => {
		const input = ["a", "b", "c"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with delimiters", () => {
		const input = ["abc#def", "ghi#jkl"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with numbers", () => {
		const input = ["123", "456", "789"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with spaces", () => {
		const input = ["hello world", "foo bar", "test string"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with newlines", () => {
		const input = ["line1\nline2", "text\nmore\ntext"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with tabs", () => {
		const input = ["tab\there", "another\ttab"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles unicode characters", () => {
		const input = ["hello", "世界", "🌍"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles very long strings", () => {
		const longString = "a".repeat(1000);
		const input = [longString, "short", longString];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles single string", () => {
		const input = ["onlystring"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with repeated delimiters", () => {
		const input = ["###", "###", "abc"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings that look like encoded format", () => {
		const input = ["4#test", "3#abc"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles special characters and symbols", () => {
		const input = ["!@#$%^&*()", '<>?:"{}|'];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles large array", () => {
		const input = Array(100)
			.fill("test")
			.map((s, i) => `${s}${i}`);
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with backslashes", () => {
		const input = ["path\\to\\file", "another\\path"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("handles strings with quotes", () => {
		const input = ["'single'", '"double"', "mixed'\"quotes"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("encode returns string type", () => {
		const input = ["test"];
		const encoded = codec.encode(input);
		expect(typeof encoded).toBe("string");
	});

	test("decode returns array type", () => {
		const input = ["test"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(Array.isArray(decoded)).toBe(true);
	});

	test("handles consecutive identical strings", () => {
		const input = ["same", "same", "same"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("preserves string order", () => {
		const input = ["first", "second", "third", "fourth"];
		const encoded = codec.encode(input);
		const decoded = codec.decode(encoded);
		expect(decoded).toEqual(input);
		expect(decoded[0]).toBe("first");
		expect(decoded[3]).toBe("fourth");
	});
});
