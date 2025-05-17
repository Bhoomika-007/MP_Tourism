import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Location from './components/Body/Location/Location';
import Contact from './components/Body/Contact_us/Contact';
import Temples from './pages/Temples/Temples';
import { Route, Routes } from 'react-router-dom';
import TempleDetail from './data/TempleDetails/TempleDetails';

function App() {
  
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
          <Home/>
          <Location/>
          <Contact/>
        </>
      }/>
      <Route path='/Temples' element={<Temples/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="/Temples/:id" element={<TempleDetail />} />

    </Routes>
    <Footer/>
    {/* <Router>
      <Navbar/>
      <Home/>
      <Location/>
      <Contact/>
      <Footer/>
    </Router>
    <Routes>
       <Route path="/Temples" element={<Temples/>}/> 
    </Routes> */}
    </>
  )
}

export default App
