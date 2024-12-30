const generateGrid = () => {
	const rows = 27;
	const columns = 60;
	// const rows = 3;
	// const columns = 3;
	let pickBurningTree = true;
	let grid = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let neighbors = [];

			directions.forEach(([dx, dy]) => {
				const x = i + dx;
				const y = j + dy;
				if (x >= 0 && x < rows && y >= 0 && y < columns) {
					neighbors.push([x, y]);
				}
			});

			if (Math.random() > 0.9) {
				grid[i][j] = { type: 3, n: neighbors };
			} else grid[i][j] = { type: 0, n: neighbors };
		}
	}

	while (pickBurningTree) {
		let randomRow = Math.floor(Math.random() * rows);
		let randomColumn = Math.floor(Math.random() * columns);

		if (grid[randomRow][randomColumn].type === 0) {
			grid[randomRow][randomColumn] = {
				...grid[randomRow][randomColumn],
				type: 1,
			};
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
