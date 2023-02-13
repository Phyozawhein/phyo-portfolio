import React,{ useState, useEffect }from 'react';
import './Home.scss'
import AnimatedLetters from '../animatedLetters/AnimatedLetters.js';
import Plogo from '../../assets/images/PSolid.png';
import Avatar from '../../components/avatar/Avatar.js';
const Home = ()=>{
    let [strClassName,setStrClass] = useState('animated-text')

    useEffect(()=>{
        setTimeout(()=>{ 
            setStrClass('animated-text-hover')
        }
    , 2000)
    },[])

    return(
        <div className="container">
            <div className="text-area">
                <span className="headline">
                    <AnimatedLetters strArray={"Hi! My name's...".split('') } strClass={strClassName}/>
                    <br/>
                    <img src={Plogo} className="logoChar" />
                    <AnimatedLetters strArray={"hyo Hein ".split('') } strClass={strClassName}/>
                </span>
                <h2 >
                    Web developer / Dev Ops 
                </h2>
            </div>
            <div className="image-area">
                <Avatar/>
            </div>

        </div>
    )
}

export default Home;