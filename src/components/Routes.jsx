import {Route, Switch} from "react-router-dom";
import {Navbar} from "./Navbar";
import Home from "../pages/home/Home";
import {Profile} from "../pages/profile/Profile";
import {ShowChat} from "../pages/chats/ShowChat";
import {Signup} from "../pages/Signup/Signup"
import {Dictionary} from "../pages/dictionary/Dictionary";
import React, {useEffect, useState} from "react";
import {PublicRoute} from "./../HOC/PublicRoute";
import {PrivateRoute} from "./../HOC/PrivateRoute"
import firebase from "firebase";
import {Login} from "../pages/login/login";
import {useDispatch} from "react-redux";
import {initContactsTracking} from "../store/Contacts";
import {Logout} from "../pages/login/logout";
import {initMessageTracking} from "../store/Messages";
import {loginConnect} from "../connects/loginConnect";

const RoutesRender = ({isAuthificated, switchAuthVar, addLoginToStore}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initContactsTracking())
        dispatch(initMessageTracking())
    }, [isAuthificated])

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                debugger
                console.log(firebase.auth().currentUser.email)
                switchAuthVar(true);
                console.log("AUTH_TRUE",isAuthificated)
            } else {
                debugger
                switchAuthVar(false);
                console.log("AUTH_FALSE",isAuthificated)
            }
        })

    }, [isAuthificated])


    return (
        <div className="app">
            <Navbar/>

            <Switch>
                <Route auth={isAuthificated} exact path="/">
                    <Home/>
                </Route>

                <PrivateRoute auth={isAuthificated} exact path="/Profile">
                    <Profile/>
                </PrivateRoute>

                <PrivateRoute auth={isAuthificated} exact path="/Logout">
                    <Logout/>
                </PrivateRoute>

                <PrivateRoute auth={isAuthificated} path="/Chat">
                    <ShowChat style={{height: 'auto'}}/>
                </PrivateRoute>

                <Route auth={isAuthificated} exact path="/Dictionary">
                    <Dictionary/>
                </Route>

                <PublicRoute auth={isAuthificated} exact path="/Login">
                    <Login/>
                </PublicRoute>

                <PublicRoute auth={isAuthificated} exact path="/Signup">
                    <Signup/>
                </PublicRoute>
            </Switch>
        </div>

    );
};

export const Routes = loginConnect(RoutesRender)