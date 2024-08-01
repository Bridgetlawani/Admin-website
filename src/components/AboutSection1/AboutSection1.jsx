import React from 'react'
import userimg from '../../assets/Images/sideuser.svg'
import star1 from '../../assets/Images/star1.svg'
import star2 from '../../assets/Images/star2.svg'
import './AboutSection1.css'

function AboutSection1() {
  return (
    
    <div className='aboutsection1-wrap'>
        <div className='aboutsection1-firstcontainer'> 
          <img src={userimg} alt='userimage' className='user-side-img'/>
          <div>
            <p className='about-section1-darktxt'>Grace Effiom</p>
            <p className='about-section1-light-weight'>LSGFf587g90</p>
          </div>
          <hr/>
          <div className='side3-div'>
            <p className='about-section1-usertier-txt'>User's Tier</p>
            <div>
              <img src={star1} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
            </div>
          </div>
          <hr/>
          <div className='providus-div'>
            <p className='about-section1-darktxt'>#200,000.00</p>
            <p className='about-section1-light-weight'>991234678/Providus Bank</p>
          </div>
        </div>
        <div className='aboutsection1-second-div'>
          <p className='green-txt'>General Details</p>
          <p className='aboutsection1-normaltxt'> Documents</p>
          <p  className='aboutsection1-normaltxt'>Bank Details</p>
          <p  className='aboutsection1-normaltxt'>Loans</p>
          <p  className='aboutsection1-normaltxt'>Savings</p>
          <p  className='aboutsection1-normaltxt'>App and System</p>
        </div>
    </div>
    
  )
}

export default AboutSection1
