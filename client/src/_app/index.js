import React, { Component } from 'react';
import './style.css';
import Header from '../header';
import List from '../list';
import NewItem from '../new-item';
import Api from '../_utils/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    // Throw the errors if no label or id but don't terminate the entire program.
    // Just console log the error message.

    handleAdd(label) {
        try {
            if (!label) {
                throw new Error('No label given.');
            } else {
                this.addItem(label)
                    .then(item => {
                        const items = this.state.items.slice();
                        items.push(item);
                        this.setState({
                            items: items
                        });
                    });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    addItem(label) {
        const item = {
            label: label,
            done: false
        };

        return Api.post(item)
            .then(response => {
                return { ...item, id: response.id }
            });
    }

    handleToggle(id) {
        try {
            if (!id) {
                throw new Error('No item id given.');
            } else {
                let item = this.state.items.find(i => i.id === id);
                item.done = !item.done;
                this.updateItem(item)
                    .then(() => {
                        const items = this.state.items.map(i => {
                            return i.id === id ? item : i;
                        });
                        this.setState({
                            items: items
                        });
                    });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    updateItem(item) {
        return Api.update(item);
    }

    handleDelete(id) {
        try {
            if (!id) {
                throw new Error('No item id given.');
            } else {
                this.deleteItem(id)
                    .then(() => {
                        const items = this.state.items.filter(item => item.id !== id);
                        this.setState({
                            items: items
                        });
                    });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    deleteItem(id) {
        return Api.delete(id);
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
