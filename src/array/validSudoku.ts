function isValidSudoku(board: string[][]): boolean {
	const n = 9;
	const rowNumCount: number[] = new Array(n);
	const colNumCount: number[] = new Array(n);
	const boxNumCount: number[] = new Array(n);

	for (let i = 0; i < n; i++) {
		rowNumCount.fill(0);
		colNumCount.fill(0);
		boxNumCount.fill(0);

		for (let j = 0; j < n; j++) {
			const rowNumber = board[i][j];
			if (rowNumber !== ".") {
				rowNumCount[Number(rowNumber) - 1]++;
			}

			const colNumber = board[j][i];
			if (colNumber !== ".") {
				colNumCount[Number(colNumber) - 1]++;
			}

			const boxNumber =
				board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
			if (boxNumber !== ".") {
				boxNumCount[Number(boxNumber) - 1]++;
			}
		}

		if (!valid()) {
			return false;
		}
	}

	return true;

	function valid() {
		return (
			rowNumCount.every((count) => count <= 1) &&
			colNumCount.every((count) => count <= 1) &&
			boxNumCount.every((count) => count <= 1)
		);
	}
}

export default isValidSudoku;
