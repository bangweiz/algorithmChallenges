function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const asciiCodeOfLowerA = 97;
	const map: number[] = new Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		map[s.charCodeAt(i) - asciiCodeOfLowerA]++;
		map[t.charCodeAt(i) - asciiCodeOfLowerA]--;
	}

	return map.every((count) => count === 0);
}

export default isAnagram;
