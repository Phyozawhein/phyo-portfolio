import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFolder, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar =({themeColor})=>{
    return(
    <nav className=" flex items-center no-underline list-none bg-black mr-2 px-1 ">
        <ul >
            <li>

                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="">
                    <FontAwesomeIcon icon={faHouse} className={`svg-${themeColor}`} />
                    <span className={`navLabel-${themeColor}`}>Home</span>
                </NavLink>
            </li>
            <li>
            
                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="experience">
                    <FontAwesomeIcon icon={faUser} color={themeColor === 'light' ? "white" : "black"} />
                    <span className={`navLabel-${themeColor}`}>Experience</span>
                </NavLink>
            </li>
            <li>    

                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="skill">
                    <FontAwesomeIcon icon={faBriefcase} color={themeColor === 'light' ? "white" : "black"} />
                    <span className={`navLabel-${themeColor}`}>Skill</span>
                </NavLink>
            </li>
            <li>
                
                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="projects">
                    <FontAwesomeIcon icon={faFolder}  color={themeColor === 'light' ? "white" : "black"}/>
                    <span className={`navLabel-${themeColor}`}>Projects</span>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;