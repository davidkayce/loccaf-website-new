import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutLOCCAF from './pages/AboutLOCCAF';
import Sundays from './pages/Sundays';
import About from './pages/About';
import Serve from './pages/Serve';
import Baptism from './pages/Baptism';
import Prayer from './pages/Prayer';
import Outreach from './pages/Outreach';
import Contact from './pages/Contact';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutLOCCAF/>}/>
        <Route path='/us' element={<About/>}/>
        {/* <Route path='/serve' element={<Serve/>}/>
        <Route path='/baptism' element={<Baptism/>}/>
        <Route path='/prayer-request' element={<Prayer/>}/>
        <Route path='/outreach' element={<Outreach/>}/>
        <Route path='/contact' element={<Contact/>}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
