import React from 'react';
import { IconChristmasTreeFilled, IconBackground } from '@tabler/icons-react';

const Cell = ({ type }) => {
	let cellBackground = '';

	if (type === 3) {
		cellBackground = 'bg-amber-600';
	} else if (type === 0) {
		cellBackground = 'bg-teal-600';
	} else if (type === 1) {
		cellBackground = 'bg-red-600';
	} else if (type === 2) {
		cellBackground = 'bg-gray-600';
	}

	return (
		<div
			className={`w-[24px] h-[24px] ${cellBackground} flex justify-center items-center mt-1`}
		>
			{type === 3 && <IconBackground size={16} className="text-amber-900" />}
			{type === 0 && (
				<IconChristmasTreeFilled size={16} className="text-teal-900" />
			)}
			{type === 1 && (
				<IconChristmasTreeFilled size={16} className="text-red-900" />
			)}
			{type === 2 && (
				<IconChristmasTreeFilled size={16} className="text-gray-900" />
			)}
		</div>
	);
};

export default Cell;
