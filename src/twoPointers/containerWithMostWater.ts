function maxArea(height: number[]): number {
	let res = 0;
	let left = 0;
	let right = height.length - 1;
	while (left < right) {
		res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return res;
}

export default maxArea;
