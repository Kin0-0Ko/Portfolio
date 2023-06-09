import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.sass';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);


