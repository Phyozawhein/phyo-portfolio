import React from 'react';

const Layout =(props)=>{

    return(  <div className="flex flex-row  items-center  w-full">
            {props.children}
            </div>)
}

export default Layout;