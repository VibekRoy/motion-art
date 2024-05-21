import React from 'react'

const Application = () => {
  return (
    <div className='app'>
        <div className='app-header'>Apply On Any Section Or Enable For Whole Page</div>
        <div className='apply-sections'>
            <div className='applyonsection'>
                <p className='applyonsection-header'>Apply On Section</p>
                <p className='applyonsection-content'>Apply on a section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
                <img src="../src/assets/motionarteffect-img11.png" alt="apply-on-section" />
            </div>
            <div className='applyonpage'>
                <p className='applyonsection-header'>Apply On Page</p>
                <p className='applyonsection-content'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                <img src="../src/assets/motionarteffect-img10.png" alt="apply-on-page" />
            </div>
        </div>
    </div>
  )
}

export default Application