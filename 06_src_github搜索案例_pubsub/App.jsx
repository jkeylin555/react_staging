import React, {Component} from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default class App extends Component {


    saveUsers = (users) => {
        this.setState({users});
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        );
    }
}
