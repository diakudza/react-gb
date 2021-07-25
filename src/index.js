import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let render=()=>{
ReactDOM.render(
    <React.StrictMode>
        <App render={render}/>
    </React.StrictMode>,
    document.getElementById('root')
)
}

render()

reportWebVitals();
