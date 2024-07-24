import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/insta.png'
import logo from '../../assets/logo.png'






const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <span><a href="https://github.com/Garvithindoliya16">
                <img src={github} alt="" /></a>
            </span>
            <span><a href="https://www.instagram.com/jaiparshuramgym2/">
            <img src={insta} alt="" />
            </a>
            </span>
        </div>
        <div className='footer-name' >
            <span><img src={logo} alt=""/></span>
            <div>
              <span>जय परशुराम </span>
              <span>हेल्थ क्लब</span>
            </div>
        </div>
        
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>

    </div>
  )
}

export default Footer
