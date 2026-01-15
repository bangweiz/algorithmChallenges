function evalRPN(tokens: string[]): number {
	const numbers: number[] = [];

	for (const token of tokens) {
		if (isNaN(Number(token))) {
			const v1 = numbers.pop()!;
			const v2 = numbers.pop()!;
			switch (token) {
				case "+":
					numbers.push(v2 + v1);
					break;
				case "-":
					numbers.push(v2 - v1);
					break;
				case "*":
					numbers.push(v2 * v1);
					break;
				case "/":
					const isNegative = v1 * v2 < 0;
					const res = Math.floor(Math.abs(v2) / Math.abs(v1));
					numbers.push(isNegative ? -res : res);
					break;
			}

			continue;
		}
		numbers.push(Number(token));
	}

	const res = numbers.pop()!;
	return res === 0 ? 0 : res;
}

export default evalRPN;
