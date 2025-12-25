class EncodeAndDecodeStrings {
	public encode(strs: string[]): string {
		if (strs.length === 0) {
			return "";
		}
		const lengthString = strs.map((str) => str.length).join(",");
		return `${lengthString}.${strs.join("")}`;
	}

	public decode(str: string): string[] {
		if (str.length === 0) {
			return [];
		}

		const index = str.indexOf(".");
		const lengths = str.slice(0, index).split(",").map(Number);

		let start = index + 1;
		const res: string[] = [];
		for (const length of lengths) {
			res.push(str.slice(start, start + length));
			start += length;
		}
		return res;
	}
}

export default EncodeAndDecodeStrings;
