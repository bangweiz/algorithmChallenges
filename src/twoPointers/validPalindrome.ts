function isPalindrome(s: string): boolean {
	const convertedS = s.toLowerCase();

	let leftIndex = 0;
	let rightIndex = convertedS.length - 1;
	while (leftIndex < rightIndex) {
		if (!isValidChar(leftIndex)) {
			leftIndex++;
			continue;
		}
		if (!isValidChar(rightIndex)) {
			rightIndex--;
			continue;
		}
		if (convertedS.charAt(leftIndex) !== convertedS.charAt(rightIndex)) {
			return false;
		}
		leftIndex++;
		rightIndex--;
	}
	return true;

	function isValidChar(index: number): boolean {
		const char = convertedS.charAt(index);
		return ("0" <= char && char <= "9") || ("a" <= char && char <= "z");
	}
}

export default isPalindrome;
