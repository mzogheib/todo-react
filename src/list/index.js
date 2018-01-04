import React from 'react';
import './style.css';
import Item from '../item'

function List(props) {
  function renderItems() {
    return props.items.map((item, index) => {
      return (
        <Item
          key={index}
          index={index}
          item={item}
          onToggle={() => { props.onToggle(index); }}
          onDelete={() => { props.onDelete(index); }}
        />
      );
    });
  }

  return (
    <div className='list__wrapper'>{renderItems()}</div>
  );
}

export default List;
