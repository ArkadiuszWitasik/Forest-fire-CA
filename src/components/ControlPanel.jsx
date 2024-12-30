import React from 'react';
import {
	IconDice3Filled,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconRestore,
} from '@tabler/icons-react';

const ControlPanel = ({
	p,
	setP,
	factor,
	setFactor,
	speed,
	setSpeed,
	generateFn,
	setGrid,
	gridCopy,
	startFn,
	stopFn,
	isRunning,
	setIsRunning,
	counter,
	setCounter,
}) => {
	const inputStyles =
		'w-[50%] rounded-md text-center h-7 border border-gray-400 shadow-md ';
	const disabledInputStyles =
		'w-[50%] rounded-md text-center h-7 border border-gray-400 shadow-md bg-gray-300';
	const buttonStyles =
		'shadow-md rounded-md h-10 flex justify-center items-center gap-2 text-white bg-blue-500 hover:bg-blue-400';
	const disabledButtonStyles =
		'shadow-md rounded-md h-10 flex justify-center items-center gap-2 text-white bg-gray-500';

	return (
		<div className="border-r-gray-400 border-r-2 flex flex-col gap-3 pr-1">
			<div>Ustawienia & Legenda</div>
			<div>
				<p>Wartość p</p>
				<input
					disabled={isRunning}
					type="number"
					defaultValue={p}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setP(e.currentTarget.value)}
					className={isRunning ? disabledInputStyles : inputStyles}
				/>
			</div>
			<div>
				<p>Współczynnik</p>
				<p>palącego się drzewa</p>
				<input
					disabled={isRunning}
					type="number"
					defaultValue={factor}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setFactor(e.currentTarget.value)}
					className={isRunning ? disabledInputStyles : inputStyles}
				/>
			</div>
			<div>
				<p>Prędkość animacji</p>
				<input
					disabled={isRunning}
					type="number"
					defaultValue={speed}
					step={0.25}
					min={0.25}
					max={2}
					onChange={(e) => setSpeed(e.currentTarget.value)}
					className={isRunning ? disabledInputStyles : inputStyles}
				/>
			</div>
			<button
				className={isRunning ? disabledButtonStyles : buttonStyles}
				disabled={isRunning}
				onClick={() => {
					generateFn();
					setCounter(0);
				}}
			>
				<IconDice3Filled size={19} />
				Generuj
			</button>
			<button
				className={isRunning ? disabledButtonStyles : buttonStyles}
				onClick={() => {
					startFn();
				}}
				disabled={isRunning}
			>
				<IconPlayerPlayFilled size={19} />
				Start
			</button>
			<button
				className={!isRunning ? disabledButtonStyles : buttonStyles}
				onClick={stopFn}
				disabled={!isRunning}
			>
				<IconPlayerPauseFilled size={19} />
				Stop
			</button>
			<button
				className={
					!isRunning && counter > 0 ? buttonStyles : disabledButtonStyles
				}
				disabled={isRunning && counter > 0}
				onClick={() => {
					setGrid(gridCopy);
					setCounter(0);
					setIsRunning(false);
				}}
			>
				<IconRestore size={19} />
				Reset
			</button>
			{!isRunning && counter <= 0 ? '' : <div>Generacja: {counter}</div>}
		</div>
	);
};

export default ControlPanel;
