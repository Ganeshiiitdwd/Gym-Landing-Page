import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import rArrow from '../../assets/rightArrow.png'
function Program() {
  return (
    <div className='program' id='program'>
     <div className='program-header'>
        <span className='stroke-text'>Explore our</span>
        <span >Progams</span>
        <span className='stroke-text'>to shape you</span>
     </div>
     <div className='program-category'>
        {programsData.map((p)=>(
            <div className='category'>
                {p.image}
                <span>{p.heading}</span>
                <span>{p.details}</span>
                <div className='join'>
                    <span>Join Now</span>
                    <img src={rArrow} alt='.' ></img>
                </div>
            </div>
        ))}
     </div>
    </div>
  )
}

export default Program
