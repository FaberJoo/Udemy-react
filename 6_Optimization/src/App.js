import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
	const [showP, setShowP] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	console.log('app running');

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	const togglePHandler = useCallback(() => {
		if (allowToggle) {
			setShowP((prevShowP) => !prevShowP);
		}
	}, [allowToggle]);

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={showP} />
			<Button onClick={allowToggleHandler}>Allow Toggling</Button>
			<Button onClick={togglePHandler}>Toggle Paragraph!</Button>
		</div>
	);
}

export default App; ////
