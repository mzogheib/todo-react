import React, { Component } from 'react';
import './style.css';
import Colors from '../_utils/colors';

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

  handleKeyDown(e) {
    const ENTER_KEY = 13;

    if (e.keyCode !== ENTER_KEY) {
      return;
    }

    e.preventDefault();

    this.props.onAdd(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    const style = {
      backgroundColor: this.props.backgroundColor
    };

    const addIconStyle = {
      color: Colors.one
    };

    return (
      <div className='new-item__wrapper' style={style}>
        <span  style={addIconStyle} className='new-item__add-icon'></span>
        <input
          className='new-item__input'
          style={style}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          autoFocus
        />
      </div>
    );
  }
}

export default NewItem;
