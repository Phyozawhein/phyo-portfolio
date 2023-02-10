import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faCode, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import "./SideMenu.scss"
const SideMenu = ()=>{
    return(
    <div className="navbar">
        <nav >
                        <NavLink className="nav-item"   to='home'>
                                    <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                   
                        <NavLink className="nav-item"   to='skills'>
                            <FontAwesomeIcon icon ={faCode}/>
                        </NavLink>
                   
                        <NavLink className="nav-item"   to='experience'>
                            <FontAwesomeIcon icon ={faBriefcase}/>
                        </NavLink>
                 
                        <NavLink className="nav-item"   to='projects'>
                            <FontAwesomeIcon icon ={faFolder}/>
                        </NavLink>
                    
                        <NavLink className="nav-item"   to='contact'>
                            <FontAwesomeIcon icon ={faEnvelope}/>
                        </NavLink>
        </nav>

                    

    </div>)
}

export default SideMenu;