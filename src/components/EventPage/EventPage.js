import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../redux/actions";
import EventPageHeader from "./EventPageHeader/EventPageHeader";
import EventPageMain from "./EventPageMain/EventPageMain";
import EventPageSidebar from "./EventPageSidebar/EventPageSidebar";

import './index.css';

const EventPage = props => {
    const event = useSelector(state => state.events);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getEvent(id));
    }, [dispatch, id]);

    return (
        <div className='event-page-container'>
            <EventPageHeader title={event.title} />
            <div className='event-page-main-block'>
                <EventPageMain event={event} />
                <EventPageSidebar event={event} />
            </div>
        </div>
    );
};

export default EventPage;
