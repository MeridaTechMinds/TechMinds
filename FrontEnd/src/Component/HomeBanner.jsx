import React from 'react'
import { Carousel, Col, Image, Row } from 'react-bootstrap'
import "./home.css"
import MainNav from '../NavBar/MainNav'
import { useNavigate } from 'react-router'
const HomeBanner = () => {
  let navigate=useNavigate()
  return (
    <div>
        <Carousel fade className='z-0'>
      <Carousel.Item interval={1000}
       id="crsimg">
        <Carousel.Caption>
        <div className='md:w-3/5 lg:w-1/2  text-white'>
                <h1 className='text-3xl md:text-6xl text-start fontfam xl:text-7xl fw-bolder'>Powering <span className=' block'> growth through </span> Technology </h1>
                <div className='flex'>
                <div id='three-rounded' className='w-max d-none d-xl-block h-max p-3 bg-pink-500'>
                          <img className='w-20 h-8' src={require('../assest/chat (1).png')} alt="" />
                    </div>
                    <p className='text-lg ms-3 mulish md:text-xl text-start'>
                    Leveraging innovative solutions to drive business forward, promoting efficiency,
    scalability, and sustained growth.</p>
                </div>
                <button id='three-rounded' onClick={()=>navigate("/service")}
                 className='fs-5 float-right mulish btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}
       id="crsimg2">
      {/* <img src={require(`../assest/banner-2.jpg`)}
      id="crsimg"
      className='background' alt="" /> */}
        <Carousel.Caption className=''> 
        <div className='md:w-3/5 lg:w-1/2 text-black'>
                <h1 className='text-2xl text-start fontfam md:text-6xl xl:text-7xl fw-bold'>Transforming  <span className=''>brands one pixel </span> at a time  </h1>
                <div className='flex'>
                <div id='three-rounded' className='w-max d-none d-xl-block h-max p-3 bg-pink-500'>
                          <img className='w-16 h-8' src={require('../assest/chat (1).png')} alt="" />
                    </div>
                <p className='text-lg mulish ms-3 text-start inline md:text-xl'>
                  Crafting visually stunning and impactful brand transformation by refining every details.
                </p>
                </div>
                <button id='three-rounded' className='fs-5 mulish text-white float-right btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}
      className='' id="crsimg3">
      {/* <img src={require(`../assest/banner-3.jpg`)} 
      id="crsimg"
      alt="" /> */}
        
        <Carousel.Caption className=''> 
        <div className=' md:w-3/5 lg:w-1/2 text-white'>
                <h1 className='text-2xl fontfam md:text-6xl xl:text-7xl text-start fw-bolder'>Ignite your <span className='stroke-transparent block'> business with </span>our expertise </h1>
                <div className='flex'>
                <div id='three-rounded' className='w-max d-none d-xl-block h-max p-3 bg-pink-500'>
                          <img className='w-16 h-8' src={require('../assest/chat (1).png')} alt="" />
                    </div>
                    <p className='text-lg ms-3 mulish md:text-xl text-start'>Our expertise will navigate you towards success in the ever-evolving accordion 
                digital landscape. </p>
                </div>

             
                <button id='three-rounded' className='px-4 float-right btn-change mulish d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}
       id="crsimg2"
       className=''>
      {/* <img src={require(`../assest/banner-2.jpg`)}
      id="crsimg"
      className='background' alt="" /> */}
        <Carousel.Caption className=''> 
        <div className='md:w-3/5 lg:w-1/2 text-black'>
                <h1 className='text-3xl text-start fontfam md:text-5xl xl:text-7xl fw-bold'>Driving growth through data-driven strategies </h1>
                <div className='flex'>
                <div id='three-rounded' className='w-max d-none d-xl-block h-max p-3 bg-pink-500'>
                          <img className='w-20 h-8' src={require('../assest/chat (1).png')} alt="" />
                    </div>
                    <p className='text-lg ms-3 mulish md:text-xl text-start'>
                    Our data-driven strategies fuel business towards robust growth by hamessing the power of
                  actionable insights. </p>
                </div>
                <button id='three-rounded' className='fs-5 mulish text-white float-right btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<h1 className='h-10'></h1>
    {/* Adout us */}
    <div id='experiencepage' className='my-3 container d-flex flex-col flex-lg-row'>
    <div id='experience' className='lg:w-1/2 mx-auto my-2'>
                    <Image src={require(`../assest/about-1.jpg`)}></Image>
                 </div>
         <div id='aboutus' className='lg:w-1/2 fontfam'>
            <p className='fs-5 text-violet-700 fw-semibold'>About us</p>
             <p className='fw-semibold w-4/5 text-xl lg:text-5xl fontfam line display-5 '>
             Your roadmap to business success.
             </p>
             <p className='fs-5 gap-2 d-flex align-items-center fw-bold '> 
             <svg xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                 Software Consulting  </p> 
             <p className='fs-5 d-flex gap-2 align-items-center fw-bold'>
             <svg xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> Digital Marketing</p>
<p className='fs-5 d-flex gap-2 align-items-center fw-bold'>
             <svg xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> Branding</p>
<p className='fs-5 d-flex gap-2 align-items-center fw-bold'>
             <svg xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> Business Consulting</p>
            
             <p className='text-lg mulish text-slate-500'>We specialise in guiding businesses towards achieving their goals, whether it be through developing cutting-edge software solutions, implementing effective digital marketing strategies, creating compelling 
             branding experiences, or providing expert advice and consulting services.
             </p>
       
        <button id='three-rounded' onClick={()=>navigate("/about")} className='fx-4 text-white btn-change d-none d-md-block fw-semibold h-14 w-48 bg-violet-700'>
      More About Us
       </button> 
     </div>

    </div>
    {/* About ending */}
    <video src=""></video>
   </div>
  )
}

export default HomeBanner