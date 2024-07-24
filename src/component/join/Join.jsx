import React from 'react'
import './Join.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import location from '../../assets/location.png'




const Join = () => {
  var path = "M 0 50 Q 300 50 530 50";
  var finalpath = "M 0 50 Q 300 50 530 50";

  const move = (dets)=>{
    path=`M 10 80 Q ${dets.nativeEvent.x} ${dets.nativeEvent.y} 600 80`
    useGSAP(gsap.to("svg path",{
      attr: { d: path}
      }))
  }

  const leave = ()=>{
    
    useGSAP( gsap.to("svg path",{
      attr: { d: finalpath},
      duration:1.5,
      ease:"elastic.out(1,0.2)"
  }))
  }
  
    
  return (
    <div className='join' id='join'>
      <div className="left-j">
        <div className="string">
          <svg width="550" height="100" onMouseMove={move} onMouseLeave={leave}>
              <path d="M 0 50 Q 300 50 530 50" stroke="orange" strokeWidth="2"  fill="transparent" />
          </svg>
        </div>
        <div>
            <span className='stroke-text'>READY</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
    <div className="right-j">
      
        {/* <form action="" className='email-container'>
            <input type="text"  id="" placeholder='Enter Your Name' />
            <input type="number"  id="" placeholder='Enter Your Mobile No.' />
            <button className="btn btn-j">Join Now</button>
        </form> */}
        <div className="contact">
          <div>Contact Us On</div>
          <div>
            <span>Email: jaiparshuram@gmail.com</span>
            <span>Mob No: +91 7987345XXX</span>
            <div className='location-div'>
              <span>Add: Vyas Colony, Barnagar </span>
              <a href="https://www.google.com/maps/place/Jai+Parashuram+New+Generation+Gym/@23.0451095,75.3697313,17z/data=!3m1!4b1!4m6!3m5!1s0x3963bfd3ac2b20a9:0xe5d7321af4c3fbd2!8m2!3d23.0451095!4d75.3723062!16s%2Fg%2F11v66tvvj2?entry=ttu"><img src={location} alt="" style={{width:"30px"}}/>
              <sub className='sub'>click to get location</sub>
              </a>
            </div>
          </div>
          
        </div>
    </div>

    </div>
  )
}

export default Join
