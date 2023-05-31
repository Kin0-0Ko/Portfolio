import React from 'react';
import './App.sass';

import NavBar from './Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Outlet/>
    </div>
  );
}

export default App;
