import React from 'react';
import './style.css';
import Item from '../item'

function List(props) {
  function renderItems() {
    return props.items.map((item, index) => {
      return (
        <Item
          index={index}
          item={item}
          onToggle={() => { props.onToggle(index); }}
          onDelete={() => { props.onDelete(index); }}
        />
      );
    });
  }

  function renderZero() {
    return (
      <div className='list__zero'>None</div>
    );
  }

  return (
    <div className='list__wrapper'>{props.items.length === 0 ? renderZero() : renderItems()}</div>
  );
}

export default List;
