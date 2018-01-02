import React from 'react';
import './style.css';
import Colors from '../_utils/colors';

function Item(props) {
  const itemStyle = {
    backgroundColor: Colors.two
  }

  const checkboxStyle = {
    backgroundColor: Colors.two,
    borderColor: Colors.one,
    color: Colors.one
  }

  return (
    <div className='item__wrapper' style={itemStyle}>
      <input className='item__checkbox' style={checkboxStyle} type='checkbox' checked={props.item.done} onChange={props.onToggle} />
      <span className='item__label' key={props.index}>{props.item.label}</span>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
}

export default Item;
