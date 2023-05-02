import React,{ useState, useEffect }from 'react';
import './Home.scss'
import AnimatedLetters from '../animatedLetters/AnimatedLetters.js';
import Plogo from '../../assets/images/PSolid.png';
import Avatar from '../../components/avatar/Avatar.js';
const Home = ()=>{
    let [strClassName,setStrClass] = useState('animated-text')
    let [strLogoName,setLogoClass] = useState('logoChar')
    useEffect(()=>{
        setTimeout(()=>{ 
            setStrClass('animated-text-hover');
            setLogoClass('logoChar-hover')
        }
    , 2000)
    },[])

    return(
        <div className="container">
            <div className="text-area">
                <span className="headline">
                    <AnimatedLetters strArray={"Hi! My name's...".split('') } strClass={strClassName}/>
                    <br/>
                    <img src={Plogo} className={strLogoName} />
                    <AnimatedLetters strArray={"hyo Hein ".split('') } strClass={strClassName}/>
                </span>
                <h3 >
                Computer Science Grad / Web developer  / Dev Ops 
                </h3>
            </div>
            <div className="image-area">
                <Avatar/>
            </div>

        </div>
    )
}

export default Home;