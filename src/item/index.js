import React from 'react';

function Item(props) {
  return (
    <div>
      <input type='checkbox' onChange={props.onToggle}/>
      <span key={props.index}>{props.item.label}</span>
    </div>
  );
}

export default Item;