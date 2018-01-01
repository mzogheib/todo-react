import React from 'react';
import Item from '../item'

function List(props) {
  function renderItems () {
    return props.items.map((item, index) => {
      return (
        <Item key={index} value={item}/>
      );
    })
  }

  return (
    <ul>{renderItems()}</ul>
  );
}

export default List;
