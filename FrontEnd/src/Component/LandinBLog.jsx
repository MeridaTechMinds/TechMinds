import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
const LandinBLog = () => {
    let navigate=useNavigate()
    var settings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows : false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     let arryobj=[
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-17-370x470.jpg"
        },
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-18-370x470.jpg"

        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-20-370x470.jpg",
            "category" : "Money"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-21-370x470.jpg",
            "category" : "Investment"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-22-370x470.jpg",
            "category" : "Honey"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-18-370x470.jpg",
            "category" : "Investment"
        }
     ]
  return (
    <div className='mt-10'>
        <div id='CaseStudies' className=' bg-slate-100'>
            <div className='container pt-36'> 
           <p className='text-clr fw-semibold'>CASE STUDIES</p>
           <p className='text-4xl fw-semibold'>Thinking Forward for your Results</p>
           <Row className='mt-5 p-2'>
            <Col md={9} xl={2} className='p-4 h-fit shadow-lg rounded-3xl bg-white mt-3'>
             <button className='w-full'> <p className='text-slate-600 text-start fw-medium'>View All Recents</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Business</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start  fw-medium'>Consulting</p>
                <hr /></button>  
                <button className='w-full'>     <p className='text-slate-600 text-start fw-medium'>Innovative</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Investment</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Management</p>
                </button>  
            </Col>
            <Col xl={10} className='mt-3'>
            <Slider {...settings}>
                   {
                    arryobj.map((obj)=>{
                      console.log(obj.photo);
                        return(
                <div className='position-relative w-auto h-auto'>
                  
                    {/* <img  className='d-block w-[100%] rounded-3xl'
                     src={require(`../assest/project-17-370x470.jpg`)} alt="" /> */}
                     <Image  className='d-block w-[100%] rounded-3xl' 
                     src={obj.photo} alt='missing'>

                     </Image>
                     <div  id='opchi'
                    className='position-absolute rounded-3xl d-flex align-items-end transi  p-3 md:p-5 justify-center top-0 left-0 w-[100%] h-[100%]'>
                        <div id='three-rounded'  className='bg-slate-100 py-3 rounded-t-3xl rounded-s-3xl w-full mp-3 px-4'>
                        <p className='text-violet-600'>{obj.category}</p>
                        <button onClick={()=>navigate(`/project/${obj.title}`)} className= 'lg:text-xl text-slate-900 transi text-start py-2 hover:text-violet-600'>
                            {obj.title}</button>
                        </div>
                    </div>
                   </div>
                         
                        )
                    })
                   }
                   </Slider>
            </Col>
           </Row>
           {/* Slide line */}
            </div>

        </div>
        {/* Case study finied */}
        {/* Testimonial start */}
        <div style={{background : "rgb(108,78,167)"}} className='py-20 my-5'>
          <Row className='mx-auto container text-white'>
            <Col lg={6} className='my-2'>
               <p className='fw-semibold text-lg text-pink-400'>Testimonials</p>
               <p className='text-4xl md:text-6xl lg:text-5xl fw-semibold'>Our Clients have been Extremely Satisfied by our Professionalism</p>
           <div className='flex'>
            <img   className='w-[50px] h-[50px] mx-4' src={require("../assest/icon-7.png")} alt="" />
            <p className='fw-semibold text-lg'>
            Avg.Rating 4.8/5 
            <p>Based on 2,500 Client Reviews</p>
            </p>
           </div>
           {/* <button className='text-xl transi  hover:text-pink-400'>Read all reviews
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
           </button> */}

            </Col>
            <Col lg={6} className='my-2'>
              {/* text box */}
               <div id='curly' className='p-3 flex flex-col flex-lg-row gap-3 w-4/5  rounded-t-3xl rounded-s-3xl bg-white'>
                 {/* icon section */}
                  <div>
                    <div  className='violetclr rounded-t-full rounded-ee-full flex justify-center align-items-center w-14 h-14'>
                       <img width={30} className='' src={require('../assest/quote.png')} alt="" />
                      </div> 
                  </div>
                  {/* icon finish */}
                  {/* text-area */}
                  <div className='mt-2'>
                    <p className='text-clr text-xl fw-semibold'>
                      Great Experience
                    </p>

                    <p className='text-slate-600 md:text-lg'>
                    Planners since 2022 I have had a very good experience the sound financial advice they gave me helped me to achieve. 
                    I have been financially advised by counsolve investment. Planners…
                    </p>
                    <p className='text-black text-xl fw-semibold'>Joy Root</p>
                    <p className='text-clr text-lg '>Director - Naxly Info tech</p>
                  </div>
               </div>
               
            
           
            </Col>
          </Row>
        </div>
        {/* Testimonial end */}
        {/* Blog Post */}
        {/* Appointment */}
        <Row id='three-rounded' className='container mx-auto py-3 bgbl flex justify-around '>
            <Col lg={6} id='appointmentform' className=' p-lg-4'>
                  <p className='text-pink-600 text-center text-sm-start ps-3 text-lg fw-semibold'>Appointment</p>
                  <p className='text-4xl fw-semibold  text-center text-sm-start ps-2  text-white'>Send your Proposal to us</p>
                  <form  className='bg-white md:w-fit mx-auto mx-sm-0 rounded-s-3xl rounded-tr-3xl p-4 mt-4 mb-2 ' action="">
                     <div className='d-flex flex-col flex-sm-row'>
                     <div className='d-flex flex-col'>
                          <input required  type="text" className='p-3 text-slate-500 rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Name *' />
                          <input required type="email" className='p-3  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Email *' />
                          <input required type="Phone" className='p-3  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Phone *' />
                      </div>
                      <div className='d-flex flex-col'>
                        <select name="Subject" id="selectdrop"
                        className=' p-3 text-slate-500 cursor-pointer  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600'>
                            <option value="Subject"> Subject</option>
                            <option value="Traditional consulting"> Traditional consulting</option>
                            <option value="Portfolio Management"> Portfolio Management</option>
                            <option value="Asset Allocation">Asset Allocation</option>

                        </select>
                        <textarea name="Message" placeholder='Message'
                        className='p-3  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 '
                         id="" cols="20" rows="5">

                        </textarea>
                      </div>
                     </div>
                     <button id='three-rounded' 
                     className='px-4 text-white w-100 mt-3 btn-change fw-semibold p-3 bg-violet-700'>
                      Send Request
                        </button>
                  </form>
            </Col>
            <Col lg={4} className='flex flex-col px-5 my-5 md:my-0 justify-center gap-3'>
                  <img width={60} src={require("../assest/customer-service.png")} alt="" />
                 
                 <div className='text-white'>
                 <p className=''>OFF.HRS </p>
                 <p className='fw-semibold text-lg font-sans'>Mon - Sat: 09am to 06pm</p>
                 </div>
                 <div className='text-white'>
                 <p className=''>Phone </p>
                 <Link className='text-white text-decoration-none'><p className='hover:underline fw-semibold text-lg font-sans'>9791582489</p>
                 </Link>
                 </div>
                 <div className='text-white'>
                 <p className=''>Email </p>
                 <Link className='text-white text-decoration-none'><p className='hover:underline fw-semibold text-lg font-sans'>info@gmail.com</p>
                 </Link>
                 <div className='d-flex w-44 justify-around mt-4'>
                      <Link>
                      <img width={25} src={require("../assest/facebook-app-symbol.png")} alt="" />
                      </Link>
                      <Link>
                      <img width={25} src={require("../assest/twitter.png")} alt="" />
                      </Link>
                      <Link>
                      <img  width={25} src={require("../assest/linkedin.png")} alt="" />
                      </Link>
                 </div>
                 </div>
            </Col>
        </Row>
    </div>
  )
}

export default LandinBLog