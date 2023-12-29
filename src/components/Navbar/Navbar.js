import React from 'react';
import NavItem from './Navitem';
const Navbar =()=>{
    return(
    <ul className="flex flex-col items-center no-underline list-none">
        <li>
            <NavItem to="" name="Home"/>
        </li>
        <li>
            <NavItem to="experience" name="Experience"/>
        </li>
        <li>    
            <NavItem to="skill" name="Skill"/>
        </li>
        <li>
            <NavItem to="projects" name="Projects"/>
        </li>
    </ul>
    )
}

export default Navbar;