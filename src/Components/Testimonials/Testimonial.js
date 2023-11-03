import React, { useState } from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import larrow from '../../assets/leftArrow.png'
import rarrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
function Testimonial() {
  const transition={type:'spring',duration:3}
    const[selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;
    const dynamicChangeHandler=()=>{
      selected===0?setSelected(tLength-1):setSelected((prev)=>prev-1);
    }
    const dynamicChangeHandler2=()=>{
        selected===tLength-1?setSelected(0):setSelected((prev)=>prev+1);
      }
  return (
    <div className='Testy' id='testimonial'>
     <div className='left-t'>
        <span>Testimonial</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}

        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>right-
        <span style={{color:'var(--orange)'}}>
            {testimonialsData[selected].name}
        </span>{" "}
        -{testimonialsData[selected].status}
        </span>
     </div>
     <div className='right-t'>
        {/* div for a gradient effect i.e background */}
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1, x:0}}
        ></motion.div>
        <motion.div
          initial={{opacity:0,x:100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1, x:0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt=''></motion.img>
        <div className='arrow'>
            <img src={larrow} alt='' onClick={dynamicChangeHandler} />
            <img src={rarrow} alt='' onClick={dynamicChangeHandler2}/>
        </div>
     </div>
    </div>
  ) 
}

export default Testimonial
