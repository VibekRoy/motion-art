import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'

const Wand = () => {
  return (
    <div className='wand'>
        <div className='wand-left'>
            <p className='wand-head'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            <p className='wand-content'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <div className='wand-button-parent'>
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
            <div className='wand-button'>
              Purchase From Envato<GoArrowRight size={"25px"}/>
            </div>
            </a>
            </div>
            
        </div>
        
        <div className='wand-right'>
        <img src="../src/assets/motionarteffect-img5.png" alt="wand-image" style={{height:"250px"}} />
        </div>
            
        
    </div>
  )
}

export default Wand