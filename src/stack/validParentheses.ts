function isValid(s: string): boolean {
	const stack: string[] = [];

	for (const char of s) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
			continue;
		}

		if (stack.length === 0) {
			return false;
		}

		const lastChar = stack[stack.length - 1];
		const match =
			(char === ")" && lastChar === "(") ||
			(char === "]" && lastChar === "[") ||
			(char === "}" && lastChar === "{");

		if (match) {
			stack.pop();
			continue;
		}
		return false;
	}
	return stack.length === 0;
}

export default isValid;
