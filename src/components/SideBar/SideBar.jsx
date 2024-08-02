import React from 'react'
import './SideBar.css'
import arrow from '../../assets/Images/arrow.svg'
import account from '../../assets/Images/account.svg'
import audit from '../../assets/Images/audit.svg'
import board from '../../assets/Images/board.svg'
import charges from '../../assets/Images/charges.svg'
import fees from '../../assets/Images/fees.svg'
import guarantor from '../../assets/Images/guarantor.svg'
import karma from '../../assets/Images/karma.svg'
import models from '../../assets/Images/models.svg'
import loanrequest from '../../assets/Images/loan-request.svg'
import loan from '../../assets/Images/loan.svg'
import organization from '../../assets/Images/organization.svg'
import preference from '../../assets/Images/preferences.svg'
import products from '../../assets/Images/products.svg'
import reports from '../../assets/Images/reports.svg'
import savings from '../../assets/Images/savings.svg'
import services from '../../assets/Images/services.svg'
import settle from '../../assets/Images/settlements.svg'
import switchs from '../../assets/Images/switch.svg'
import transaction from '../../assets/Images/transactions.svg'
import users from '../../assets/Images/users.svg'
import whitelist from '../../assets/Images/whitelist.svg'
import UserDetails from '../UserDetails/UserDetails'
import UserInformation from '../UserInformation/UserInformation'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import FilterSection from '../FilterSection/FilterSection'

const items = [
  {   img1: switchs, itemname: 'Switch Organization', img2: arrow,},
  {img1: board, itemname: 'Dashboard',},
  {itemname: 'CUSTOMERS',},
  {img1: users, itemname: 'Users', classname: 'specialuser'},
  {img1: guarantor, itemname: 'Guarantors',},
  {img1: loan, itemname: 'Loans',},
  {img1: models, itemname: 'Decision Models',},
  {img1: savings, itemname: 'Savings',},
  {img1: savings, itemname: 'Savings',},
  {img1: loanrequest, itemname: 'Loan Requests',},
  {img1: whitelist, itemname: 'Whitelist',},
  {img1: karma, itemname: 'Karma',},
  {itemname: 'BUSINESSES'},
  {img1: organization,itemname: 'Organization',},
  {img1: loanrequest, itemname: 'Loan Products',},
  {img1: products, itemname: 'Savings Products',},
  {img1: charges, itemname: 'Fees and Charges',},
  {img1: transaction, itemname: 'Transactions',},
  {img1: services, itemname: 'Services',},
  {img1: account, itemname: 'Service Account',},
  {img1: settle, itemname: 'Settlements',},
  {img1: reports, itemname: 'Reports',},
  {itemname: 'SETTINGS',},
  {img1: preference, itemname: 'Preferences',},
  {img1: fees, itemname: 'Fees and Pricing',},
  {img1: audit, itemname: 'Audit Logs',},
];
const handleClick = () => {
  let show = document.getElementById("filtershow");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
function SideBar() {
return (
  <div className='Sidebar-wrap'>
    <ul className='sidebar-wrap-ul'>
      {items.map((item, index) =>(
        <li key={index} className={item.classname}><img src={item.img1} /> {item.itemname} <img src={item.img2} /> </li>
      ))}
    </ul>
    <div className='dashboard-details'>
      <h2 className='user-heading' >Users</h2>
      <div className='user-box'>
          <UserDetails/>
      </div>
      <div>
        <UserInformation/>
      </div>
            <div className='bottom-div'>
                <div>
                    <p className='text-line'>Showing <mark>100 < FaAngleDown onClick={handleClick}/> </mark> out of 100</p>
                </div>
                <div>
                    <p className='text-line'> <mark><FaAngleLeft/> </mark> 1 2 3 ... 15 16 <mark><FaAngleRight/> </mark> </p>
                </div>
            </div>
            <div id='filtershow'>
              <FilterSection/>
            </div>
    </div>
    
  </div>
)
      }
export default SideBar