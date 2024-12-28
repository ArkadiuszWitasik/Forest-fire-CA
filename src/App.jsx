import { useState } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

function App() {
	return (
		<>
			<div className="mt-3 border border-red-500 flex flex-col items-center">
				<div className="text-6xl">Pożar lasu</div>
				<div className="text-5xl">Projekt automatu komórkowego</div>
			</div>
			<div className="mx-3 border border-green-500 flex gap-3">
				<ControlPanel />
				<Grid />
			</div>
		</>
	);
}

export default App;
