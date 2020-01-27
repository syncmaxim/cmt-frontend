import React, { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import { getEvents } from "../../redux/actions";
import CalendarDialog from "./CalendarDialog/CalendarDialog";


const Calendar = props => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const localizer = momentLocalizer(moment);
  const [isDialogOpened, setDialogOpened] = useState(false);
  const [event, setEvent] = useState({});

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
    onSelectEvent: (event, e) => onSelectEvent(event, e) // func that triggers when clicked on event
  };

  const onSelectEvent = (event) => {
    console.log(event);

    setDialogOpened(true);
    setEvent(event);
  };

  const handleClose = () => {
    setDialogOpened(false);
  };

  return (
    <div className='calendar-container'>
      <div className='component-header-one'> Events List </div>
      <div className='calendar-block'>
        <BigCalendar {...calendarProps} />
        <CalendarDialog event={event} open={isDialogOpened} onClose={handleClose} />
      </div>
    </div>
  );
};

export default Calendar;
