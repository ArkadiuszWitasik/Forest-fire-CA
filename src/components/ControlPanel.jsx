import React from 'react';

import {
	IconDice3Filled,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
} from '@tabler/icons-react';
import '../index.css';

const ControlPanel = ({
	p,
	setP,
	factor,
	setFactor,
	speed,
	setSpeed,
	generateFn,
	setGrid,
}) => {
	const inputStyles =
		'w-[50%] rounded-md text-center h-7 border border-gray-400 shadow-md ';
	const buttonStyles =
		'shadow-md rounded-md h-10 flex justify-center items-center gap-2 text-white bg-blue-500 hover:bg-blue-400';

	return (
		//"border border-blue-500 flex flex-col gap-3"
		<div className="border-r-gray-400 border-r-2 flex flex-col gap-3 pr-1">
			<div>Ustawienia & Legenda</div>
			{/*"border border-emerald-500"*/}
			<div>
				<p>Wartość p</p>
				<input
					type="number"
					defaultValue={p}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setP(e.currentTarget.value)}
					className={inputStyles}
				/>
			</div>
			<div>
				<p>Współczynik</p>
				<input
					type="number"
					defaultValue={factor}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setFactor(e.currentTarget.value)}
					className={inputStyles}
				/>
			</div>
			<div>
				<p>Prędkość</p>
				<input
					type="number"
					defaultValue={speed}
					step={0.25}
					min={0.25}
					max={2}
					onChange={(e) => setSpeed(e.currentTarget.value)}
					className={inputStyles}
				/>
			</div>
			<button
				className={buttonStyles}
				onClick={() => {
					setGrid(() => generateFn());
				}}
			>
				<IconDice3Filled size={19} />
				Generuj
			</button>
			<button
				className={buttonStyles}
				onClick={() => {
					console.log('p', p);
					console.log('factor', factor);
					console.log('speed', speed);
				}}
			>
				<IconPlayerPlayFilled size={19} />
				Start
			</button>
			<button className={buttonStyles}>
				<IconPlayerPauseFilled size={19} />
				Stop
			</button>
		</div>
	);
};

export default ControlPanel;
