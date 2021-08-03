import './App.css';
import React from "react";
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {store} from "./store"

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import {Profile} from "./pages/profile/Profile";
import {ShowChat} from "./pages/chats/ShowChat";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const persistor = persistStore(store)

let App = () => {

    return (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <div className="app">
                        <Navbar/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Profile" component={Profile}/>
                        <Route path="/Chat"
                               render={() => <ShowChat style={{height: 'auto'}}/>}/>
                    </div>

                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
