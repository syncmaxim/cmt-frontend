import React from "react";
import { Link } from 'react-router-dom';
import './index.css';
import { useDispatch } from "react-redux";
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
      <div className='authorized-user-block'>
        <button className='authorization-button logout-btn' onClick={handleLogout}>
          Log out
        </button>
      </div>
    )
  }

  function UnauthorizedUserBlock() {
    return (
      <div className='authorization-block'>
        <button className='authorization-button'>
          <Link className='menu-item-link login-btn' to='/login'> Log In </Link>
        </button>
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
