import React from 'react';
import { Input, Button } from '@headlessui/react';

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
	return (
		<div className="border border-blue-500 flex flex-col gap-3">
			<div>Ustawienia & Legenda</div>
			<div className="border border-emerald-500">
				<p>Wartość p</p>
				<Input
					type="number"
					defaultValue={p}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setP(e.currentTarget.value)}
					className="w-full"
				/>
			</div>
			<div className="border border-orange-500">
				<p>Współczynik</p>
				<Input
					type="number"
					defaultValue={factor}
					step={0.1}
					max={1}
					min={0}
					onChange={(e) => setFactor(e.currentTarget.value)}
					className="w-full"
				/>
			</div>
			<div className="border border-pink-300">
				<p>Prędkość</p>
				<Input
					type="number"
					defaultValue={speed}
					step={0.25}
					min={0.25}
					max={2}
					onChange={(e) => setSpeed(e.currentTarget.value)}
					className="w-full"
				/>
			</div>
			<Button
				className="border border-blue-800"
				onClick={() => {
					setGrid(() => generateFn());
				}}
			>
				Generuj
			</Button>
			<Button
				className="border border-blue-800"
				onClick={() => {
					console.log('p', p);
					console.log('factor', factor);
					console.log('speed', speed);
				}}
			>
				Start
			</Button>
			<Button className="border border-blue-800">Stop</Button>
		</div>
	);
};

export default ControlPanel;
