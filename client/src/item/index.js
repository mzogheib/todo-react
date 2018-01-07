import React from 'react';
import './style.css';
import Colors from '../_utils/colors';

function Item(props) {
  const itemStyle = {
    backgroundColor: Colors.two
  };

  const iconStyle = {
    color: Colors.one
  };

  const checkboxId = 'checkbox' + props.item.id;
  const buttonId = 'button' + props.item.id;

  // The custom checkbox and button could probably be their own components
  return (
    <div className='item__wrapper' style={itemStyle}>
      <input id={checkboxId} className='item__checkbox' type='checkbox' checked={props.item.done} onChange={props.onToggle} />
      <label htmlFor={checkboxId}>
        <i className='material-icons' style={iconStyle}>{props.item.done ? 'check_circle' : 'radio_button_unchecked'}</i>
      </label>
      <span className='item__label'>{props.item.label}</span>
      <button id={buttonId} className='item__delete' onClick={props.onDelete}></button>
      <label htmlFor={buttonId}>
        <i className='material-icons' style={iconStyle}>clear</i>
      </label>
    </div>
  );
}

export default Item;
