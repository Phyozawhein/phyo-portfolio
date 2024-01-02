import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Layout from './pages/Layout/Layout';
import {React, useState} from 'react';
import './App.css';


function App() {
  const [themeColor,setThemeColor] = useState('light')
  
  return (
    <div className={`flex flex-row p-5 w-screen h-screen mainbg-${themeColor} justify-between`} >

        <nav>
          <Navbar themeColor={themeColor}/>
        </nav>
 
      <Routes path="/" element={<Layout/>}>
          <Route index element={<div>Welcome to Home page </div>}/>
      </Routes>
    </div>
  );
}

export default App;
