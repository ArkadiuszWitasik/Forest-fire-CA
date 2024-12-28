import React from 'react';
import Cell from './Cell';

const Grid = () => {
	const tmp_rows = Array.from({ length: 60 });
	const tmp_columns = Array.from({ length: 30 });

	return (
		<div className="border border-yellow-500 p-1 flex flex-wrap gap-1">
			{tmp_rows.map((_, rowIndex) => (
				<div key={rowIndex}>
					{tmp_columns.map((_, colIndex) => (
						<Cell key={`${rowIndex}-${colIndex}`} />
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;
