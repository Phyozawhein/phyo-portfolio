import React from 'react';
import './Icon.css';
const Icon =({className,link, children, themeColor})=>{

    return(
            link? 
            <a className={`icon-${themeColor} icon ${className}`} href={link} target="_blank">
                {children}
            </a>
            :
            <button className={`icon-${themeColor} icon ${className}`}>
                {children}
            </button>
    )
}

export default Icon;