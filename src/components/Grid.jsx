import React from 'react';
import Cell from './Cell';

const Grid = ({ grid }) => {
	return (
		<div className="p-1 flex-col flex-wrap gap-1">
			{grid ? (
				grid.map((row, rowIndex) => (
					<div key={rowIndex} className="flex gap-1">
						{row.map((element, colIndex) => (
							<Cell type={element.type} key={`${rowIndex}-${colIndex}`} />
						))}
					</div>
				))
			) : (
				<div className="flex justify-center items-center w-[85vw]">
					Wygeneruj mapę
				</div>
			)}
		</div>
	);
};

export default Grid;
