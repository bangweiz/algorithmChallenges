function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const numLookingFor = target - nums[i];
		if (map.has(numLookingFor)) {
			return [map.get(numLookingFor)!, i];
		}
		map.set(nums[i], i);
	}
	return [0, 0];
}

export default twoSum;
