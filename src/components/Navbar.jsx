import React, {useState} from "react";
import {NavLink} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import firebase from "firebase";
import {LoginName} from "./LoginName";
import {loginConnect} from "../connects/loginConnect";


export const NavbarRender = ({loginName, isAuthificated, addLoginToStore, switchAuthVar}) => {

    const [error, setError] = useState("");

    const logoutFunc = async () => {

        try {
            await firebase.auth().signOut()
            switchAuthVar(false)
            addLoginToStore('guest')
        } catch (e) {
            setError(e);
        }
    }
    return (
        <div className="flexRow navbar">
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <NavLink to="/"><Button>НОМЕ</Button> </NavLink>
                <NavLink to="/Profile"><Button>PROFILE</Button> </NavLink>
                <NavLink to="/Chat"><Button>CHATS</Button> </NavLink>
                <NavLink to="/Dictionary"><Button>Dictionary</Button></NavLink>
                {!isAuthificated && <NavLink to="/Login"><Button>login</Button></NavLink>}
                {isAuthificated && <NavLink to="/Logout" onClick={logoutFunc}><Button>logout</Button></NavLink>}

            </ButtonGroup>
            <LoginName auth={isAuthificated} name={loginName}/>
        </div>
    );
}

export const Navbar = loginConnect(NavbarRender);