import React from 'react';
import { Link } from 'react-router-dom';
const NavItem =(props)=>{
    return(
        <Link to={props.to}>{props.name}</Link>
    )
}

export default NavItem;