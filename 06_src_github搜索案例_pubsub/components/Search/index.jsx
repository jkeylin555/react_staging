import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Index extends Component {
    search = (event) => {
        // const btns = document.querySelectorAll('button');
        // console.log(btns);
        // // get the keyCode
        // const {keyCode} = event;
        // if (keyCode !== 13 && !btns[0].onclick) return;
        // get the user input
        const {keyWordElement:{value:word}} = this;
        PubSub.publish('updateList', {isFirst:false, isLoading:true});
/*        this.props.updateAppState({isFirst:false, isLoading:true});*/
        axios.get(`https://api.github.com/search/users?q=${word}`).then(
            response => {
                PubSub.publish('updateList', {isLoading:false,users:response.data.items});
                /*this.props.updateAppState({isLoading:false,users:response.data.items});*/
            },
            error => {
                PubSub.publish('updateList', {isLoading:false,err:error.message});
                // this.props.updateAppState({isLoading:false,err:error.message});
            }
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}
