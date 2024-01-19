import React, { useEffect } from 'react';
import anime from 'animejs';
import './Home.css'


const Home =({themeColor = 'light'})=>{
    
    useEffect(()=>{
        // left Arrow animation
        let lArrow = anime.timeline({
           targets:'.leftArrow',
           duration:1000,
           
        })
        lArrow.add({
            translateX:'-20%',
            delay:1500
        })
        lArrow.add({
            translateY:'-20%',
            clipPath:'polygon(100% 0%, 0% 40%, 0% 60%, 100% 100%, 100% 61%, 70% 49%, 100% 38%)'
        })  
        // right Arrow animation
        let rArrow = anime.timeline({
            targets: '.rightArrow',
            duration:1000
        })
        rArrow.add({
            translateX:'20%',
            delay:1500
        })
        rArrow.add({
            translateY:'-20%',
            clipPath:'polygon(0 0, 100% 40%, 100% 60%, 0 100%, 0 60%, 32% 49%, 0 37%)',

        });
        // animation for titles
        let titles= anime.timeline({
            
            duration:300,
            easing: 'linear'
        })
        titles.add({
            targets: '.home-t1',
            keyframes:[
                {
                    opacity: '0%',
                    translateX:'-10%',
                },
                {
                    opacity: '33%',
                    translateX:'-5%',
                },
                {
                    opacity: '100%',
                    translateX:'0%',
                }
            ]
            
            })
        titles.add({
                targets: '.home-t2',
                keyframes:[
                    {
                        opacity: '0%',
                        translateX:'-10%',
                    },
                    {
                        opacity: '33%',
                        translateX:'-5%',
                    },
                    {
                        opacity: '100%',
                        translateX:'0%',
                    }
                ]
               
        })
        titles.add({
            targets: '.home-t3',
            keyframes:[
                {
                    opacity: '0%',
                    translateX:'-10%',
                },
                {
                    opacity: '33%',
                    translateX:'-5%',
                },
                {
                    opacity: '100%',
                    translateX:'0%',
                }
            ]
            
        })
    },[])
    return(
            <React.Fragment>
            <div className="flex flex-col w-10/12 ml-10 home-text">
                <h1 className="font-bold text-7xl mb-10 home-t1 ">
                    Hi, I am Phyo Hein
                </h1>
                <h2 className="font-bold text-5xl mb-10 home-t2">
                    Welcome to my portfolio!
                </h2>
                <h3 className="font-bold text-2xl home-t3">
                    Web developer / Software developer
                </h3>
            </div>
            <div className="flex flex-row w-full justify-center devLogo max">
            
                <svg className={`leftArrow ${themeColor}`}   viewBox="0 0 106 185" fill="" xmlns="http://www.w3.org/2000/svg">
                    <path  className="wall" d="M45 77L106 37V69.5L45 112V77Z" />
                    <path  className="wall"d="M105.5 149.5L0.5 75.5V110.5L105.5 184.5V149.5Z" />
                    <path  className="arrow" d="M0 74.9112L105.75 0L105.75 37.4556L48.75 74.9112L105.75 112.367L105.75 149.822L0 74.9112Z" fill="black"/>
                </svg> 
            
                <svg className={`rightArrow ${themeColor}`} viewBox="0 0 106 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wall" d="M56.5 75L0.5 35V70L56.5 110V75Z" />
                    <path className="wall" d="M0 150.5L105 76.5V111.5L0 185.5V150.5Z" />
                    <path className="arrow" d="M105.909 75.7383L0.158875 0.827148L0.158875 38.2827L57.1589 75.7383L0.158875 113.194L0.158875 150.65L105.909 75.7383Z" fill="black"/>
                </svg> 
            
            </div>
        </React.Fragment>
    )
}

export default Home;