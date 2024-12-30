import { useEffect, useRef, useState } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import generateGrid from './functions/generateGrid';
import simulateFire from './functions/simulateFire';

function App() {
	const [p, setP] = useState(0.6);
	const [factor, setFactor] = useState(0.1);
	const [speed, setSpeed] = useState(1);
	const [grid, setGrid] = useState(() => generateGrid());
	const [gridCopy, setGridCopy] = useState();

	const [isRunning, setIsRunning] = useState(false);
	const generatorRef = useRef(null);

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				const { value, done } = generatorRef.current.next();
				setCounter((prevCounter) => prevCounter + 1);
				if (!done) {
					setGrid(value);
				} else {
					clearInterval(interval);
					setIsRunning(false);
				}
			}, 1000 / speed);

			return () => clearInterval(interval);
		}
	}, [isRunning]);

	const startSimulation = () => {
		setGridCopy(grid);
		generatorRef.current = simulateFire(grid, p, factor);
		setIsRunning(true);
	};

	const stopSimulation = () => {
		setIsRunning(false);
	};

	const generateGridFn = () => {
		setGrid(() => generateGrid());
	};

	return (
		<>
			<div className="mt-3 flex flex-col items-center">
				<div className="text-6xl">Pożar lasu</div>
				<div className="text-5xl">Automat komórkowy</div>
			</div>
			<div className="mx-3 flex gap-1">
				<ControlPanel
					p={p}
					setP={setP}
					factor={factor}
					setFactor={setFactor}
					speed={speed}
					setSpeed={setSpeed}
					generateFn={generateGridFn}
					setGrid={setGrid}
					gridCopy={gridCopy}
					setGridCopy={setGridCopy}
					startFn={startSimulation}
					stopFn={stopSimulation}
					isRunning={isRunning}
					setIsRunning={setIsRunning}
					counter={counter}
					setCounter={setCounter}
				/>
				<Grid grid={grid} />
			</div>
		</>
	);
}

export default App;
