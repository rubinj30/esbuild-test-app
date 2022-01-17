import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
      <nav className='navbar'>

        <ul className='navbar-items'>
          <li className='navbar-item'>Home</li>

          <li className='navbar-item'>Contact</li>

          <li className='navbar-item has-dropdown'>
            <a href='#'>Theme</a>
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <a id="dark" href="#">dark</a>
              </li>
              <li className='dropdown-item'>
                <a id="light" href="#">light</a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    );
}
export default Nav;