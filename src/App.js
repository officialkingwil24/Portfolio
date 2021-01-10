import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact'

function App(){
  return(
    <div className="App">
      <NavBar/>
        <div className="container">
        
          <LandingPage/>
          <About/>
          <Skills/>
          <Education/>
          <Portfolio/>
          <Resume/>
          <Contact/>
    </div>
  </div>
  );
}
export default App;