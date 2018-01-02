import React, { Component } from 'react';
import './style.css';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleAdd() {
    this.props.onAdd(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form className='new-item__wrapper' onSubmit={(e) => { e.preventDefault() }}>
        <input className='new-item__input' value={this.state.value} onChange={this.handleChange.bind(this)} autoFocus />
        <button className='new-item__button' onClick={this.handleAdd.bind(this)} disabled={!this.state.value}>Add</button>
      </form>
    );
  }
}

export default NewItem;
