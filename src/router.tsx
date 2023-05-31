import { createBrowserRouter } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import App from './App';
import Portfolio from './pages/Portfolio/Portfolio';
import Contacts from './pages/Contacts/Contacts';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "Skills",
				element: <Skills />,
			},
			{
				path: "Portfolio",
				element: <Portfolio />,
			}, {
				path: "Contacts",
				element: <Contacts />,
			},
		],
	},

]);