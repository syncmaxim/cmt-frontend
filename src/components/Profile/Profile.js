import React from 'react';
import { List, ListItem, ListItemText, Collapse, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import ProfileEditForm from "./ProfileEditForm/ProfileEditForm";

import './index.css';
import {changeUserEmail, changeUserPassword} from "../../redux/actions";

const Profile = (props) => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState({
        email: false,
        password: false
    });

    const handleClick = (purpose) => {
        switch (purpose) {
            case 'email':
                setOpen({...open, email: !open.email});
                break;
            case 'password':
                setOpen({...open, password: !open.password});
                break;
            default:
                return open;
        }
    };

    const handleSubmit = (purpose, values) => {
      if (purpose === 'email') {
          dispatch(changeUserEmail(values, () => handleClick(purpose)));
      }

      if (purpose === 'password') {
          dispatch(changeUserPassword(values, () => handleClick(purpose)));
      }
    };

    return (
        <div className='profile-container'>
            <div className='component-header-one'> Account settings </div>
            <div className='calendar-block'>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="User email" secondary={'This address is used as login'} />
                        <ListItemSecondaryAction>
                            <span style={{margin: '0 10px', fontSize: '0.9em'}}>{userData.email}</span>
                            <IconButton edge="end" onClick={() => handleClick('email')}>
                                <Edit/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={open.email} timeout="auto" unmountOnExit>
                        <ProfileEditForm purpose='email' value={userData.email} handleCancel={handleClick} handleSubmit={handleSubmit} />
                    </Collapse>
                    <ListItem>
                        <ListItemText primary="User password" secondary={'You should use strong password to protect your account'} />
                        <ListItemSecondaryAction>
                            <span style={{margin: '0 10px', fontSize: '0.9em'}}>**************</span>
                            <IconButton edge="end" onClick={() => handleClick('password')}>
                                <Edit/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={open.password} timeout="auto" unmountOnExit>
                        <ProfileEditForm purpose='password' handleCancel={handleClick} handleSubmit={handleSubmit} />
                    </Collapse>
                </List>
            </div>
        </div>
    );
};

export default Profile;
