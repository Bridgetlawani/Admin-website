import React from 'react'
import './UserInformation.css'
import doticon from '../../assets/Images/icon.svg'
import bars from '../../assets/Images/bars.svg'


const userinfo = [
    {companyname: 'Lendsqr', username: 'Adedeji' , email: 'adedeji@lendsqr.com', phonenumber: '08078903721', date: 'May 15, 2020 10:am', status: 'Inactive' , image: doticon , classname: 'inactive' },
    {companyname: 'Irorun', username: 'Debby Ogana' , email: 'debby2@irorun.com', phonenumber: '08160780928', date: 'April 30, 2020 10:am', status: 'Pending' , image: doticon, classname: 'pending' },
    {companyname: 'Lendsqr', username: 'Grace Effiom' , email: 'grace@lendsqr.com', phonenumber: '07060780922', date: 'April 30, 2020 10:am', status: 'Blacklisted', image: doticon, classname: 'blacklisted' },
    {companyname: 'Lendsqr', username: 'Tosin Dokunmu' , email: 'tosin@lendsqr.com', phonenumber: '07003309226', date: 'April 10, 2020 10:am', status: 'Pending', image: doticon, classname: 'pending'  },
    {companyname: 'Lendsqr', username: 'Grace Effiom' , email: 'grace@lendsqr.com', phonenumber: '07060780922', date: 'April 30, 2020 10:am', status: 'Active' , image: doticon, classname: 'active' },
    {companyname: 'Lendsqr', username: 'Tosin Dokunmu' , email: 'tosin@lendsqr.com', phonenumber: '08060780900', date: 'April 10, 2020 10:am', status: 'Active', image: doticon ,classname: 'active' },
    {companyname: 'Lendsqr', username: 'Grace Effiom' , email: 'grace@lendsqr.com', phonenumber: '07060780922', date: 'April 30, 2020 10:am', status: 'Blacklisted', image: doticon , classname: 'blacklisted'  },
    {companyname: 'Lendsqr', username: 'Tosin Dokunmu' , email: 'tosin@lendsqr.com', phonenumber: '08060780900', date: 'April 10, 2020 10:am', status: 'Inactive' , image: doticon ,classname: 'inactive' },
    {companyname: 'Lendsqr', username: 'Grace Effiom' , email: 'adedeji@lendsqr.com', phonenumber: '07060780922', date: 'April 30, 2020 10:am', status: 'Inactive', image: doticon , classname: 'inactive' },
];

function UserInformation() {
  return (
    <div className='user-info-container'>
      <ul className='user-info-ul'>
          <li className='user-info-head'>ORGANIZATION <span><img src={bars} /></span></li>
          <li className='user-info-head special'>USERNAME <span><img src={bars}/></span></li>
          <li className='user-info-head'>EMAIL <span><img src={bars}/></span></li>
          <li className='user-info-head'>PHONE NUMBER <span><img src={bars}/></span></li>
          <li className='user-info-head'>DATE JOINED <span><img src={bars}/></span></li>
          <li className='user-info-head'>STATUS <span><img src={bars}/></span></li>
      </ul>
      <ul className='user-info-ul'>
          {userinfo.map((info, index) => (
              <li key={index} className='user-info-li'>
                  <p className='text-line'>{info.companyname}</p>
                  <p className='text-line'>{info.username}</p>
                  <p className='text-line'>{info.email}</p>
                  <p className='text-line'>{info.phonenumber}</p>
                  <p className='text-line'>{info.date}</p>
                  <p className={info.classname}>{info.status}</p>
                  <img src={info.image}/>
              </li>
              
          ))}
      </ul>
      
    </div>
  )
}

export default UserInformation
