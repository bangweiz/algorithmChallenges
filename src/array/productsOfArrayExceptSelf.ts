function productExceptSelf(nums: number[]): number[] {
	const prefixProduct = [1, ...nums];
	for (let i = 1; i < prefixProduct.length; i++) {
		prefixProduct[i] *= prefixProduct[i - 1];
	}

	const suffixProduct = [...nums, 1];
	for (let i = suffixProduct.length - 2; i >= 0; i--) {
		suffixProduct[i] *= suffixProduct[i + 1];
	}

	const products: number[] = new Array(nums.length).fill(0);
	for (let i = 0; i < nums.length; i++) {
		products[i] = prefixProduct[i] * suffixProduct[i + 1];
	}
	return products;
}

export default productExceptSelf;
