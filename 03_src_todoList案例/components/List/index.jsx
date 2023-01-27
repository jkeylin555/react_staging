import React, {Component} from 'react';
import Item from "../Item";
import './index.css';
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
    }
    render() {
        const {todos, updateTodo, deleteTodo} = this.props;
        console.log(todos)
        return (
            <ul className="todo-main">
                {
                    todos.map(todo=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

