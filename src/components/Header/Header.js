import React from "react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = (props) => (
  <div className='header-container'>
      <div>
        <ul className='menu-block'>
          <li className='menu-item'>
            <Link className='menu-item-link' to='/calendar'> Calendar </Link>
          </li>
          <li className='menu-item'>
            <Link className='menu-item-link' to='/createEvent'> Create Event </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className='authorization-block'>
          <button className='authorization-button'>
            <Link className='menu-item-link login-btn' to='/login'> Log In </Link>
          </button>
          <button className='authorization-button'>
            <Link className='menu-item-link signup-btn' to='/registration'> Sign Up </Link>
          </button>
        </div>
      </div>
  </div>
);

export default Header;
