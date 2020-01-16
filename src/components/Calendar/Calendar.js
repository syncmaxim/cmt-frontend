import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';


const Calendar = (props) => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [ // array of events
    {
      id: 1,
      title: 'Test Event',
      start: new Date(),
      end: new Date()
    }
  ];

  let calendarProps = {
    localizer: localizer,
    events: myEventsList,
    startAccessor: 'start',
    endAccessor: 'end',
    style: {
      height: 500
    },
    views: ['month', 'day'],
    onSelectEvent: onSelectEvent // func that triggers when clicked on event
  };

  function onSelectEvent(event, e) {
    console.log(event);
    console.log(e);
  }

  return (
    <div className='calendar-container'>
      <div className='component-header-one'> Events List </div>
      <div className='calendar-block'>
        <BigCalendar {...calendarProps} />
      </div>
    </div>
  );
};

export default Calendar;
