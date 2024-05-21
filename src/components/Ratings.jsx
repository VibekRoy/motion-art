import React from 'react'

const Ratings = () => {
  return (
    <div id='Ratings-container'>
        <div className='Ratings-header'>Trusted by thousands of users around the world</div>
        <div className='Ratings'>
            <div className="Rating-Box">
                <img className='review-logo' src="../src/assets/motionarteffect-img2.png" alt="img2"/>
                <div className='stars'>
                    <img src="../src/assets/motionarteffect-img4.png" alt="img4"/>
                    <p>4.5 Score, 9 Reviews</p>
                </div>
                
            </div>

            <div className="Rating-Box">
                <img className='review-logo' src="../src/assets/motionarteffect-img1.png" alt="img1"/>
                <div className='stars'>
                    <img src="../src/assets/motionarteffect-img4.png" alt="img4"/>
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>

            <div className="Rating-Box">
                <img className='review-logo' src="../src/assets/motionarteffect-img3.png" alt="img3"/>
                <div className='stars'>
                    <img src="../src/assets/motionarteffect-img4.png" alt="img4"/>
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ratings