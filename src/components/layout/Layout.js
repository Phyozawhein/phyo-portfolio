import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import SideMenu from '../sideMenu/SideMenu.js';
const Layout =()=>{

    return(
        <div className="App">
            <SideMenu/>
            <div className="pages">
                <Outlet/>
            </div>
      </div>
    )
}

export default Layout;