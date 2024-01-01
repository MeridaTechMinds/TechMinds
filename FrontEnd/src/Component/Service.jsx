import React, { useEffect, useState } from 'react'
import MiniNav from '../NavBar/MiniNav'
import { useNavigate } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import BeliveUs from './BeliveUs'
import TitleBanner from './TitleBanner'
import PeopleTrust from './PeopleTrust'
import Solutions from './Solutions'
import MainNav from '../NavBar/MainNav'
import LogoNav from '../NavBar/LogoNav'
import ContactLanding from './ContactLanding'
const Service = () => {
    let navigate=useNavigate()
    var settings = {
        dots: true,
        speed: 500,
        arrows:false,
        slidesToShow: 3,
        initialSlide: 0,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
      var twoiconsetting = {
        dots: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        initialSlide: 0,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear"
      }
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
        <TitleBanner data={"Services"}/>
        {/* About us */}
           <h1 className='h-20'></h1>
        <Row className='container  w-fit mx-auto justify-between my-20'>
          <Col  xl={6} className='flex mx-auto position-relative flex-col flex-lg-row lg:gap-6 align-items-center'>
            <img className='d-block my-4' src={require("../assest/about-3.jpg")} alt="" />
            <img src={require("../assest/about-2.jpg")} alt="" />
             <div id='three-rounded' className='lg:absolute my-4 left-36  bg-violet-700 p-3 w-[250px] h-[200px] text-white'>
              <img className='w-16 h-16 m-3' src={require("../assest/icon-7.png")} alt="" />
             <p className='text-lg'> <span className='text-2xl block'>6.8 Million</span>
                 Customer Benefits
                 </p>
             </div>
          </Col>
          <Col xl={5}>
            <p className='text-violet-500 md:text-xl fw-semibold'>About us</p>
            <p className='text-2xl fw-semibold lg:text-4xl'>Experts in Providing Investment Consulting</p>
            <p className='text-slate-600'>
            Perfectly simple & easy to distinguish. In a free hour all, when our power of choice is untrammelled & when nothing prevents our being able to what we like best, every pleasure is to be welcomed & every pain 
            avoided but in certain have to repudiated all annoyances accepted.
            </p>
            <Slider {...twoiconsetting} className='w-2/5 mx-auto'  >
               <div>
                <img className='w-20 h-20 my-4' src={require("../assest/world-book-day.png")} alt="" />
                <p className='text-xl'>Extensive knowledge</p>
                <p className='text-slate-600'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem officiis sapiente quidem
                </p>
               </div>
               <div>
                <img className='w-20 h-20 my-4' src={require("../assest/world-book-day.png")} alt="" />
                <p className='text-xl'>Extensive knowledge</p>
                <p className='text-slate-600'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem officiis sapiente quidem
                </p>
               </div>
               
            </Slider>
          </Col>
        </Row>
        {/* Our services */}
        <Container style={{backgroundColor :"rgb(39,46,57)"}} className="text-center my-5 py-5 rounded-3xl">
          <p className='text-pink-600 fs-6 sans fw-semibold'>OUR SERVICES</p>
                <p className='display-5 text-white fw-semibold'>Phenomenal Consulting Solutions</p>
                <div className='container p-2  my-5'>
                
                   <Slider {...settings} className=''> 
                    {/* //card1 */}
                   <div className='bg-red-300 text-start transi hover:border my-3 hover:border-red-300 rounded-xl'>
                   <div id='top-rounded'className="card cardhieght mt-3 bg-red-300 p-3">
                      <div  className='d-flex m-3'>
                      <div id="three-rounded" className='bg-red-100 w-16 h-16 p-10'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-24 flex text-red-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clipboard2-data" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
</svg>
                       <p className='h2 position-relative top-5  '>01</p>
                      </div>
                      </div>
                      
                      <div className="card-body lg:w-4/5">
                        
                      <Link className='text-decoration-none text-black  '>
                        <h5 className="card-title udline ">
                        Private Client Investment Management
                      </h5></Link>
                      <Link className='text-decoration-none text-black  '>
                        <p className='hover:text-red-400 transi my-3'>Explore Service afafaf</p></Link>
                           <p className="card-text">
                            That they cannot forsee the pain trouble that are bound ensure equal blame belongs to duty.
                            </p>
                        </div>
                    </div>
                   </div>

                   {/* //card2 */}
                    <div className='bg-violet-100 text-start my-3 transi hover:border hover:border-violet-300 rounded-xl'>
                    <div id='top-rounded' className="card cardhieght mt-3 p-3">
                      <div id='icon' className='d-flex m-3'>
                      <div id="three-rounded" className='bg-violet-100 w-16 h-16 p-10'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-24 flex text-violet-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
  <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
</svg>
                       <p className='h2 position-relative top-5  '>02</p>
                      </div>
                      </div>
                      
                      <div className="card-body lg:w-4/5">
                      <Link className='text-decoration-none text-black  '><h5 className="card-title udline">
                        Private Client Investment Consulting
                      </h5></Link>
                      <Link className='text-decoration-none text-black  '>
                        <p className='hover:text-violet-400 transi my-3'>Explore Service afafaf</p></Link>
                           <p className="card-text">
                            That they cannot forsee the pain trouble that are bound ensure equal blame belongs to duty.
                            </p>
                            </div>
                    </div>
                    </div>
                    {/* //card3 */}
                    <div className='bg-green-300 my-3 text-start transi hover:border hover:border-green-300 rounded-xl'>
                    <div id="top-rounded" className="card cardhieght mt-3 p-3">
                      <div id='icon' className='d-flex m-3'>
                      <div id="three-rounded" className='bg-green-100 w-16 h-16 p-10'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-24 flex text-green-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
                       <p className='h2 position-relative top-5  '>03</p>
                      </div>
                      </div>
                      
                      <div className="card-body lg:w-4/5">
                      <Link className='text-decoration-none text-black  '><h5 className="card-title udline w-4/5">
                        Retirement Plan Consultant
                      </h5></Link>
                      <Link className='text-decoration-none text-black  '>
                        <p className='hover:text-green-400 transi my-3'>Explore Service afafaf</p></Link>
                           <p className="card-text">
                            That they cannot forsee the pain trouble that are bound ensure equal blame belongs to duty.
                            </p> </div>
                    </div>
                    </div>
                   {/* //card4 */}
                    <div className='bg-amber-300 my-3 transi hover:border text-start hover:border-amber-300 rounded-xl'>
                    <div id="top-rounded" className="card cardhieght mt-3  p-3">
                    <div id='icon' className='d-flex m-3'>
                      <div id="three-rounded" className='bg-amber-100 w-16 h-16 p-10'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-24 flex text-amber-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-backpack2" viewBox="0 0 16 16">
  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14"/>
  <path fill-rule="evenodd" d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v1.191l1.17.585a1.5 1.5 0 0 1 .83 1.342V13.5a1.5 1.5 0 0 1-1.5 1.5h-1c-.456.607-1.182 1-2 1h-7a2.497 2.497 0 0 1-2-1h-1A1.5 1.5 0 0 1 0 13.5v-2.382a1.5 1.5 0 0 1 .83-1.342L2 9.191V8a6.002 6.002 0 0 1 4-5.659M7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0M3 13.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8A5 5 0 0 0 3 8zm-1-3.19-.724.362a.5.5 0 0 0-.276.447V13.5a.5.5 0 0 0 .5.5H2v-3.691Zm12 0V14h.5a.5.5 0 0 0 .5-.5v-2.382a.5.5 0 0 0-.276-.447L14 10.309Z"/>
</svg>
                       <p className='h2 position-relative top-5  '>04</p>
                      </div>
                      </div>
                      
                      <div className="card-body lg:w-4/5">
                      <Link className='text-decoration-none text-black  '>
                        <h5 className="card-title udline w-4/5">
                        Investment Planning
                      </h5></Link>
                      <Link className='text-decoration-none text-black  '>
                        <p className='hover:text-amber-400 transi my-3'>Explore Service afafaf</p></Link>
                           <p className="card-text">
                            That they cannot forsee the pain trouble that are bound ensure equal blame belongs to duty.
                            </p> </div>
                    </div>
                    </div>
                   {/* //Card4 finish */}
                   
                   </Slider>  
         
       </div>
        </Container>
        <Solutions/>
        <PeopleTrust/>
        <BeliveUs/>
        <ContactLanding/>
    </section>
  )
}

export default Service