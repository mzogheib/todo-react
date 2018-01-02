import React from 'react';
import './style.css';

function Item(props) {
  return (
    <div className='item__wrapper'>
      <input type='checkbox' checked={props.item.done} onChange={props.onToggle} />
      <span className='item__label' key={props.index}>{props.item.label}</span>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
}

export default Item;
