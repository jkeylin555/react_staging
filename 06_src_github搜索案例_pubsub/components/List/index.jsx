import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css';
export default class Index extends Component {
    state = {
        users: [], // 初始化状态，users初始值为数组
        isFirst: true, // 是否为第一次打开页面
        isLoading: false, // 标识是否处于加载中
        err: '', // 存储请求相关的错误信息
    }
    componentDidMount() {
        this.token = PubSub.subscribe('updateList', (_, stateObj) => {
            this.setState(stateObj);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
    render() {
        const {users, isFirst, isLoading, err} = this.state;

        return (
            <div className="row">
                {
                isFirst ? <h2>Welcome to use the search</h2> :
                isLoading ? <h2>Loading...</h2> :
                err ? <h2 style={{color:'red'}}>{err}</h2> :
                users.map((userObj) => {
                    return (
                    <div key={userObj.id} className="card">
                        <a href={userObj.html_url} target="_blank">
                            <img src={userObj.avatar_url} style={{width:'100px'}}/>
                        </a>
                        <p>{userObj.login}</p>
                    </div>
                    )
                })
                }
            </div>
        );
    }
}
