import React, { useRef } from 'react'
import './Join.css'
// import emailjs from '@emailjs/browser'
function Join() {
    const form=useRef();
   
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
  return (
    <div className='join-main' id='JOIN-US'>
        <div className='left-j'>
            <hr></hr>
            <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US</span>
            </div>
        </div>
      <div className='right-j'>
        <form action='' className='email-container' ref={form}  >
            <input type='email' name='usser-email' placeholder='Enter your emial address'></input>
            <button className='btn'>Join Now</button>
  </form>
      </div>
    </div>
  )
}

export default Join
