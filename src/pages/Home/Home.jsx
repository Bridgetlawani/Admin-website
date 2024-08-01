import React from 'react'
import './Home.css'
import image1 from '../../assets/Images/image.svg'
import logo from '../../assets/Images/logo.svg'

function Home() {
  return (
    <div>
          <div className='logo-div'>
            <img src={logo} alt='logo' className='logo-img'/>
            <p className='logo-text'>lendsqr</p>
          </div>
          <div className='info-wrapper'>
            <img src={image1} alt='image1' className='image'/>
            <div className='form-box'>
                <h1>Welcome!</h1>
                <p className='paragraph1'>Enter details to login</p>
                <label>
                <input 
                type="email"
                placeholder='Email' />

                </label>
                
                <label> 
                    <input type="password"
                        name='password'
                        placeholder='Password' /> <span className='show-txt'>SHOW</span>
                </label>
                <p className='paragraph2'>FORGOT PASSWORD?</p>
                
                <button type='submit' className='info-button'>Login
                    
                </button> 
                    
            </div> 
          
        </div>
    </div>
  )
}

export default Home
