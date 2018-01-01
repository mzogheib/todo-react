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

  handleAdd(label) {
    if (!label) {
      throw new Error('No label given.');
    }

        const items = this.state.items.slice();
    items.push({
      label: label,
      done: false
    });
    this.setState({
      items: items
    });
  }

  handleToggle(index) {
    const items = this.state.items.slice();
    items[index].done = !items[index].done;
    this.setState({
      items: items
    });
  }

  render() {
    const remainingItems = this.state.items.filter((item => !item.done ));
    return (
      <div>
        <Header numItems={remainingItems.length}/>
        <List items={this.state.items} onToggle={this.handleToggle.bind(this)}/>
        <NewItem onAdd={this.handleAdd.bind(this)}/>
      </div>
    );
  }
}

export default App;
