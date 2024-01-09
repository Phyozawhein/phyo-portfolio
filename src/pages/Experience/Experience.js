import React,{ useEffect} from 'react';
import avatar from '../../assets/images/avatar.svg';
import anime from 'animejs';
import Button from '../../components/Button/Button';
import './Experience.css';
import PDFfile from '../../assets/files/PHYO_ZAW_HEIN_RESUME.pdf'
const Experience =({themeColor})=>{
    useEffect(()=>{
        // animation for avatar and avatar background
        let avatarAni = anime.timeline({
            duration:500,
            easing:'linear'

        })
        avatarAni.add({
            targets:' .exp-avatar-bg',
            keyframes:[

                {
                    opacity:'0%',
                    translateX:'50%'
                },
                {
                    opacity:'100%',
                    translateX:'0%'
                }
            ]
        })
        avatarAni.add({
            targets:' .exp-avatar',
            
            keyframes:[

                {
                    opacity:'0%',
                    translateX:'10%',
                    translateY:'-3%',
                },
                {
                    opacity:'100%',
                    translateX:'0%',
                    translateY:'-3%',
                }
            ]
        })
    },[])
    return (
            <React.Fragment>
            <div className="flex flex-col w-10/12 ml-10">
                <span className=" mb-5 text-lg">
                    As a  software developer, I offer one year of experience in software engineering, 
                    providing operational and technical support to senior software engineer and develop 
                    user interface components as a freelance web developer on UpWork.
                </span>
                <span className="mb-5 text-lg ">
                    I enjoy implementing UI designs and working on back end APIs. 
                    I am always looking for an opportunity to learn and grow, solving problems 
                    and making an impact.
                </span>
                <div className="w-full flex flex-row items-center">
                    <Button btnName="My Resume" link={PDFfile} themeColor={themeColor}/>
                </div>
            </div>
            <div className="flex flex-row w-full justify-center devLogo">
                <svg className={` exp-avatar-bg ${themeColor}`} viewBox="0 0 220 233"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7271 21.1826C30.6104 8.9941 41.1008 0 53.434 0H194.841C210.169 0 221.888 13.6685 219.548 28.8174L191.273 211.817C189.39 224.006 178.899 233 166.566 233H25.1593C9.83066 233 -1.88813 219.332 0.452468 204.183L28.7271 21.1826Z" 
                    />
                </svg> 
                <img src={avatar} className="exp-avatar" />
            </div>

            </React.Fragment>
    )
}

export default Experience;