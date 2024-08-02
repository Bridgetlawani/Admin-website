import React from 'react'
import './FilterSection.css'
import { FaUserSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaAngleDown } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';


const FilterSection = () => {
  return (
    <div>
       {/* <div className='filtersection2'>
            <p> <FaRegEye/> View Details </p>
            <p> <FaUserSlash/> Blacklist User</p>
            <p> <FaUserCheck/> Activate User </p>
        </div> */}
      {/* <img src={bars} onClick={handleClick}/> */}
       <div className='filtersection1'>
           <label htmlFor='select-org'>Organization</label>         
            <input type='text' placeholder='select' className='filter-int' id='select-org'/>
            <span> <FaAngleDown className='span-filter'/> </span>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='User'  className='filter-int' id='username'/>
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='Email'  className='filter-int' id='email'/>
            <label htmlFor='date'>Date</label>       
            <input type='text' placeholder='Date' className='filter-int' id='date' /> 
            <span><FaCalendarAlt className='span-filter'/>  </span>                                                      
            <label htmlFor='phonenumber'>Phone Number</label>
            <input type='text' placeholder='Phone Number'  className='filter-int' id='phonenumber'/>
            <label htmlFor='status'>Staus</label>
            <input type='text' placeholder='select'  className='filter-int' id='status'/> <span> <FaAngleDown className='span-filter'/> </span>
            <br/>
            <input type='submit' value='Reset' className='reset'/>
            <input type='submit' value='Filter' className='reset2-btn'/>
       </div> 
      

    </div>
  )
}

export default FilterSection
