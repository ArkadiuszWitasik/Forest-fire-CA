function* simulateFire(grid, p, factor) {
	while (true) {
		let newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
		let hasBurningTrees = false;

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j].type === 0) {
					let burningTreeCount = 0;
					grid[i][j].n.forEach((element) => {
						if (grid[element[0]][element[1]].type === 1) {
							burningTreeCount += 1;
						}
					});

					if (burningTreeCount > 0) {
						const burningProbability = p + factor * burningTreeCount;

						if (Math.random() < burningProbability) {
							newGrid[i][j] = { ...grid[i][j], type: 1 };
							hasBurningTrees = true;
						}
					}
				}

				if (grid[i][j].type === 1) {
					newGrid[i][j] = { ...grid[i][j], type: 2 };
					hasBurningTrees = true;
				}

				if (grid[i][j].type === 3) {
					newGrid[i][j] = { ...grid[i][j], type: 3 };
				}
			}
		}

		grid = newGrid;
		yield grid;

		if (!hasBurningTrees) {
			return;
		}
	}
}

export default simulateFire;
