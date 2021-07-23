
import React from "react";
import {NavLink} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Navbar = (props) => {

    return (
        <div className="flexRow navbar">{/*Навбар*/}
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <NavLink to="/" ><Button>НОМЕ</Button>      </NavLink>
                <NavLink to="/Profile" ><Button>PROFILE</Button>      </NavLink>
                <NavLink to="/Chats" ><Button>CHATS</Button>      </NavLink>
            </ButtonGroup>
        </div>
    );
}

export default Navbar;
