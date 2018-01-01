import React, { Component } from 'react';

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
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} autoFocus/>
        <button onClick={this.handleAdd.bind(this)}>Add</button>
      </form>
    );
  }
}

export default NewItem;
