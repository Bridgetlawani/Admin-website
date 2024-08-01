import React from 'react'
import './AboutUser.css'
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
import logout from '../../assets/Images/logout.svg'
import sidearrow from '../../assets/Images/sidearrow.svg'
import AboutSection1 from '../AboutSection1/AboutSection1'
import AboutSection2 from '../AboutSection2/AboutSection2'
const items = [
  {   img1: switchs, itemname: 'Switch Organization', img2: arrow,},
  {img1: board, itemname: 'Dashboard',},
  {itemname: 'CUSTOMERS',},
  {img1: users, itemname: 'Users',},
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
  {img1: logout, itemname: 'Logout',},
  { itemname: 'v1.2.0',},
];


function AboutUser() {
  return (
    <div className='about-user-wrap'>
        <ul className='about-user-wrap-ul'>
        {items.map((item, index) =>(
            <li key={index} className='about-user-wrap-li'><img src={item.img1} /> {item.itemname} <img src={item.img2} /> 
            </li>
        ))}
        </ul>
        <div className='about-user-details'>
            <p><img src={sidearrow}/> <span className='aboutuser-span'>Back to Users</span></p>
            <div className='about-user1-container'>
                <h2 className='about-user-h2'>User Details</h2>
                <div>
                    <button className='about-user-btn1'>Blacklist User</button>
                    <button className='about-user-btn2'>Activate User</button>
                </div>
            </div>
            <div> <AboutSection1/> </div>
            <div className='about-section2-div'> <AboutSection2/> </div>   
        </div>
    </div>
  )
}

export default AboutUser
