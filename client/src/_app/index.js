import React, { Component } from 'react';
import './style.css';
import Header from '../header';
import List from '../list';
import NewItem from '../new-item';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: 0
        };
    }
    // Throw the errors if no label or id but don't terminate the entire program.
    // Just console log the error message.

    handleAdd(label) {
        try {
            if (!label) {
                throw new Error('No label given.');
            } else {
                const items = this.state.items.slice();
                const id = this.state.id + 1;
                items.push({
                    id: id,
                    label: label,
                    done: false
                });
                this.setState({
                    items: items,
                    id: id
                });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    handleToggle(id) {
        try {
            if (!id) {
                throw new Error('No item id given.');
            } else {
                const items = this.state.items.slice();
                const item = items.find(i => i.id === id)
                item.done = !item.done;
                this.setState({
                    items: items
                });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    handleDelete(id) {
        try {
            if (!id) {
                throw new Error('No item id given.');
            } else {
                const items = this.state.items.filter(item => item.id !== id);
                this.setState({
                    items: items
                });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    render() {
        const remainingItems = this.state.items.filter((item => !item.done));
        return (
            <div className='app__wrapper'>
                <div className='app__main'>
                    <Header numItems={remainingItems.length} />
                    <List
                        items={this.state.items}
                        onToggle={this.handleToggle.bind(this)}
                        onDelete={this.handleDelete.bind(this)}
                    />
                    <NewItem onAdd={this.handleAdd.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;
