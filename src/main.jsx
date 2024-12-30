import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
	<MantineProvider>
		<div className="bg-slate-200 w-screen h-screen flex flex-col gap-3">
			<App />
		</div>
	</MantineProvider>
);
