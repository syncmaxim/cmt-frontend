import React from 'react';
import { Button, Chip } from '@material-ui/core';
import moment from 'moment';

const AttendButton = (props) => {
    if (props.attenders === undefined) { // TODO: PREVENT GETTING UNDEFINED VALUE
        return null;
    }

    if (props.attenders.filter(user => user._id === props.userId).length === 0) {
        return <Button variant="outlined" color="primary" onClick={() => props.handleAttend({status: true })}> I want to attend </Button>
    } else {
        return <Button variant="outlined" color="secondary" onClick={() => props.handleAttend({status: false })}> I will be there </Button>
    }
};

const AttendersList = (props) => {
    if (props.attenders === undefined) { // TODO: PREVENT GETTING UNDEFINED VALUE
        return null;
    }

    const othersLabel = (length) => {
        return `and other ${ length - 5 }`
    };

    return (
        <div className='attenders-list-block'>
            {
                props.attenders.map((user, index, array) => {
                    if (index < 5) {
                        return <span key={user._id} className='attender-badge'> <Chip color="secondary" size="small" label={user.email} /> </span>
                    } else if (index === array.length - 1) {
                        return <span key={index} className='attender-badge'> <Chip size="small" label={othersLabel(array.length)} /> </span>
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
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
                <div style={{fontWeight: '600'}}>When:</div>
                <div style={{fontSize: '14px'}}> {startFullDate} - {endFullDate} </div>
            </div>
            <div className='event-sidebar-field'>
                <div style={{fontWeight: '600'}}>Where:</div>
                <div style={{fontSize: '14px'}}> {place}, {address} </div>
            </div>
            <div className='event-sidebar-attendance'>
                <AttendButton attenders={attenders} userId={props.userData._id} handleAttend={props.handleAttend} />
                <AttendersList attenders={attenders} />
            </div>
        </div>
    );
};

export default EventPageSidebar;
