import React from 'react';
import './Button.css';
const Button = ({btnName, themeColor, link, className})=>{

    let btn = link ? 
            <a className={`p-2 btn-${themeColor} text-lg font-bold ${className}`} target='_blank' href={`${link}`}>
                {btnName}
            </a>
        :
            <button className={`p-2 btn-${themeColor} text-lg font-bold ${className}` }>
                {btnName}
            </button>
    return btn;
}

export default Button;