import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

export default class App extends Component {
    state = {todos:[
        {id:1,name:"吃饭",done:true},
        {id:2,name:"睡觉",done:false},
        {id:3,name:"打豆豆",done:false},
        {id:4,name:"吃饭",done:true},
        ]};
    addTodo = (todoObj)=>{
        const {todos} = this.state;
        const newTodos = [todoObj,...todos];
        this.setState({todos:newTodos});
    }
    updateTodo = (id,done)=>{
        //得到原todos
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.map(todoObj=>{
            if(todoObj.id===id) todoObj.done = done;
            return todoObj;
        })
        //更新状态
        this.setState({todos:newTodos});
    }
    deleteTodo = (id)=>{
        //得到原todos
        const {todos} = this.state;
        //删除指定id的todo对象
        const newTodos = todos.filter(todoObj=>{
            return todoObj.id!==id;
        })
        //更新状态
        this.setState({todos:newTodos});
    }
    checkAllTodos = (done)=>{
        //得到原todos
        const {todos} = this.state;
        //加工数据
        const newTodos = todos.map(todoObj=>{
            return {...todoObj,done};
        })
        //更新状态
        this.setState({todos:newTodos});
    }
    deleteAllTodos = ()=>{
        //得到原todos
        const {todos} = this.state;
        //过滤数据
        const newTodos = todos.filter(todoObj=>{
            return !todoObj.done;
        })
        //更新状态
        this.setState({todos:newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos} deleteAllTodos={this.deleteAllTodos}/>
                </div>
            </div>
        );
    }
}
