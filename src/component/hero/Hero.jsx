import React from 'react'
import './Hero.css'
import Header from '../header/Header'
import heart from '../../assets/heart.png'
import heroimg from '../../assets/hanuman.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calorie from '../../assets/calories.png'
import CountUp from 'react-countup';

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  const mobile =window.innerWidth<=768 ? true:false ;
  const transition ={type: "spring", duration: 3}
  return (
    <div className="hero" id='h'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>

            {/* THE BEST ADD */}
            <div className="the-best-ad">
              <motion.div
              initial={{left: mobile? "165px": '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition,type: 'tween'}}
              
              ></motion.div>
              <span>the best fitness club in the town</span>
            </div>
            {/* HERO HEADING */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>
            {/* Figures */}
            <div className="figures">
              <div>
                <span><CountUp end={40} start={10} prefix='+'></CountUp></span>
                <span>expert coaches</span>
              </div>
              <div>
                <span><CountUp end={978} start={800} prefix='+'></CountUp></span>
                <span>members joined</span>
              </div>
              <div>
                <span><CountUp end={50} start={0} prefix='+'></CountUp></span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* HERO BUTTONS */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        
        <div className="right-h">
          {/* HERO BUTTON */}
          
          <button className='btn'>
            <Link
            activeClass='active'
            to='join'
            spy={true}
            smooth={true}
            >Join Now</Link>
          </button>

          
          {/* HEART RATE */}
          <motion.div
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate </span>
            <span>116 bpm</span>
          </motion.div>
          {/* HERO IMAGE */}
          <img src={heroimg} alt="" className='hero-image'/>
          <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className='hero_image_back'/>
          {/* CALORIES */}
          <motion.div 
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          className="calories">
            <img src={calorie} alt="" />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>

        
    </div>
  )
}

export default Hero
