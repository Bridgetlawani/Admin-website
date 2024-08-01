import React from 'react'
import userimg from '../../assets/Images/sideuser.svg'
import star1 from '../../assets/Images/star1.svg'
import star2 from '../../assets/Images/star2.svg'

function AboutSection1() {
  return (
    <div>
      <div className='side1-div'>
        <div className='side2-div'> 
          <img src={userimg} alt='userimage' className='user-side-img'/>
          <div>
            <p className='providus-txt'>Grace Effiom</p>
            <p>LSGFf587g90</p>
          </div>
          <hr/>
          <div className='side3-div'>
            <p>User's Tier</p>
            <div>
              <img src={star1} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
            </div>
          </div>
          <hr/>
          <div className='providus-div'>
            <p className='providus-txt'>#200,000.00</p>
            <p>991234678/Providus Bank</p>
          </div>
        </div>
        <div className='general-wrap'>
          <p className='green-txt'>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection1
