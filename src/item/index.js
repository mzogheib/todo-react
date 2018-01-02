import React from 'react';
import './style.css';

function Item(props) {
  const colorScheme = props.index % 2 === 0 ? 'item__color-scheme' : 'item__color-scheme-alternate';
  return (
    <div className={'item__wrapper' + ' ' + colorScheme}>
      <input type='checkbox' checked={props.item.done} onChange={props.onToggle} />
      <span className='item__label' key={props.index}>{props.item.label}</span>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
}

export default Item;
