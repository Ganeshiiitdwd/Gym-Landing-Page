import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import Wtick from '../../assets/whiteTick.png'
function Plans() {
  return (
    <div className='plans' id='plans'>
      <div className='blur blur-plan1'></div>
      <div className='blur blur-plan2'></div>
    <div className='plan-header'>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>
    <div className='plans-data'>
   {plansData.map((e,i)=>(
    <div className='plan' key={i}>
        {e.icon}
        <span>{e.name}</span><span>$ {e.price}</span>
        <div className='features-all'> 
            {e.features.map((f,i)=>(
                <div className='feature' key={i} >
              <img src={Wtick} alt='' ></img>
              <span key={i}> {f}</span> 
              </div> 
            ))}
        </div>
        <div>
            <span>See more benefits</span>
             </div>
             <button className='btn'>Join Now</button>
    </div>
   ))}
    </div>
    </div>
  )
}

export default Plans
