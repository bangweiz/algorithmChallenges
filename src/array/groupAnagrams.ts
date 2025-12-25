function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>();
	for (const str of strs) {
		const hashStr = str.split("").sort().join("");
		if (map.has(hashStr)) {
			map.get(hashStr)!.push(str);
			continue;
		}
		map.set(hashStr, [str]);
	}

	return Array.from(map.values());
}

export default groupAnagrams;
