import React from 'react';
import './App.css';
import CampsiteList from './features/campsites/CampsiteList';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<CampsiteList />
		</div>
	);
}

export default App;
