const generateGrid = () => {
	const rows = 60;
	const columns = 27;
	let pickBurningTree = true;
	let grid = new Array(rows).fill(null).map(() => new Array(columns).fill(0));

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (Math.random() > 0.9) {
				grid[i][j] = { type: 3 };
			} else grid[i][j] = { type: 0 };
		}
	}

	while (pickBurningTree) {
		let randomRow = Math.floor(Math.random() * rows);
		let randomColumn = Math.floor(Math.random() * columns);

		if (grid[randomRow][randomColumn].type === 0) {
			grid[randomRow][randomColumn] = { type: 1 };
			pickBurningTree = false;
		}
	}

	return grid;
};

export default generateGrid;

//0 - drzewo
//1 - palace sie drzewo
//2 - spalone drzewo
//3 - piasek
