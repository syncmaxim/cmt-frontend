import React, {useCallback, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {Button, Menu, MenuItem} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import './index.css';
import {getUserInfo, signOut} from "../../redux/actions";
import {getIsAuthTokenExists} from "../../utils/helpers/auth";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = props.isLoggedIn;

  const handleLogout = useCallback(() => {
    setAnchorEl(null);
    dispatch(signOut());
  },[dispatch]);

  useEffect(() => {
    if (getIsAuthTokenExists().isLoggedIn){
      dispatch(getUserInfo());
    }
  }, [dispatch]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyPageRedirect = () => {
    setAnchorEl(null);
    history.push(`/user/${props.userData.id}`);
  };

  function UnauthorizedUserBlock() {
    return (
      <div className='authorization-block'>
        <Button onClick={handleLogout}>
          <Link to='/login' className='login-btn'> Log In </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className='header-container'>
      <div className='navigation-bar'>
        <ul className='menu-block'>
          <li className='menu-item'>
            <Link className='menu-item-link' to='/'> Calendar </Link>
          </li>
          <li className='menu-item'>
            <Link className='menu-item-link' to='/createEvent'> Create Event </Link>
          </li>
        </ul>
        { isLoggedIn ? (
            <div className='authorization-block'>
              <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick} startIcon={<AccountCircle />}> {props.userData.email} </Button>
              <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                <MenuItem style={{width: '120px'}} onClick={handleMyPageRedirect}> My page </MenuItem>
                <MenuItem style={{width: '120px'}} onClick={handleLogout}> Log out </MenuItem>
              </Menu>
            </div>
            ) : <UnauthorizedUserBlock/> }
      </div>
    </div>
  )
};

export default Header;
