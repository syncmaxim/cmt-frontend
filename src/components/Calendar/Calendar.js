import React, { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { getEventsApi } from "../../utils/api/requests";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import { openErrorSnackBar } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Calendar = (props) => {
  const dispatch = useDispatch();
  const localizer = momentLocalizer(moment);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    getEventsApi()
      .then(response => setEventsList(parseDateForCalendar(response.data)))
      .catch(error => dispatch(openErrorSnackBar(error.response.data.message)));
  }, [dispatch]);

  let calendarProps = {
    localizer: localizer,
    events: eventsList,
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

  const parseDateForCalendar = date => {
    const dataToParse = [...date];

    return dataToParse.map(item => {
      return {
        ...item,
        start: new Date(item.start),
        end: new Date(item.end)
      }
    });
  };

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
