import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Counter} from './components/Counter';

function App() {
    return (
        <div className="App">
            <Header title="Hello from App"/>
            <Header title="Hello from App 2"/>
            <Body text="Ben Tao"/>
            <Counter count={0}/>
            <br></br>
            <Counter count={10}/>
        </div>
    );
}

export default App;
