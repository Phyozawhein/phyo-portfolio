
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHouse,faEnvelope,faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Plogo from "../../assets/images/PSolid.png"
import { NavLink ,Link} from 'react-router-dom';
import "./SideMenu.scss"
const SideMenu = ()=>{
    return(
    <div className="navbar">
        
        <Link to="/home"  className="logo"  >
            <img src={Plogo} />    {
                // will replace the logo with something more interesting 
            }
        </Link>

        <nav >
                        <NavLink className={({isActive})=> isActive ? "home-link active": "home-link" }  to="/">
                                    <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                   
                        <NavLink className={({isActive})=> isActive ? "skill-link active": "skill-link" }  to='skills'>
                            <FontAwesomeIcon icon ={faCode}/>
                        </NavLink>
                 
                        <NavLink className={({isActive})=> isActive ? "proj-link active": "proj-link" }  to='projects'>
                            <FontAwesomeIcon icon ={faFolder}/>
                        </NavLink>
                    
                        <NavLink className={({isActive})=> isActive ? "contact-link active": "contact-link" }  to='contact'>
                            <FontAwesomeIcon icon ={faEnvelope}/>
                        </NavLink>
        </nav>
        <div className="socials">
            <ul>
                <li>
                    <a href="https://github.com/Phyozawhein" target="_blank" className="github-link"> <FontAwesomeIcon icon={faGithubAlt} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/phyo-hein-45104b156/" target="_blank" className="linkedin-link"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
            </ul>

        </div>
                    

    </div>)
}

export default SideMenu;