import React, { Component } from 'react';
import './style.css';
import Header from '../header';
import List from '../list';
import NewItem from '../new-item';
import Colors from '../_utils/colors';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    handleAdd(label) {
        // Throw the error if no label but don't terminate the entire program.
        // Just console log the error message.
        try {
            if (!label) {
                throw new Error('No label given.');
            } else {
                const items = this.state.items.slice();
                items.push({
                    label: label,
                    done: false
                });
                this.setState({
                    items: items
                });
            }
        } catch (e) {
            console.debug(e.message);
        }
    }

    handleToggle(index) {
        const items = this.state.items.slice();
        items[index].done = !items[index].done;
        this.setState({
            items: items
        });
    }

    handleDelete(index) {
        const items = this.state.items.filter((item, idx) => idx !== index);
        this.setState({
            items: items
        });
    }

    render() {
        const remainingItems = this.state.items.filter((item => !item.done));
        const newItemBackgroundColor = Colors.two;
        return (
            <div className='app__wrapper'>
                <div className='app__main'>
                    <Header numItems={remainingItems.length} />
                    <List
                        items={this.state.items}
                        onToggle={this.handleToggle.bind(this)}
                        onDelete={this.handleDelete.bind(this)}
                    />
                    <NewItem backgroundColor={newItemBackgroundColor} onAdd={this.handleAdd.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;
