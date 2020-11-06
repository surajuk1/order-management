import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <ul className='sidebar navbar-nav'>
        <li className='nav-item'>
          <Link to='/order' className='nav-link'>
            <span>Order</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default SideBar;
