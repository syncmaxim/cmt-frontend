import React from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';

const EventPageSidebar = (props) => {
    let startFullDate, endFullDate;
    startFullDate = moment(props.event.start).format('LLL') || '';
    endFullDate = moment(props.event.end).format('LLL') || '';

    return (
        <div className='event-page-sidebar'>
            <div className='event-sidebar-date-field'>
                <div className='event-sidebar-start'> <span>Start:</span> <span>{startFullDate}</span> </div>
                <div className='event-sidebar-end'> <span>End:</span> <span>{endFullDate}</span> </div>
            </div>
            <div className='event-sidebar-attendance'>
                <Button variant="outlined" color="primary"> I will attend </Button>
                <div>
                    {/* Here is going to be list of attenders */}
                </div>
            </div>
        </div>
    );
};

export default EventPageSidebar;
