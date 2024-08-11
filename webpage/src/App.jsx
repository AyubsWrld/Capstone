import { useState } from 'react' ;  
import reactLogo from './assets/react.svg' ; 
import viteLogo from '/vite.svg' ;
import './App.css' ; 
import Hero from './components /Hero.jsx' ; 
import Header from './components /Header.jsx' ; 

function App() {


  return (
    <>
      <div className = 'Overarching'>
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
