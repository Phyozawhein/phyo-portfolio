import {React} from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters=({strArray,strClass})=>{
    return(
        <span>
            {
                strArray.map((char,i)=>{return <span className={strClass} key={i}>{char}</span>})
            }
        </span>
    )
}

export default AnimatedLetters;