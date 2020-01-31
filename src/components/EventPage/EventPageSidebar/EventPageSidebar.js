import React from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';

const AttendButton = (props) => {
    if (props.attenders === undefined) {
        return null;
    }

    if (props.attenders.filter(id => id === props.userId).length === 0) {
        return <Button variant="outlined" color="primary" onClick={() => props.handleAttend({status: true })}> I want to attend </Button>
    } else {
        return <Button variant="outlined" color="secondary" onClick={() => props.handleAttend({status: false })}> I will be there </Button>
    }
};

const EventPageSidebar = (props) => {
    const { attenders, place, address } = props.event;
    const startFullDate = moment(props.event.start).format('LLL') || '';
    let endFullDate;
    if (moment(props.event.start).date() === moment(props.event.end).date()) {
        endFullDate = moment(props.event.end).format('LT') || '';
    } else {
        endFullDate = moment(props.event.end).format('LLL') || '';
    }

    return (
        <div className='event-page-sidebar'>
            <div className='event-sidebar-field'>
                <div>When:</div>
                <div> {startFullDate} - {endFullDate} </div>
            </div>
            <div className='event-sidebar-field'>
                <div>Where:</div>
                <div> {place}, {address} </div>
            </div>
            <div className='event-sidebar-attendance'>
                <AttendButton attenders={attenders} userId={props.userId} handleAttend={props.handleAttend} />
                <div>
                    {/* Here is going to be list of attenders */}
                </div>
            </div>
        </div>
    );
};

export default EventPageSidebar;
