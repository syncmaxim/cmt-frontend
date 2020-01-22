import React, { useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import { getEvents } from "../../redux/actions";


const Calendar = props => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  let calendarProps = {
    localizer: localizer,
    events: events,
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
