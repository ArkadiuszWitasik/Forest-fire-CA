import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<div className="bg-slate-500 w-screen h-screen flex flex-col gap-3">
		<App />
	</div>
);
