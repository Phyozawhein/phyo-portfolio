import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import SideMenu from '../sideMenu/SideMenu.js';
const Layout =()=>{

    return(
        <div className="App">
            <SideMenu/>
            <div className="page">
                <span className="tags">
                        &lt;html&gt;
                </span>
                        <br/>
                <span  className="tags body-tag">
                        &lt;body&gt;
                </span>
                <Outlet/>
                <span className="tags body-tag bottom-tag">
                        &lt;/body&gt;
                </span>
                <br/>
                <span  className="tags bottom-tag">
                        &lt;/html&gt;
                </span>
            </div>
      </div>
    )
}

export default Layout;