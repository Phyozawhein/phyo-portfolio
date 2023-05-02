
import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import React,{ useState, useEffect }from 'react';
import './Skills.scss';
const Skills = ()=>{

    let [strClassName,setStrClass] = useState('animated-text')
 
    useEffect(()=>{
        setTimeout(()=>{ 
            setStrClass('animated-text-hover');
            
        }
    , 2000)
    },[])
    return(
        <div className="container">
        <div className="text-area">
            <span className="headline">
                <AnimatedLetters strArray={"Skills".split('') } strClass={strClassName}/>
            </span>
            <p className="skills-text">
                As an individual who is passionate about automating laborious tasks, 
                I found myself drawn towards the field of software engineering where technology can be utilized to 
                improve the quality of life. During my college career, I explored various fields within computer science, 
                but I found software engineering to be the most interesting. My goal is to become a proficient 
                full-stack developer and DevOps engineer. I am proficient in frontend development and have experience 
                with various technologies such as HTML5, CSS3, JavaScript, Python, SCSS, React.JS, and Vue.JS. 
                Additionally, I have knowledge in popular software development life cycle paradigms and tools such as 
                Agile, Spiral, Git, Gitlab, Bitbucket, CircleCI, and Heroku.
            </p>
        </div>
        <div className="image-area">
            
        </div>

    </div>
    )
}

export default Skills;