function longestConsecutive(nums: number[]): number {
	const visited = new Map(nums.map((num) => [num, false]));

	return nums.reduce(
		(res, currentNumber) =>
			Math.max(findConsecutiveRecursive(currentNumber), res),
		0,
	);

	function findConsecutiveRecursive(number: number): number {
		if (!visited.has(number) || visited.get(number)) {
			return 0;
		}
		visited.set(number, true);
		return (
			1 +
			findConsecutiveRecursive(number + 1) +
			findConsecutiveRecursive(number - 1)
		);
	}
}

export default longestConsecutive;
