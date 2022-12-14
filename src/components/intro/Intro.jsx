import React from 'react'
import Typical from 'react-typical'
import './intro.scss'

export default function Intro() {
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
<div className="imgContainer">
  <img src="assests/man.jpg" alt="" />
</div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bishal Shrees</h1>
          <h3><Typical
        steps={['React Developer', 1000, 'Fronted Developer', 1000, 'Web Developer',1000 ]}
        loop={Infinity}
        wrapper="b"
      />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>

      </div>
    </div> 
  )
}
