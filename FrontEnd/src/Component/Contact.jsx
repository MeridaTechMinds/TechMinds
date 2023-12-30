import { KeyboardArrowRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import TitleBanner from './TitleBanner'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const Contact = () => {
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
    useEffect(()=>{
      setanime("animate__fadeIn");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
    },[])
  return (
    <section id='' className={`${anime} animate__animated transi durationani `}>
      <MiniNav/>
        <LogoNav/>
        <MainNav/>
       <TitleBanner data={"Contact"}/>
        {/* Contact form */}
        <div className=' py-20 bg-slate-100'>
          <Row className='container flex justify-around mx-auto'>
            <Col lg={4} className='p-3'>
              <p className='text-violet-700 text-lg fw-semibold'>Contact</p>
              <p className='text-5xl fw-semibold'>Contact us
for Top-Notch Service.</p>
<button id='three-rounded' className='px-4  btn-change text-white fw-semibold p-3 bg-violet-700'>
                  Our Locations
       </button>
            </Col>
            <Col lg={3} className='bg-white shadow-2xl rounded-3xl'>
            <div className='px-3 mt-3 flex border-bottom justify-between'>
                    <div>
                      <p className='fw-semibold text-2xl'>Support</p>
                      <p className='text-lg text-slate-500'>From our expert team</p>
                    </div>
                    <img className="w-16 h-16 mt-auto" src={require("../assest/talk.png")} alt="" />
              </div>
              <div id='phone' className='flex mt-3'>
              <img className='w-12 h-12' src={require("../assest/call.png")} alt="" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>PHONE</p>
                     <p className='text-slate-600'>
                      Finance: <span className='cursor-pointer'> 800.98.76.5432 </span>
                     </p>
                     <p className='text-slate-600'>
Operation: <span className='cursor-pointer'> (+41)-888.22.333 </span>
                     </p>
                 </div>
              </div>
              <div id='email' className='flex'>
              <img className='w-12 h-12' src={require("../assest/open.png")} alt="" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>EMAIL</p>
                     <p className='text-slate-600 cursor-pointer'>
                      info@gmail.com
                     </p>
                    
                 </div>
              </div>
            </Col>
            <Col lg={3} className='bg-white shadow-2xl rounded-3xl'>
             
            <div className='px-3 mt-3 flex border-bottom justify-between'>
                    <div>
                      <p className='fw-semibold text-2xl'>Address</p>
                      <p className='text-lg text-slate-500'>To visit our company</p>
                    </div>
                    <img className="w-20 h-20 mt-auto" src={require("../assest/smart-city (1).png")} alt="" />
              </div>
              <div id='phone' className='flex mt-3'>
              <img className='w-12 h-12' src={require("../assest/address.png")} alt="" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>ADDRESS</p>
                     <p className='text-slate-600'>
                     280 Granite Run Drive Suite
Hobert, LA 90010, USA.
                     </p>
                 </div>
              </div>
              <div id='email' className='flex'>
              <img className='w-12 h-12' src={require("../assest/time.png")} alt="" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>OFF.HOURS</p>
                     <p className='text-slate-600 cursor-pointer'>
                      MON - SAT: 9am - 6pm
                     </p>
                    
                 </div>
              </div>
            </Col>
          </Row>

        </div>
        {/* Form */}
        <div className=''>
           <Row className='container flex justify-between flex-col flex-lg-row rounded-3xl bg-slate-900 p-4 py-20 mx-auto'>
            <Col lg={4}>
              <p className='text-pink-700 fw-semibold'>DROP A LINE</p>
              <p className='text-5xl fw-semibold text-white'>Let’s Talk!...
Send Your Message</p>
              <p className='text-slate-400 text-lg'>Fill in the form and let us know what you need.</p>
            </Col>
            <Col lg={5} className='mx-auto'>
              <form action="">
                <div id='name' 
                className='text-white justify-between flex flex-col md:flex-row fw-semibold'>
                   <div>
                   First Name
                   <input required  type="text" 
                   className='p-3 text-slate-500 focus:border-none w-full md:w-auto block mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your first name' />
                   </div>
                   <div>
                   Last Name
                   <input required  type="text" 
                   className='p-3 text-slate-500 focus:border-none w-full md:w-auto block mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your last name' />
                   </div>
                   
                </div>
                <div id='name' className='text-white flex flex-col md:flex-row justify-between fw-semibold'>
                   <div>
                   Company
                   <input required  type="text" 
                   className='p-3 text-slate-500 focus:border-none block w-full md:w-auto mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your Company name' />
                   </div>
                   <div>
                   Phone
                   <input required  type="text" 
                   className='p-3 text-slate-500 focus:border-none block  w-full md:w-auto mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Phone num' />
                   </div>
                   
                </div>
                <div className='text-white'>
                   Email Address 
                   <input required  type="text" 
                   className='p-3 text-slate-500 focus:border-none w-full block mt-4 rounded-s-2xl bg-inherit border-2
                    border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your Address' />
                   </div>
                   <div className='text-white'>Are you interested in?
                   <select name="" id="selectdrop"
                   
                        className=' p-3 text-slate-500 focus:border-none border-2 focus:outline-none border-slate-500 w-full  cursor-pointer block bg-inherit  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-pink-600'>
                            <option value="Risk Management">Risk Management</option>
                            
                            <option value="Traditional consulting"> Traditional consulting</option>
                            <option value="Portfolio Management"> Portfolio Management</option>
                            <option value="Asset Allocation">Asset Allocation</option>

                        </select>
                      </div>
                      <div className='text-white'>
                        Message
                        <textarea name="Message" placeholder='Message'
                        className='p-3 block focus:border-none bg-inherit focus:outline-none w-full border-2 border-slate-600  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-pink-600 '
                         id="" cols="20" rows="5">

                        </textarea>
                        <div className='text-slate-400'> 
                        <input type="checkbox" className='cursor-pointer w-[50px]'/>
                        Click here to confirm you have read our privacy policy*
                        </div>
                      </div>
                      <button id='three-rounded' className='px-4 my-5 btn-change text-white fw-semibold p-3 bg-violet-700'>
                  Send Message
       </button>
              </form>
            </Col>
           </Row>
        </div>
        <ContactLanding/>
        </section>
  )
}

export default Contact