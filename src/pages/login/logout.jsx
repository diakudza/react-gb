import React from "react";
import {Redirect} from "react-router-dom";

export const Logout = () => {


    return (
        <Redirect to={{
            pathname: '/',
        }}/>)
}