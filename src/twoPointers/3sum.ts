function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);

	const set = new Set<string>();
	const res: number[][] = [];
	for (let i = 0; i < nums.length; i++) {
		const target = -nums[i];

		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			const sum = nums[left] + nums[right];
			if (sum < target) {
				left++;
				continue;
			}
			if (sum > target) {
				right--;
				continue;
			}
			const indexes = [nums[i], nums[left], nums[right]];
			const hash = indexes.join(".");
			left++;
			right--;
			if (set.has(hash)) {
				continue;
			}
			res.push(indexes);
			set.add(hash);
		}
	}
	return res;
}

export default threeSum;
