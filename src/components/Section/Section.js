import React from 'react';
import './Section.css';
const Section = ({title,children, themeColor, className})=>{
    return(
        <div className={`section-${themeColor} flex flex-col w-full mb-10`}>
            <h1 className="mb-2 text-2xl font-extrabold border-b-4">
                {title}
            </h1>

            <div className={`flex flex-row w-full items-center ${className}`}>
                {children}
            </div>
        </div>
    )
}
export default Section;