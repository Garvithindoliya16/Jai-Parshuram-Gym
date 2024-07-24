import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'




const Testimonials = () => {
    const transition = {type: "spring", duration: 3};
    const [selected,setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="testimonial">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>what they </span>
            <span>say about us</span>
            <span>{testimonialsData[selected].review}</span>
            <span style={{whiteSpace:"nowrap"}}>
                <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span> 
                <span className='testo-status'>- {testimonialsData[selected].status}</span>
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows" style={{display:"flex"}}>
                <img 
                onClick={()=>{
                  selected ===0
                  ? setSelected(tLength-1)
                  : setSelected((prev)=> prev-1)
                }}
                src={leftArrow} alt="" />
                <img 
                onClick={()=>{
                  selected === tLength-1 
                  ? setSelected(0)
                  : setSelected((prev)=> prev+1)
                }}
                src={rightArrow} alt="" />
             </div>
        </div>
    </div>
  )
}

export default Testimonials
