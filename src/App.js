import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import JobDetails from './components/JobDetails';

function App() {
	return (
		<div className='App' style={{margin: "4rem"}}>
					<h2 className='text-primary'>Scheduler</h2>
					<h3 className='text-secondary'>Add New Job</h3>
					<JobDetails />
		</div>
	);
}

export default App;
