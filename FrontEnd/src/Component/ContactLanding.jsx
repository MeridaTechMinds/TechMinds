import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ContactLanding = () => {
   let cp= "(OPC) Pvt.Ltd"
  return (
    <div>
        
        
       {/* Copyright */}
       <Container>
        <div className='h-10'></div>
          <Row className=''>
            <Col lg={6}>
              <img width={130} src={require("../assest/png-01.png")} alt="" />
              <p className='my-3 text-lg fw-semibold'>
              Copyright © 2023 
              <Link className='text-clr text-decoration-none'><span className='hover:underline fw-semibold text-lg font-sans'> Merida Tech Minds {cp} .</span>
                 </Link> All Rights Reserved.
              </p>
              <p className='text-slate-600 text-lg'>
              Provides advice & guidance to clients
               regarding their investments & manage their investment portfolios.
              </p>
            </Col>
            <Col className=''>
               <div className='flex justify-between'>
               <div className='md:w-3/5'>
               <p className='text-2xl fw-semibold'>NewsLetter</p>
               <p className='text-slate-600 text-lg'>
               By submitting this form, 
               you consent to receive marketing updates from Counsolve.
               </p>
               </div>
               <div className='d-none d-md-block'> 
               <img  src={require("../assest/icon-8.png")} alt="" />
               </div>
               </div>
               <div className='flex flex-col flex-md-row align-items-center justify-around'>
               <input required type="email" className='p-3 md:w-3/5  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Email address..' />
               <button id='three-rounded' 
                     className='px-4 text-white md:w-1/5 btn-change fw-semibold p-3 bg-violet-700'>
                      <img className='mx-auto' width={30} src={require("../assest/paper-plane.png")} alt="" />
                        </button>
               </div>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col lg={3} className='mt-2'>
              <p className='text-2xl fw-semibold'>Office Location</p>
              <hr />
              <p className='text-lg md:w-4/5 fw-semibold'>
              Over 30 Offices in more
than 16 Countries
              </p>
              <p className='text-lg fw-semibold'>Head Office</p>
              <p className=' mulish md:w-4/5 text-slate-500'>
       <span className='text-black text-base fw-semibold mulish'>   Merida Tech Minds {cp}</span>  <span className='block'> 20-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
           </span>  </p>
              <Link target='_block' to='https://g.co/kgs/vgDdWeC' className='text-decoration-none flex gap-2 text-lg fw-semibold text-slate-900 transi hover:text-violet-600'>
                <img width={30} src={require('../assest/map.png')} alt="" />
                Google map</Link>
            </Col>
            <Col lg={3} className='mt-2'>
               <p className='text-2xl fw-semibold'>Company</p>
               <hr />
               <div className='text-slate-400'>
                <Link to={"/"} hrefLang='#home' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Home
                </p>
                </Link>
                <Link to={"/about"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> About us
                </p>
                </Link>
                <Link to={"/blogs"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Grid view
                </p>
                </Link>
                <Link to={"/service"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Services
                </p>
                </Link>
                <Link to={"/ourteam"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Our team
                </p>
                </Link>
                <Link to={"/contact"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Contact
                </p>
                </Link>
               </div>
            </Col>
            <Col lg={3} className='mt-2'>
               <p className='text-2xl fw-semibold'>Essentials</p>
               <hr />
               <div className='text-slate-400'>
                <Link to={"/service/Advanced Tech"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Advanced Tech
                </p>
                </Link>
                <Link to={"/service/Banking and Finance"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Banking and finance
                </p>
                </Link>
                <Link to={"/service/Submit reports"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Submit reports
                </p>
                </Link>
                <Link to={"/service/Independent"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Independent
                </p>
                </Link>
                <Link to={"/service/Manufacturing"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Manufacturing
                </p>
                </Link>
                <Link to={"/service/Market Research"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className=''>
                   <KeyboardArrowRightIcon /> Market Research
                </p>
                </Link>
               
               </div>
            </Col>
            <Col lg={3} className='mt-2'>
            <p className='text-2xl fw-semibold'>Popular Post</p>
               <hr />
              <div>
              <p id='three-rounded' className='text-violet-700 bg-slate-300 fw-semibold w-fit px-2 p-1'>
                   Business
               </p>
               <Link className='text-decoration-none fw-semibold text-lg text-slate-800 transi hover:text-violet-700'>
               Here are some tips Giving Back Interested in this year?
               </Link>
              </div>
              <div className='my-3'>
              <p id='three-rounded' className='text-violet-700 bg-slate-300 fw-semibold w-fit px-2 p-1'>
                   Investment
               </p>
               <Link className='text-decoration-none text-semibold text-lg fw-semibold text-slate-800 transi hover:text-violet-700'>
               Here are some tips Giving Back Interested in this year?
               </Link>
              </div>
              <Link to={"/blogs"} className=' text-lg text-decoration-none text-slate-800 hover:text-violet-700  fw-semibold'>
              View all post <KeyboardArrowRightIcon/></Link>
            </Col>
          </Row>
          
       </Container>
       <div className='h-10'>
         </div>
       <div className='bg-slate-950 mt-5'>
       <Row className='container mx-auto p-3'>
            <Col lg={9} xl={6} className='flex mx-auto flex-col md:flex-row align-items-center gap-3 justify-between'>
              <a href='#home' className='text-decoration-none text-lg hover:text-white transi text-slate-400'> Terms & conditions
              </a>

              <Link className='text-decoration-none text-lg hover:text-white transi text-slate-400'> Privacy policy
              </Link>
              <Link className='text-decoration-none text-lg hover:text-white transi text-slate-400'> Sitemap
              </Link>
              <Link className='text-decoration-none text-lg hover:text-white transi text-slate-400'> Investor policy
              </Link>
            </Col>
            <Col lg={4} xl={6} className='mt-4 mx-auto'>
               <a href="#home"
                className='text-white mx-auto mx-xl-0 ms-xl-auto  w-fit fw-semibold gap-2 text-lg text-decoration-none flex'> Back to top
               <img width={20} height={10} src={require("../assest/up-arrow.png")} alt="" />             
               </a>
            </Col>
          </Row>
       </div>
    </div>
  )
}

export default ContactLanding