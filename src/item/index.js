import React from 'react';
import './style.css';
import Colors from '../_utils/colors';

function Item(props) {
  const style = {
    backgroundColor: props.index % 2 === 0 ? Colors.two : Colors.three
  }

  return (
    <div className='item__wrapper' style={style}>
      <input type='checkbox' checked={props.item.done} onChange={props.onToggle} />
      <span className='item__label' key={props.index}>{props.item.label}</span>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
}

export default Item;
