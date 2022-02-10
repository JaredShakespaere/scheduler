import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/getDay';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dummy from '../api/dummy';
import AsyncSelect from 'react-select/async';
import Agenda from './Agenda';

const locales = {
	'en-US': enUS,
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

function JobDetails() {
	/////////////STATE////////////////
	const [newEvent, setNewEvent] = useState({
		title: '',
		start: '',
		end: '',
		jobDescription: '',
		allDay: false,
		employeePic: null,
	});
	//^^saves new event to state- There are 3 parts of a new event.
	// 1. Title 2. Start date and time 3. End date and time
	const [allEvents, setAllEvents] = useState([]);
	// list of all events. setAllEvents adds a newEvent to the allEvents list
	const [value, setValue] = useState('');
	const [selectedValue, setSelectedValue] = useState('');
	// sets the value of the employee dropdown to the selected

	//////////HANDLERS////////////////
	function handleAddEvent() {
		setAllEvents([...allEvents, newEvent]); //adds a new event to the allEvents list
	}
	//handle dropdown input change event
	const handleInputChange = (value) => {
		setValue(value);
	};
	//handles dropdown selection
	const handleDropdown = (value) => {
		let employeeName = value.first_name + ' ' + value.last_name;
		let employeePic = value.avatar;
		console.log('employeename', employeeName);
		console.log(value);
		setSelectedValue(value);
		setNewEvent({ ...newEvent, title: employeeName, employeePic });
	};

	/////////API ENDPOINTS//////////
	const fetchData = () => {
		return dummy.get('/users?page=2').then((result) => {
			const res = result.data.data;
			return res;
		});
	};

	return (
		<>
			<div className='row'>
				<div className='col-md-4'></div>
				<div className='container col-md-4'>
					<div className='form-group row'>
						<div className='col-md-3'></div>
						<div className='col-md-6'>
							<AsyncSelect
								cacheOptions
								defaultOptions
								value={selectedValue}
								getOptionLabel={(e) => e.first_name + ' ' + e.last_name}
								getOptionValue={(e) => e.id}
								loadOptions={fetchData}
								onInputChange={handleInputChange}
								onChange={handleDropdown}
							/>
							<br></br>
							<textarea
								className='form-control '
								id='jobDescripton'
								rows='3'
								placeholder='Add Job Notes'
								value={newEvent.jobDescription}
								onChange={(e) =>
									setNewEvent({ ...newEvent, jobDescription: e.target.value })
								}></textarea>
							<br></br>
							<DatePicker
								placeholderText='Start Date'
								selected={newEvent.start}
								onChange={(start) => setNewEvent({ ...newEvent, start })}
								showTimeSelect
							/>
							<DatePicker
								placeholderText='End Date'
								selected={newEvent.end}
								onChange={(end) => setNewEvent({ ...newEvent, end })}
								showTimeSelect
							/>
							<button
								className='btn btn-primary text-light'
								style={{ marginTop: '10px' }}
								onClick={handleAddEvent}>
								Add Event
							</button>
						</div>
						<div className='col-md-3'></div>
					</div>
					<Calendar
						className='calendar'
						localizer={localizer}
						events={allEvents}
						startAccessor='start'
						endAccessor='end'
						style={{ height: '20vw', marginTop: '100px' }}
						defaultView='day'
						onClick={() => {}}
					/>
				</div>
				<div className='col-md-4'>
					<div className='row'>
						<div className='col-md-3'></div>
						<div className='col-md-8 '>
							<Agenda employeeName={newEvent.title} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default JobDetails;
