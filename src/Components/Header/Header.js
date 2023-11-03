import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import threeLine from '../../assets/bars.png'
import { Link } from 'react-scroll'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
// this link is imported form the react-scroll this make easier to go to the div with the help of its id
//the additional function like span and smooth add additional slower effect to reach the required div
function Header() {
  const mobile=window.innerWidth<=768?true:false
  const [open, setopen]=useState(false)
  return (
    <div className='header'>
     <img src={Logo} alt='..' className='logo'></img>
     
      <ul className='element'>
      <li onClick={()=>{setopen(false)}}>Home</li>
      <li ><Link onClick={()=>{setopen(false)}} to='program'  span={true} smooth={true}>Programs</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='reason'  span={true} smooth={true}>Why us</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='plans' span={true} smooth={true}>Plans</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='testimonial' span={true} smooth={true}>Testimonials</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='footer' span={true} smooth={true}>About us</Link></li>
   </ul>
   <div className={`gym-temp-cont ${open?'gym-adjust':''}`} >
     {open?<RiCloseLine color="#fff" size={27} onClick={() => setopen(false)}/>:<RiMenu3Line color="#fff" size={27} onClick={() => setopen(true)}/>}
    
   { open&&(<div className="gym-elements" >
    <li >Home</li>
      <li ><Link onClick={()=>{setopen(false)}} to='program'  span={true} smooth={true}>Programs</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='reason'  span={true} smooth={true}>Why us</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='plans' span={true} smooth={true}>Plans</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='testimonial' span={true} smooth={true}>Testimonials</Link></li>
      <li ><Link onClick={()=>{setopen(false)}} to='footer' span={true} smooth={true}>About us</Link></li>
    </div>)}
     </div>
    
    </div>
  )
}

export default Header
