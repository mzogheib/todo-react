import React, { Component } from 'react';
import Header from '../header';
import List from '../list';
import NewItem from '../new-item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleAdd(item) {
    const items = this.state.items.slice();
    items.push(item);
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div>
        <Header numItems={this.state.items.length}/>
        <List items={this.state.items}/>
        <NewItem onAdd={this.handleAdd.bind(this)}/>
      </div>
    );
  }
}

export default App;
