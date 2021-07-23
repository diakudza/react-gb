
import React from "react";
import {NavLink} from "react-router-dom"
const Navbar = (props) => {

    return (
        <div className="flexRow">{/*Навбар*/}
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Chats">Messages</NavLink>
        </div>
    );
}

export default Navbar;
