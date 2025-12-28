function trap(height: number[]): number {
	const rightMax = [...height];
	for (let i = height.length - 2; i >= 0; i--) {
		rightMax[i] = Math.max(rightMax[i + 1], height[i]);
	}

	let trappedWater = 0;
	let leftMax = height[0];
	for (let i = 1; i < height.length - 1; i++) {
		const currentHeight = height[i];
		leftMax = Math.max(leftMax, currentHeight);
		if (currentHeight >= leftMax || currentHeight >= rightMax[i + 1]) {
			continue;
		}
		trappedWater += Math.min(leftMax, rightMax[i + 1]) - currentHeight;
	}
	return trappedWater;
}

export default trap;
