
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
        <Link to="/">
            <img src={Plogo} className="logo" />
        </Link>

        <nav >
                        <NavLink className="home-link" activeClassName="active"  to='home'>
                                    <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                   
                        <NavLink className="skill-link" activeClassName="active"  to='skills'>
                            <FontAwesomeIcon icon ={faCode}/>
                        </NavLink>
                 
                        <NavLink className="proj-link" activeClassName="active"  to='projects'>
                            <FontAwesomeIcon icon ={faFolder}/>
                        </NavLink>
                    
                        <NavLink className="contact-link" activeClassName="active"  to='contact'>
                            <FontAwesomeIcon icon ={faEnvelope}/>
                        </NavLink>
        </nav>
        <div className="socials">
            <ul>
                <li>
                    <a href="https://github.com/Phyozawhein" target="_blank"> <FontAwesomeIcon icon={faGithubAlt} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/phyo-hein-45104b156/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                {/* <li>
                    <a href=""> <FontAwesomeIcon icon={faGithubAlt} /></a>
                </li> */}
            </ul>

        </div>
                    

    </div>)
}

export default SideMenu;