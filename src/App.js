import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Skill from './pages/Skill/Skill';
import Project from './pages/Project/Project';
import Experience from './pages/Experience/Experience';
import Icon from './components/Icon/Icon';
import {Routes, Route} from "react-router-dom";
import {React, useState} from 'react';
import './App.css';


function App() {
  const [themeColor,setThemeColor] = useState('light')
  
  const handleThemeColor =()=>{

    if (themeColor === 'light'){
      setThemeColor('dark');
    }
    else{
      setThemeColor('light')
    }
  }
  return (

    <div className={`flex  px-2 w-screen h-screen mainbg-${themeColor} items-center `} >

      <Navbar themeColor={themeColor} handleThemeColor={handleThemeColor}/>
      
 
      <Routes path="/" >
          <Route index element={<Home themeColor={themeColor}/>}/>
          <Route path="experience" element={<Experience themeColor={themeColor}/>}/>
          <Route path="skill"  element={<Skill themeColor={themeColor}/>}/>
          <Route path="projects" element={<Project themeColor={themeColor}/>}/>
          
      </Routes>

    </div>
   

  );
}

export default App;
