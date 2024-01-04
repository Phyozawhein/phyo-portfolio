import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import {Routes, Route} from "react-router-dom";
import Layout from './pages/Layout/Layout';
import {React, useState} from 'react';
import './App.css';


function App() {
  const [themeColor,setThemeColor] = useState('light')
  
  const handleThemeColor =()=>{
    console.log(themeColor)
    if (themeColor === 'light'){
      setThemeColor('dark');
    }
    else{
      setThemeColor('light')
    }
  }
  return (
    <div className={`flex flex-row px-2 w-screen h-screen mainbg-${themeColor} items-center `} >

      <Navbar themeColor={themeColor} handleThemeColor={handleThemeColor}/>
      
 
      <Routes path="/" element={<Layout/>}>
          <Route index element={<Home themeColor={themeColor}/>}/>
          <Route path="experience" element={<div>Welcome to Experience page </div>}/>
          <Route path="skill"  element={<div>Welcome to Skill page </div>}/>
          <Route path="projects" element={<div>Welcome to Project page </div>}/>
      </Routes>
    </div>
  );
}

export default App;
