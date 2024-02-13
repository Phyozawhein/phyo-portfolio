import React,{ useEffect} from 'react';
import avatar from '../../assets/images/avatar.svg';
import anime from 'animejs';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

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
                    translateX:'50%',
                    translateY:'0%'
          
                },
                {
                    opacity:'100%',
                    translateX:'0%',
                    translateY:'0%'
                }
            ]
        })
        avatarAni.add({
            targets:' .exp-avatar',
            
            keyframes:[

                {
                    opacity:'0%',
                    translateX:'10%',
                    translateY:'0%',
                },
                {
                    opacity:'100%',
                    translateX:'-30%',
                    translateY:'0%',
                }
            ]
        })
    },[])
    return (
            <div className=' exp-section'>
                <div className="exp-text-section">
                    <p className=" exp-text">
                        As a  software developer, I offer one year of experience in software engineering, 
                        providing operational and technical support to senior software engineer and develop 
                        user interface components as a freelance web developer on UpWork.
                    </p>
                    <p className="exp-text">
                        I enjoy implementing UI designs and working on back end APIs. 
                        I am always looking for an opportunity to learn and grow, solve problems 
                        and make an impact.
                    </p>
                    <div className="exp-contact-section">
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
                        
                        {/* Github Icon */}
                        <Icon themeColor={themeColor} link="https://github.com/Phyozawhein">
                            <svg  viewBox="0 0 35 31"  xmlns="http://www.w3.org/2000/svg">
                                <path  d="M17.5 0.315674C7.86064 0.315674 0.0440979 7.28563 0.0440979 15.8845C0.0440979 22.7634 5.04575 28.599 11.9815 30.6579C12.8536 30.8023 13.1739 30.3202 13.1739 29.9089C13.1739 29.5377 13.1577 28.3113 13.1502 27.0104C8.29394 27.9521 7.26922 25.1734 7.26922 25.1734C6.47516 23.3739 5.33105 22.8954 5.33105 22.8954C3.74699 21.9291 5.45043 21.9492 5.45043 21.9492C7.20302 22.0588 8.12629 23.5536 8.12629 23.5536C9.68318 25.9332 12.2099 25.2454 13.206 24.8478C13.3627 23.8416 13.815 23.1545 14.3142 22.7657C10.4371 22.3726 6.36098 21.0374 6.36098 15.0718C6.36098 13.3721 7.04317 11.9832 8.15982 10.8927C7.97829 10.5008 7.38079 8.91733 8.32863 6.77285C8.32863 6.77285 9.79418 6.35442 13.13 8.3687C14.5227 8.02349 16.0162 7.84999 17.5 7.84406C18.9829 7.84999 20.4773 8.02298 21.8727 8.36819C25.2044 6.3539 26.6682 6.77233 26.6682 6.77233C27.6183 8.91656 27.0209 10.5003 26.8396 10.8922C27.9589 11.9827 28.6361 13.3716 28.6361 15.0713C28.6361 21.051 24.5525 22.3674 20.6655 22.7531C21.2919 23.2362 21.8498 24.184 21.8498 25.6362C21.8498 27.7193 21.8296 29.3959 21.8296 29.9087C21.8296 30.323 22.1441 30.8084 23.0286 30.6556C29.9603 28.5946 34.9562 22.7608 34.9562 15.8845C34.9559 7.28615 27.1402 0.315674 17.5 0.315674Z" />
                                <path d="M6.65555 22.6688C6.6171 22.7462 6.48067 22.7694 6.35637 22.7165C6.22918 22.666 6.15836 22.5605 6.19941 22.4829C6.23699 22.403 6.37371 22.3811 6.50003 22.4345C6.62722 22.4853 6.69949 22.5917 6.65526 22.6691L6.65555 22.6688ZM7.3626 23.3724C7.27964 23.4412 7.11689 23.4093 7.00647 23.3002C6.892 23.1919 6.87061 23.0468 6.95531 22.9769C7.04145 22.9083 7.19928 22.9408 7.31374 23.0491C7.42763 23.1589 7.45018 23.3028 7.36288 23.3726L7.3626 23.3724ZM8.05114 24.2688C7.94419 24.3353 7.76902 24.2732 7.66091 24.1347C7.55396 23.996 7.55396 23.8297 7.6638 23.7635C7.77162 23.697 7.94419 23.757 8.05403 23.8942C8.16041 24.0347 8.16041 24.2013 8.05114 24.2688ZM8.99378 25.1353C8.89839 25.2294 8.69431 25.2041 8.54515 25.076C8.39281 24.9505 8.35032 24.7718 8.446 24.678C8.54313 24.5836 8.74807 24.6099 8.8981 24.7372C9.05043 24.8625 9.09639 25.0415 8.99435 25.1351L8.99378 25.1353ZM10.2946 25.6383C10.2521 25.7602 10.0561 25.8157 9.85807 25.7636C9.66064 25.7102 9.53143 25.5677 9.5719 25.4444C9.61237 25.3215 9.8098 25.264 10.009 25.3194C10.2064 25.3725 10.3356 25.5143 10.2946 25.6383ZM11.7234 25.7314C11.7283 25.8598 11.5607 25.966 11.3534 25.9686C11.1444 25.9729 10.9753 25.8688 10.9733 25.7425C10.9733 25.6128 11.1375 25.5079 11.3462 25.5042C11.5534 25.5009 11.7237 25.604 11.7237 25.7311L11.7234 25.7314ZM13.0525 25.5298C13.0774 25.6548 12.9331 25.7835 12.727 25.8177C12.5247 25.8513 12.3368 25.7734 12.3108 25.6494C12.2859 25.521 12.4328 25.3923 12.6351 25.3591C12.8415 25.3274 13.0265 25.4027 13.0525 25.5298Z" />
                            </svg>
                        </Icon>
                        {/* UpWork Icon */}
                        <Icon  themeColor={themeColor} link="https://www.upwork.com/freelancers/~01f62331139c47163e">
                        <svg  viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.806 15C26.9788 15 26.3915 16.5714 26.261 17.5026V17.5608L26 18.4339C26.7831 19.0159 27.7619 19.4233 28.7407 19.4233C30.0459 19.4233 31.2205 18.4339 31.2857 17.1534C31.2857 15.9894 30.1764 15 28.806 15Z" fill="black"/>
                            <path d="M21.1755 1.15332C10.9557 1.15332 2.67549 8.5384 2.67549 17.6533C2.67549 26.7682 10.9557 34.1533 21.1755 34.1533C31.3952 34.1533 39.6755 26.7682 39.6755 17.6533C39.6755 8.5384 31.3952 1.15332 21.1755 1.15332ZM28.5606 22.7098C27.0686 22.7098 25.8005 22.3106 24.6815 21.7118L23.4134 27.0344H20.5041L22.2944 19.7158C21.5485 18.7844 20.8025 17.7199 20.2803 16.7219V17.8529C20.2803 20.5807 17.8186 22.7763 14.8348 22.7763C11.8509 22.7763 9.3892 20.5807 9.3892 17.8529V11.1997H12.2239V17.8529C12.2239 19.1836 13.4174 20.2481 14.9094 20.2481C16.4013 20.2481 17.5948 19.1836 17.5948 17.8529V11.1997H20.4295C21.0263 12.863 21.9961 14.859 23.2642 16.6553C24.0102 14.1271 26.0989 12.5969 28.7098 12.5969C31.7682 12.5969 34.3045 14.859 34.3045 17.5868C34.1553 20.4477 31.619 22.7098 28.5606 22.7098Z" fill="black"/>
                        </svg> 
                        </Icon>

                    </div>
                </div>
                <div className=" devLogo exp-dev-logo">
                    {/* Avatar */}
                    <svg className={` exp-avatar-bg ${themeColor}`} viewBox="0 0 220 233"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.7271 21.1826C30.6104 8.9941 41.1008 0 53.434 0H194.841C210.169 0 221.888 13.6685 219.548 28.8174L191.273 211.817C189.39 224.006 178.899 233 166.566 233H25.1593C9.83066 233 -1.88813 219.332 0.452468 204.183L28.7271 21.1826Z" 
                        />
                    </svg> 
                    <img src={avatar} className="exp-avatar" alt="avatar" />
                </div>

            </div>
    )
}

export default Experience;