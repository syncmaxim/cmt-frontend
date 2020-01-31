import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {attendEvent, cancelAttendEvent, getEvent} from "../../redux/actions";
import EventPageHeader from "./EventPageHeader/EventPageHeader";
import EventPageMain from "./EventPageMain/EventPageMain";
import EventPageSidebar from "./EventPageSidebar/EventPageSidebar";

import './index.css';
import {getIsAuthTokenExists, getUserId} from "../../utils/helpers/auth";

const EventPage = props => {
    const event = useSelector(state => state.events);
    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = getUserId();

    useEffect(() => {
        dispatch(getEvent(id));
    }, [dispatch, id]);

    const handleAttend = (action) => {
        if (!getIsAuthTokenExists().isLoggedIn) {
            props.history.push('/login');
            return;
        }

        action.status ? dispatch(attendEvent(id)) : dispatch(cancelAttendEvent(id))
    };

    return (
        <div className='event-page-container'>
            <EventPageHeader title={event.title} />
            <div className='event-page-main-block'>
                <EventPageMain event={event} userId={userId}/>
                <EventPageSidebar event={event} userId={userId} handleAttend={handleAttend}/>
            </div>
        </div>
    );
};

export default EventPage;
