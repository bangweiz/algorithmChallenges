class MinStack {
	private stack: number[] = [];
	private minStack: number[] = [];

	push(val: number): void {
		this.stack.push(val);
		if (
			this.minStack.length === 0 ||
			this.minStack[this.minStack.length - 1] >= val
		) {
			this.minStack.push(val);
		}
	}

	pop(): void {
		const val = this.stack.pop();
		if (this.minStack[this.minStack.length - 1] === val) {
			this.minStack.pop();
		}
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}

export default MinStack;
