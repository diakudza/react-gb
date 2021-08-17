import './App.css';
import React from "react";
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./store"
import './api/firebase';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {Routes} from "./components/Routes";


const persistor = persistStore(store)

let App = () => {



    return (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Routes/>
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
