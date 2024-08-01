import React from 'react'
import './UserDetails.css'
import userimg1 from '../../assets/Images/imageuser.svg'
import userimg2 from '../../assets/Images/imageuser2.svg'
import userimg3 from '../../assets/Images/imageuser3.svg'
import userimg4 from '../../assets/Images/imageuser4.svg'

const userbox = [
  {imagebox: userimg1, name:'USERS', useramount: '2,453', className: 'image1' },
  {imagebox: userimg2, name:'ACTIVE USERS', useramount: '2,453', className: 'image2' },
  {imagebox: userimg3, name:'USERS WITH LOANS', useramount: '12,453', className: 'image3' },
  {imagebox: userimg4, name:'USERS WITH SAVINGS', useramount: '102,453', className: 'image4' },
];
function UserDetails() {
  return (
    <div className='users-container'>
      <ul>
        {userbox.map((user, index) => (
          <li key={index}> <img src={user.imagebox} className={user.className}/> <p className='usercontainer-text'>{user.name}</p> <span className='user-container-number'>{user.useramount}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails
