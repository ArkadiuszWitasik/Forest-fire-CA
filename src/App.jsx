import { useState } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import generateGrid from './functions/generateGrid';
import { Button } from '@headlessui/react';

function App() {
	const [p, setP] = useState(0.4);
	const [factor, setFactor] = useState(0.1);
	const [speed, setSpeed] = useState(1);
	const [grid, setGrid] = useState();

	return (
		<>
			<div className="mt-3 border border-red-500 flex flex-col items-center">
				<div className="text-6xl">Pożar lasu</div>
				<div className="text-5xl">Automat komórkowy</div>
			</div>
			<div className="mx-3 border border-green-500 flex gap-3">
				<ControlPanel
					p={p}
					setP={setP}
					factor={factor}
					setFactor={setFactor}
					speed={speed}
					setSpeed={setSpeed}
					generateFn={generateGrid}
					setGrid={setGrid}
				/>
				<Grid grid={grid} />
			</div>
		</>
	);
}

export default App;
