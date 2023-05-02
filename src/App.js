
import './App.scss';
import Home from './components/home/Home.js'
import Layout from './components/layout/Layout';
import Skills from './components/skills/Skills';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes >
        <Route path="/*" element={<Layout/>}>
          <Route index  element={<Home/>} />
          <Route exact path="skills" element={<Skills/>}/>
          {/* <Route exact path="bio" element={<Bio/>}/>
          <Route exact path="projects" element={<Projects/>}/>
          <Route exact path="contact" element={<Contact/>}/> */}
        
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
