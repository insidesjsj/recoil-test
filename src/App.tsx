import React from 'react';
import './App.css';
import Counter from './Counter';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import Github from './Github';

function App() {
    return (
        <div className="App">
            <Counter/>
            <br/>
            <MyComponent />
            <MyComponent2 />
            <Github />
        </div>
    );
}

export default App;
