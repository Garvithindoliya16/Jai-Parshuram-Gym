import React from 'react'
import './Reasons.css'
import image1 from '../../assets/anubhav2.jpg'
import image2 from '../../assets/prateek.jpg'
import image3 from '../../assets/harshit.jpg'
import image4 from '../../assets/betu.jpg'
import bullet from '../../assets/listBullet.png'
import NB from '../../assets/NB.png'
import adidas from '../../assets/adidas.png'
import puma from '../../assets/puma.png'


const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>
            <div>
                <div>
                    <img src={bullet} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={bullet} alt="" />
                    <span>OVER 40+ EXPERT COACHES</span>
                </div>
                <div>
                    <img src={bullet} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={bullet} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <div>
                <div className='partner'>OUR PARTNERS</div>
                <div className='partner-img-div'>
                    <img src={NB} alt="" />
                    <img src={adidas} alt="" />
                    <img src={puma} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons
