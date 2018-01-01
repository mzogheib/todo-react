import React from 'react';

function Header (props) {
    return (
      <div>
        ToDo: {props.numItems} {props.numItems === 1 ? 'item' : 'items'}
      </div>
    );
}

export default Header;
