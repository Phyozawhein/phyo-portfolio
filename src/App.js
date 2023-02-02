
import './App.css';
import Home from './components/home/Home.js'
import Layout from './components/layout/Layout';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
