import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCode, faFolder, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar =({themeColor ='dark' , handleThemeColor})=>{
    return(
    <nav className={`flex items-center justify-center no-underline list-none  mr-2 px-1 ${themeColor}-navbg`}>

        <ul >
            <li className="themeBtn ">
                <button  onClick={()=>handleThemeColor()}> 
                    {themeColor === 'light'? <FontAwesomeIcon icon={faSun} className='text-white' />
                    : <FontAwesomeIcon icon={faMoon} className='text-black'/>}
                   
                </button>
            </li>
            
            <li>

                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="">
                    <FontAwesomeIcon icon={faHouse} className={`svg-${themeColor}`} />
                    <span className={`navLabel-${themeColor}`}>Home</span>
                </NavLink>
            </li>
            <li>
            
                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="experience">
                    <FontAwesomeIcon icon={faUser}  className={`svg-${themeColor}`} />
                    <span className={`navLabel-${themeColor}`}>Experience</span>
                </NavLink>
            </li>
            <li>    

                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="skill">
                    <FontAwesomeIcon icon={faCode}  className={`svg-${themeColor}`} />
                    <span className={`navLabel-${themeColor}`}>Skill</span>
                </NavLink>
            </li>
            <li>
                
                <NavLink className={({isActive}) => "navLink "+(isActive ? "active":"")} to="projects">
                    <FontAwesomeIcon icon={faFolder}  className={`svg-${themeColor}`}/>
                    <span className={`navLabel-${themeColor}`}>Projects</span>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;