import React from 'react';

function Item(props) {
  return (
    <li key={props.index}>{props.value}</li>
  );
}

export default Item;
