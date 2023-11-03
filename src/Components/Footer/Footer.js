import React from 'react'
import './Footer.css'
import git from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className='footer-main' id='footer'>
      <hr/>
      <div className='footer'>
        <div className='social-link'>
            <img src={git} alt=''></img>
            <img src={insta} alt=''></img>
            <img src={linkedin} alt=''></img>
        </div>
        <div className='logo'>
        <img src={logo} alt=''></img>
        </div>
      </div>
      <div className='blur blur-footer1'></div>
      <div className='blur blur-footer2'></div>
    </div>
  )
}

export default Footer
