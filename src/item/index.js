import React from 'react';

function Item(props) {
  return (
    <div>
      <input type='checkbox' checked={props.item.done} onChange={props.onToggle}/>
      <span key={props.index}>{props.item.label}</span>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
}

export default Item;
