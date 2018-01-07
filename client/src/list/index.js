import React from 'react';
import './style.css';
import Item from '../item'

function List(props) {
  function renderItems() {
    return props.items.map(item => {
      return (
        <Item
          key={item.id}
          item={item}
          onToggle={() => { props.onToggle(item.id); }}
          onDelete={() => { props.onDelete(item.id); }}
        />
      );
    });
  }

  return (
    <div className='list__wrapper'>{renderItems()}</div>
  );
}

export default List;
