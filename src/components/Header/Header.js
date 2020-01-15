import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import './index.css';
import { signOut } from "../../redux/actions";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = props.isLoggedIn;

  function handleLogout(event) {
    event.preventDefault();

    dispatch(signOut());
  }

  function AuthorizedUserBlock() {
    return (
      <div className='authorization-block'>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    )
  }

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
        { isLoggedIn ? <AuthorizedUserBlock/> : <UnauthorizedUserBlock/> }
      </div>
    </div>
  )
};

export default Header;
