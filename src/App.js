import './App.css';
import React from "react";
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {store} from "./store"

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import {Profile} from "./pages/profile/Profile";
import {ShowChat} from "./pages/chats/ShowChat";


let App = () => {


    return (

<Provider store={store}>
    <Router>
        <div className="app">
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Profile" component={Profile}/>
            <Route path="/Chat"
                   render={() => <ShowChat style={{height: 'auto'}} />}/>
        </div>

    </Router>
</Provider>
    );
};

export default App;
