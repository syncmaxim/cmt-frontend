import React from 'react';
import {useParams} from 'react-router-dom';

const EventPage = props => {

    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default EventPage;
