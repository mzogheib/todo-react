import React from 'react';
import Item from '../item'

function List(props) {
  function renderItems () {
    return props.items.map((item, index) => {
      return (
        <Item key={index} item={item} onToggle={() => { props.onToggle(index); }}/>
      );
    })
  }

  return (
    <div>{renderItems()}</div>
  );
}

export default List;
