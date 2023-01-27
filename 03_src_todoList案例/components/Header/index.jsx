import React, {Component} from 'react';
import PropTypes from "prop-types";
import SnowflakeId from "snowflake-id";
import './index.css';

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event)=> {
        const {target, keyCode} = event;
        if (keyCode !== 13) return;
        //添加的todo名字不能为空
        if (target.value.trim() === "") {
            alert("输入不能为空");
            return;
        }
        const id= new SnowflakeId();
        this.props.addTodo({id: id.generate(), name: target.value, done: false});
        target.value = "";
    }
    render() {
        console.log(this.props);
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

