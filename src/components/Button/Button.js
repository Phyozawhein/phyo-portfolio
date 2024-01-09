import React from 'react';
import './Button.css';
const Button = ({btnName, themeColor, link})=>{

    let btn = link.length >0 ? 
            <a className={`p-2 btn-${themeColor} text-lg font-bold`} target='_blank' href={`${link}`}>
                {btnName}
            </a>
        :
            <button className={`p-2 btn-${themeColor} text-lg font-bold`}>
                {btnName}
            </button>
    return btn;
}

export default Button;