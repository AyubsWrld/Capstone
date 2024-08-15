import { useState } from 'react' ;  
import reactLogo from './assets/react.svg' ; 
import viteLogo from '/vite.svg' ;
import './App.css' ; 
import Hero from './components /Hero.jsx' ; 
import Header from './components /Header.jsx' ; 
import SectionTwo from './components /SectionTwo.jsx' ; 
import SectionThree from './components /SectionThree.jsx' ; 
import Footer from './components /Footer.jsx' ; 



function App() {


  return (
    <>
      <div className = 'Overarching'>
        <Header />
        <Hero />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    </>
  )
}

export default App
