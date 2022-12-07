import './scss/app.scss';
import React from 'react';
import Header from './components/Header';
import Todoblock from './components/Todoblock';

const App = () => {
	return (
		<div>
			<Header />
			<Todoblock />
		</div>
	);
};

export default App;
