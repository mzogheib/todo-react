import React from 'react';
import './style.css';

function Header(props) {
  return (
    <div className='header__wrapper'>
      <span className='header__title'>ToDo</span>
      <span>{props.numItems}</span>
    </div>
  );
}

export default Header;
