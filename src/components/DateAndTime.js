import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/getDay';
import getDay from 'date-fns/getDay';
import { setHours, setMinutes } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';

import 'react-datepicker/dist/react-datepicker.css';

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
function DateAndTime() {
	const [startDate, setStartDate] = useState(
		setHours(setMinutes(new Date(), 0), 8)
	);

    const isWorkday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };
    // const onChange = (dates) => {
    //     const [start, end] = dates;
    //     setStartDate(start);
    //     setEndDate(end);
    // }

	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			showTimeSelect
			filterDate={isWorkday}
			placeholderText='Select start date'
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
			dateFormat='MMMM d, yyyy h:mm aa'
		/>
	);
}

export default DateAndTime;
