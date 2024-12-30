import React from 'react';
import Cell from './Cell';

const Grid = ({ grid }) => {
	return (
		<div className="p-1 flex flex-wrap gap-1">
			{grid
				? grid.map((row, rowIndex) => (
						<div key={rowIndex}>
							{row.map((element, colIndex) => (
								<Cell type={element.type} key={`${rowIndex}-${colIndex}`} />
							))}
						</div>
				  ))
				: 'Wygeneruj mapę'}
		</div>
	);
};

export default Grid;
