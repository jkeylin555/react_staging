import React, {Component} from 'react';
import './index.css';

export default class Footer extends Component {
    handleCheckAll = (event)=>{
        this.props.checkAllTodos(event.target.checked);
    }
    handleDeleteAll = ()=>{
        if(window.confirm('确定删除吗?')) {
            this.props.deleteAllTodos();
        }
    }
    render() {
        const {todos} = this.props;
        //已完成的个数
        // const doneCount = todos.reduce((pre,cur)=> pre + (cur.done?1:0),0);
        const doneCount = todos.filter(todoObj=>todoObj.done).length;
        //总数
        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total!==0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleDeleteAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}