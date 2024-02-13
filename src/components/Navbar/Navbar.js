import React,{useState} from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faCode, faFolder, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar =({themeColor ='dark' , handleThemeColor})=>{
    const [displayMenu, setDisplayMenu]= useState(false);
    return(
    <nav >

        <ul className={` h-full non-mobile-nav flex flex-col items-center justify-center no-underline list-none   ${themeColor}-navbg `} >
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
       
       <div className="mobile-nav " onClick={()=>setDisplayMenu(!displayMenu)} >
            <FontAwesomeIcon icon={faBars}  className={` menu-icon menu-${themeColor}`}/>
            
            {displayMenu && (
                        <ul className={` h-full w-screen flex flex-col items-center justify-center no-underline list-none   ${themeColor}-navbg `} >
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
            )}
       </div>
    </nav>
    )
}

export default Navbar;