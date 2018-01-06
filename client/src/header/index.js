import React from 'react';
import './style.css';
import Colors from '../_utils/colors';

function Header(props) {
  const style = {
    backgroundColor: Colors.one
  };

  return (
    <div className='header__wrapper' style={style}>
      <span className='header__title'>ToDo</span>
      <span>{props.numItems}</span>
    </div>
  );
}

export default Header;
