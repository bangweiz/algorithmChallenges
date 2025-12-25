function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();
	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	const frequentArr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
	return frequentArr.slice(0, k).map((arr) => arr[0]);
}

export default topKFrequent;
