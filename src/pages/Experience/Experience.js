import React,{ useEffect} from 'react';
import avatar from '../../assets/images/avatar.svg';
import anime from 'animejs';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import expIcon from '../../assets/images/expIcon.svg';
import PDFfile from '../../assets/files/PHYO_ZAW_HEIN_RESUME.pdf';
import './Experience.css';
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
                <div className=" flex flex-row items-center w-11/12">
                    {/* Resume Link */}
                    <Button className="resume-btn" btnName="My Resume" link={PDFfile} themeColor={themeColor}/>

                    {/* LinkedIn Icon */}
                    <Icon themeColor={themeColor} link="https://www.linkedin.com/in/phyo-hein-45104b156/">
                        <svg viewBox="0 0 37 33"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5312 0.773435H3.46875C2.78665 0.767243 2.12966 1.00264 1.64193 1.42798C1.1542 1.85331 0.875574 2.43384 0.867188 3.04218V29.963C0.87709 30.5704 1.15638 31.1496 1.64395 31.5738C2.13151 31.9981 2.78764 32.2328 3.46875 32.2266H33.5312C34.2134 32.2314 34.8699 31.9952 35.3574 31.5696C35.8449 31.144 36.1237 30.5636 36.1328 29.9552V3.03445C36.1206 2.42789 35.8405 1.85013 35.3534 1.42675C34.8662 1.00336 34.2114 0.768582 33.5312 0.773435ZM11.3226 27.5859H6.08766V12.5632H11.3226V27.5859ZM8.72102 10.5162C8.1206 10.5167 7.53349 10.3583 7.03399 10.0612C6.53448 9.76406 6.145 9.34146 5.91484 8.84686C5.68467 8.35226 5.62415 7.80789 5.74094 7.2826C5.85772 6.75732 6.14656 6.27473 6.57092 5.89589C6.99528 5.51705 7.53609 5.25897 8.12493 5.15431C8.71377 5.04965 9.32419 5.10311 9.87896 5.30792C10.4337 5.51273 10.9079 5.8597 11.2416 6.30492C11.5752 6.75015 11.7533 7.27363 11.7533 7.80914C11.7525 8.16507 11.6731 8.51737 11.5195 8.84588C11.3659 9.17439 11.1412 9.47266 10.8582 9.72362C10.5752 9.97458 10.2395 10.1733 9.87028 10.3084C9.50108 10.4435 9.10563 10.5124 8.70656 10.511L8.72102 10.5162ZM30.9297 27.5859H25.6948V20.277C25.6948 18.5367 25.6601 16.2963 22.9747 16.2963C20.2893 16.2963 19.8326 18.1938 19.8326 20.1635V27.5859H14.6063V12.5632H19.6245V14.6257H19.6938C20.3934 13.4449 22.0988 12.1997 24.6455 12.1997C29.9469 12.1894 30.9297 15.3012 30.9297 19.3359V27.5859Z" fill="#020202"/>
                        </svg>
                    </Icon>
                    
                    {/* Email Icon */}
                    <Icon themeColor={themeColor} link="mailto:phyozawhein1997@gmail.com">
                        <svg viewBox="0 0 37 33"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 0.0274658C8.28337 0.0274658 0 7.41534 0 16.5275C0 25.6396 8.28337 33.0275 18.5 33.0275C28.7166 33.0275 37 25.6396 37 16.5275C37 7.41534 28.7166 0.0274658 18.5 0.0274658ZM29.2762 9.62497L18.5 17.4157L7.72221 9.62497H29.2762ZM29.2917 23.375H7.70833V11.6806L18.5 19.481L29.2917 11.682V23.375Z" fill="black"/>
                        </svg>
                    </Icon>

                </div>
            </div>
            <div className="flex flex-row w-full justify-center devLogo">
                {/* Avatar */}
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