import React,{useState} from 'react';
import Card from '../../components/Card/Card';
import './Project.css';
const Project =({themeColor})=>{
    return (
            <div >
                <ul className={`flex flex-row  flex-wrap project-dashboard`}>
                    <li >
                        <Card
                        themeColor={themeColor} 
                        title="Simple DailiLog" 
                        tech="ReactJS, GoogleSheet, Firebase"
                        description="A simple version of 'dailiLog' project, this project allows user to keep track of the inventory of packages for the apartments in the building." 
                        gitHublink="https://github.com/Phyozawhein/simpleDailiLog"
                        website="https://simpledaililog-9bab6.web.app/"/>
                    </li>
                    

                </ul>
            </div>
    )
}

export default Project;