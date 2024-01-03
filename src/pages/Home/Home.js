import React from 'react';
import anime from 'animejs';
import './Home.css'


const Home =()=>{

    return(
        <div className="flex flex-row  items-center  w-full ">
            <div className="flex flex-col w-1/3 items-center">
                <h1 className="font-bold text-7xl mb-10">
                    Hi, I am Phyo Hein.
                </h1>
                <h2 className="font-bold text-5xl mb-10">
                    Welcome to my portfolio !
                </h2>
                <h3 className="font-bold text-2xl">
                    Web developer / Software developer
                </h3>
            </div>
            <div className="flex flex-row w-full justify-center devLogo">
            
                <svg className="leftArrow"  viewBox="0 0 106 185" fill="" xmlns="http://www.w3.org/2000/svg">
                <path  className="wall" d="M45 77L106 37V69.5L45 112V77Z" fill="white"/>
                <path  className="wall"d="M105.5 149.5L0.5 75.5V110.5L105.5 184.5V149.5Z" fill="white"/>
                <path  className="arrow" d="M0 74.9112L105.75 0L105.75 37.4556L48.75 74.9112L105.75 112.367L105.75 149.822L0 74.9112Z" fill="black"/>

                </svg> 
            
            
                <svg className="rightArrow" viewBox="0 0 106 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wall" d="M56.5 75L0.5 35V70L56.5 110V75Z" fill="white"/>
                    <path className="wall" d="M0 150.5L105 76.5V111.5L0 185.5V150.5Z" fill="white"/>
                    <path className="arrow" d="M105.909 75.7383L0.158875 0.827148L0.158875 38.2827L57.1589 75.7383L0.158875 113.194L0.158875 150.65L105.909 75.7383Z" fill="black"/>
                </svg> 
            
            </div>
        </div>
    )
}

export default Home;