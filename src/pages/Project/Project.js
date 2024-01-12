import React,{ useEffect } from 'react';
import anime from 'animejs';
import Card from '../../components/Card/Card';
import './Project.css';
const Project =({themeColor})=>{

    useEffect(()=>{
        let projectCard = anime.timeline({
            targets:'.project-card',
            duration: 500,
            // delay: anime.stagger(500),
            easing:'linear'
        })
        projectCard.add({
            keyframes:[
                {   
                    opacity:'0%',
                    translateX:'-50%'
                },
                {   
                    opacity:'100%',
                    translateX:'0%'
                }
            ]
        })

    },[])
    return (
            <div >
                <ul className={`flex flex-row  flex-wrap project-dashboard items-center`}>
                    <li className="project-card" >
                        <Card
                        themeColor={themeColor} 
                        title="Simple DailiLog" 
                        tech="ReactJS, GoogleSheet, Firebase"
                        description="A simple version of 'dailiLog' project, this project allows user to keep track of the inventory of packages for the apartments in the building." 
                        gitHublink="https://github.com/Phyozawhein/simpleDailiLog"
                        website="https://simpledaililog-9bab6.web.app/"/>
                    </li>
                    <li className="project-card" >
                        <Card
                        themeColor={themeColor} 
                        title="Food Nation" 
                        tech="ReactJS, Firebase, Google Cloud Platform"
                        description="An application that connects restaurants with charity organization to reduce food waste and contribute to the community." 
                        gitHublink="https://github.com/Phyozawhein/FoodNation"
                        />
                    </li>
                    <li className="project-card" >
                        <Card
                        themeColor={themeColor} 
                        title="Golden Experience" 
                        tech="ReactJS, Firebase, Google Cloud Platform"
                        description="A web application for restaurant that allows owner and employee to manage their work and customers to make reservations and order food." 
                        gitHublink="https://github.com/aahmed019/GoldenExperience"
                        />
                    </li>
                    

                </ul>
            </div>
    )
}

export default Project;