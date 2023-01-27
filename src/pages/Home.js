import React,{useState} from 'react';
import {Navigate} from "react-router-dom";

export default function Home(props) {
    const [sum, setSum] = useState(1);
    return (
        <div>
            <h3>我是Home的内容</h3>
            <h4>當前sum值：{sum} 點我將sum變爲2</h4>
            {sum === 2 ? <Navigate to="/about" replace={true} /> : null}
            <button onClick={e => setSum(2)}>點我</button>
        </div>

    );
}
