import React from 'react' ;
import './SectionThree.css' ; 



export default function SectionThree(){
  return(
  <>
      <div className='section-three-container'>
        <div className='description'>

          <p className='text'>
            Lorem Ipsum is simply dummy
          </p>

          <p className='subtext'>
            Welcome to Burger Bliss, where we take your cravings to a whole new level! Our <br/>
            mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
          </p>

        </div>

        <div className='image-container'>

          <div className='image' id='left'>
          </div>
          
          <div className='image' id='right'>
          </div>

        </div>
      </div>
  </>
  )
};
