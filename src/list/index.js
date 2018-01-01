import React from 'react';

function List(props) {
  function renderItems () {
    return props.items.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      );
    })
  }

  return (
    <ul>
      {renderItems()}
    </ul>
  );
}

export default List;
