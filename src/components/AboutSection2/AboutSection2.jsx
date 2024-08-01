import React from 'react'
import './AboutSection2.css'

const aboutitems = [
    {itemcontent: 'Personal Information' , 
    content1: 'FULL NAME', content2: 'PHONE NUMBER', content3: 'EMAIL ADDRESS', content4: 'BVN' , content5: 'GENDER',
     continfo1: 'Grace Effiom', continfo2: '07060780922' , continfo3: 'grace@gmail.com', continfo4: '07060780922' , continfo5: 'Female', 
     contdetail1: 'MARITAL STATUS', contdetail2: 'CHILDREN', contdetail3: 'TYPE OF RESIDENCE', 
     cont1: 'Single', cont2: 'None', cont3: "Parent's Apartment" },
    {itemcontent: 'Education and Employment',
    content1: 'LEVEL OF EDUCATION', content2: 'EMPLOYMENT STATUS', content3: 'SECTOR OF EMPLOYMENT', content4: 'DURATION OF EMPLOYMENT' ,
     continfo1: 'B.Sc', continfo2: 'Employed' , continfo3: 'FinTech', continfo4: '2 years' , 
     contdetail1: 'OFFICE EMAIL', contdetail2: 'MONTHLY INCOME', contdetail3: 'LOAN REPAYMENT', 
     cont1: 'grace@lendsqr.com', cont2: '#200,000.00-#400,000.00', cont3: "40,000"}, 
    {itemcontent: 'Socials',  
     contdetail1: 'TWITTER', contdetail2: 'FACEBOOK', contdetail3: 'INSTAGRAM', 
     cont1: '@grace_effiom', cont2: 'Grace Effiom', cont3: "@grace_effiom"}, 
    {itemcontent: 'Guarantor',  
     contdetail1: 'FULL NAME', contdetail2: 'PHONE NUMBER', contdetail3: 'EMAIL ADDRESS', 
     cont1: 'Debby Ogana', cont2: '07060780922', cont3: "debby@gmail.com"}, 
    { contdetail1: 'FULL NAME', contdetail2: 'PHONE NUMBER', contdetail3: 'EMAIL ADDRESS', 
     cont1: 'Debby Ogana', cont2: '07060780922', cont3: "debby@gmail.com" ,},    
];
function AboutSection2() {
  return (
    <div className='about-section2-mainwrap'>
      <ul className='about-section2-ul'>
          {aboutitems.map((content,index) =>(
              <li key={index} className='about-section2-li'>
                  <p className='about-section2-darktxt'>{content.itemcontent}</p>
                  <div className='about-section2-first-wrap'>
                      <div>
                            <div >
                                <p className='about-section2-lightcolor'>{content.content1}</p> 
                                <p className='about-section2-smalltxt'>{content.continfo1}</p>
                            </div>
                            <div>
                                <p className='about-section2-lightcolor'>{content.contdetail1}</p>
                                <p className='about-section2-smalltxt'>{content.cont1}</p>  
                            </div>
                      </div>
                      <div>
                            <div>
                                    <p className='about-section2-lightcolor'>{content.content2}</p>
                                    <p className='about-section2-smalltxt'>{content.continfo2}</p>
                            </div>
                            <div>
                              <p className='about-section2-lightcolor'>{content.contdetail2}</p>
                              <p className='about-section2-smalltxt'>{content.cont2}</p>
                            </div>
                      </div>
                      <div>
                          <div>
                            <p className='about-section2-lightcolor'>{content.content3}</p>
                            <p className='about-section2-smalltxt'>{content.continfo3}</p>
                          </div>
                           <div>
                                <p className='about-section2-lightcolor'>{content.contdetail3}</p>
                                <p className='about-section2-smalltxt'>{content.cont3}</p>
                            </div>
                      </div>
                    <div>
                        <div>
                            <p className='about-section2-lightcolor'>{content.content4}</p>
                            <p className='about-section2-smalltxt'>{content.continfo4}</p>
                        </div>   
                    </div>
                    <div>
                        <div>
                            <p className='about-section2-lightcolor'>{content.content5}</p>
                            <p className='about-section2-smalltxt'>{content.continfo5}</p>
                        </div>
                    </div>
                </div>    
              </li>
          ))}
      </ul>
    </div>
  )
}

export default AboutSection2
