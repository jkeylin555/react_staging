import React, {Component} from 'react';
import './index.css';
import PropTypes from "prop-types";
export default class Item extends Component {
    state = {mouse:false};//标识鼠标移入移出
    //鼠标移入移出的回调
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag});
        }
    }
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    handleDelete = (id)=>{
        if (window.confirm('确定删除吗?')){
            this.props.deleteTodo(id);
        }
    }
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }
    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (

            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    {name}
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
            </li>
        );
    }
}

