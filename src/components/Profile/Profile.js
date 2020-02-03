import React from 'react';
import {useParams} from 'react-router-dom';

const Profile = (props) => {
    const { id } = useParams();
    console.log(props);

    return (
        <div>
            Profile {id}
        </div>
    );
};

export default Profile;
