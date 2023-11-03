import React from 'react'
import './Reason.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
function Reason() {
  return (
    <div className='Reason' id='reason'>
     <div className='left-l'>
      <img src={img1} alt='.'></img>
      <img src={img2} alt='.'></img>
      <img src={img3} alt='.'></img>
      <img src={img4} alt='.'></img>
     </div>
     <div className='rigth-r'>
      <span>Some Reason</span>
      <div >
        <span className='stroke-text'>Why</span>
        <span>us?</span>
      </div>
      {/* details */}
      <div className='details'>
        <div>
          <img src={tick} alt=''></img><span>OVER 140+ Expert COACHS</span>
        </div>
        <div>
          <img src={tick} alt=''></img><span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt=''></img><span>FREE PROGRAM FOR MEN MEMBER</span>
        </div>
        <div>
          <img src={tick} alt=''></img><span>RELIABLE PARTNERS</span>
        </div>
        </div>
        <span style={{color:"var(--gray)", fontWeight:"normal"}}>Our Partners</span>
        <div className='partner'>
        <img src={nb} alt=''></img>
        <img src={adidas} alt=''></img>
        <img src={nike} alt=''></img>
        </div>
     </div>
    </div>
  )
}

export default Reason
