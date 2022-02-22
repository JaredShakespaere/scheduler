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
import ModalDashboard from './ModalDashboard';
import { setHours, setMinutes } from 'date-fns';
import DateAndTime from './DateAndTime';

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
		startDate: setHours(setMinutes(new Date(), 0), 8),
		end: '',
		jobDescription: '',
		allDay: false,
		employeePic: null,
	});
	//^^saves new event to state
	const [allEvents, setAllEvents] = useState([]);
	// list of all events. setAllEvents adds a newEvent to the allEvents list
	const [value, setValue] = useState('');
	// sets the value of the employee dropdown to the selected
	const [selectedValue, setSelectedValue] = useState('');
	//handles selected event on calendar
	const [selectedEvent, setSelectedEvent] = useState({});

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
		setSelectedValue(value);
		setNewEvent({ ...newEvent, title: employeeName, employeePic });
	};

	//handles when the calendar is clicked
	function handleCalendarClick(event) {
		console.log('calendar event was clicked');

		setSelectedEvent(event);
	}

	//handles excluding weekends
	function isWorkday(date) {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	}

	//handles selected value
	function selectedEventHandler(e){

	}
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
									onChange={(start, startDate) =>
										setNewEvent({ ...newEvent, start })
									}
									showTimeSelect
									filterDate={isWorkday}
									isClearable={true}
									excludeTimes={[
										setHours(setMinutes(new Date(), 0), 0),
										setHours(setMinutes(new Date(), 0), 1),
										setHours(setMinutes(new Date(), 0), 2),
										setHours(setMinutes(new Date(), 0), 3),
										setHours(setMinutes(new Date(), 0), 4),
										setHours(setMinutes(new Date(), 0), 5),
										setHours(setMinutes(new Date(), 0), 6),
										setHours(setMinutes(new Date(), 0), 7),
										setHours(setMinutes(new Date(), 0), 18),
										setHours(setMinutes(new Date(), 0), 19),
										setHours(setMinutes(new Date(), 0), 20),
										setHours(setMinutes(new Date(), 0), 21),
										setHours(setMinutes(new Date(), 0), 22),
										setHours(setMinutes(new Date(), 0), 23),
										setHours(setMinutes(new Date(), 0), 24),
										setHours(setMinutes(new Date(), 30), 0),
										setHours(setMinutes(new Date(), 30), 1),
										setHours(setMinutes(new Date(), 30), 2),
										setHours(setMinutes(new Date(), 30), 3),
										setHours(setMinutes(new Date(), 30), 4),
										setHours(setMinutes(new Date(), 30), 5),
										setHours(setMinutes(new Date(), 30), 6),
										setHours(setMinutes(new Date(), 30), 7),
										setHours(setMinutes(new Date(), 30), 18),
										setHours(setMinutes(new Date(), 30), 19),
										setHours(setMinutes(new Date(), 30), 20),
										setHours(setMinutes(new Date(), 30), 21),
										setHours(setMinutes(new Date(), 30), 22),
										setHours(setMinutes(new Date(), 30), 23),
										setHours(setMinutes(new Date(), 30), 24),
									]}
								/>
								<DatePicker
									placeholderText='End Date'
									selected={newEvent.end}
									onChange={(end) => setNewEvent({ ...newEvent, end })}
									showTimeSelect
									filterDate={isWorkday}
									isClearable={true}
									excludeTimes={[
										setHours(setMinutes(new Date(), 0), 0),
										setHours(setMinutes(new Date(), 0), 1),
										setHours(setMinutes(new Date(), 0), 2),
										setHours(setMinutes(new Date(), 0), 3),
										setHours(setMinutes(new Date(), 0), 4),
										setHours(setMinutes(new Date(), 0), 5),
										setHours(setMinutes(new Date(), 0), 6),
										setHours(setMinutes(new Date(), 0), 7),
										setHours(setMinutes(new Date(), 0), 18),
										setHours(setMinutes(new Date(), 0), 19),
										setHours(setMinutes(new Date(), 0), 20),
										setHours(setMinutes(new Date(), 0), 21),
										setHours(setMinutes(new Date(), 0), 22),
										setHours(setMinutes(new Date(), 0), 23),
										setHours(setMinutes(new Date(), 0), 24),
										setHours(setMinutes(new Date(), 30), 0),
										setHours(setMinutes(new Date(), 30), 1),
										setHours(setMinutes(new Date(), 30), 2),
										setHours(setMinutes(new Date(), 30), 3),
										setHours(setMinutes(new Date(), 30), 4),
										setHours(setMinutes(new Date(), 30), 5),
										setHours(setMinutes(new Date(), 30), 6),
										setHours(setMinutes(new Date(), 30), 7),
										setHours(setMinutes(new Date(), 30), 18),
										setHours(setMinutes(new Date(), 30), 19),
										setHours(setMinutes(new Date(), 30), 20),
										setHours(setMinutes(new Date(), 30), 21),
										setHours(setMinutes(new Date(), 30), 22),
										setHours(setMinutes(new Date(), 30), 23),
										setHours(setMinutes(new Date(), 30), 24),
									]}
								/>
								<button
									className='btn btn-primary text-light'
									type='submit'
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
						onSelectEvent={handleCalendarClick}
						selected={selectedEvent}
					/>
				</div>
				<div className='col-md-4'>
					<div className='row'>
						<div className='col-md-3'></div>
						<div className='col-md-8 '>
							{/* <ModalDashboard selectedEvent={selectedEvent} /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default JobDetails;
