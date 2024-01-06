import React from 'react'

import 'animate.css';
import "../NavBar/nav.css";
import "../Component/home.css";
import { Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Body1 = () => {
  let navigate=useNavigate()
    let sysarry=[
        "clients-1.png","clients-2.png","clients-3.png","clients-4.png","clients-5.png",
        "clients-6.png","clients-7.png","clients-8.png","clients-10.png"
      ]
      var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows:"false",
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
      var symbolsettings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true
    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div className=''>
        {/* <article className='container gap-7  d-flex flex-col flex-md-row mt-4'>
              <div id='card' className='violetclr one-rounded d-flex justify-content-around ps-5 pt-8 pe-2 lg:w-2/5 '>
                    <div id='three-rounded' className='w-max h-max p-3  bg-white'>
                          <img src={require('../assest/icon-5.png')} alt="" />
                    </div>
                    <content className="bg-imgarrow text-white m-2 ms-4  ps-5 pt-5 pe-5">
                         <p className=' text-4xl fw-bold fontfam'>500+</p>
                         <p className='h6 mulish'>Clients served in a year.</p>
                    </content>
              </div>
              <div id='card' className='d-flex justify-content-around ms-5 gap-10 align-items-center'>
              <div id='three-rounded' className='w-max h-max p-3  bg-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                    </div>
                    <div id='text' className=''>
                         <p onClick={()=>navigate("/project/Investing in Emerging Markets")}
                         className='text-2xl lg:text-3xl fontfam cursor-pointer hover:text-violet-600 fw-bolder transi'>Start Your Project</p>
                         <p className='mulish fw-semibold text-slate-600'>The claims of duty obligationsbusiness frequently occur.</p>
                         <Link className='fw-semibold text-lg cursor-pointer hover:text-violet-600 text-decoration-none transi text-slate-900'>
                          Free Consultation <svg className='text-violet-600' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi inline bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></Link>
                    </div>
              </div>
        </article> */}
        {/* Our services */}
        <Container className="text-center mt-0 mb-5">
          <p className='blclr fs-6 sans fw-semibold'>OUR SERVICES</p>
                <p className='display-5 fontfam fw-bolder'>Solutions We Offer</p>
        </Container>


        {/* Scroll bar for a cards */}
       <div className='container p-2 px-5 sm:px-2 mb-5'>
                
                   <Slider {...settings} className=''> 
                   
                   <div id='cardone' className='bg-red-300 transi hover:border hover:border-red-300 rounded-xl'>
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
                        
                      <Link to={("/service/Private Client Investment Management")} 
                       className='text-decoration-none text-black  '>
                        <h5 className="card-title text-2xl fontfam fw-bolder text-blackudline ">
                       Software Consulting
                      </h5></Link>
                      <Link to={("/service/Software Consulting")} 
                      className='text-decoration-none text-black  '>
                        <p className='hover:text-red-400 fontfam text-lg fw-bolder transi my-3'>
                          Explore Service</p></Link>        
                           <p className="card-text text-slate-700 text-[15px] lg:text-[17px] mulish">        
                       We offer expert guidance to optimise your software solutions, streamline processes, and enhance overall 
efficiency.</p>
                        </div>
                    </div>
                   </div>

                
                    <div id='cardtwo' className='bg-violet-100 transi hover:border hover:border-violet-300 rounded-xl'>
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
                      <Link to={("/service/Private Client Investment Management")} 
                       className='text-decoration-none  text-black  '>
                        <h5 className="card-title text-2xl fontfam fw-bolder udline">
                        Branding
                      </h5></Link>
                      <Link to={("/service/Branding")}  className='text-decoration-none text-black  '>
                        <p className='hover:text-violet-400 fontfam text-lg fw-bolder transi my-3'>
                          Explore Service</p></Link>
                           <p className="card-text  text-slate-700 text-[15px] lg:text-[17px] mulish">                          
Let us guide you in creating a lasting 
impression that speaks volumes about your values and vision. </p>
                            </div>
                    </div>
                    </div>
                 
                    <div id='cardthree' className='bg-green-300 transi hover:border hover:border-green-300 rounded-xl'>
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
                      <Link to={("/service/Retirement Plan Consultant")}
                       className='text-decoration-none  text-black  '>
                        <h5 className="card-title text-2xl fontfam fw-bolder udline w-4/5">
                        Digital Marketing
                      </h5></Link>
                      <Link  to={("/service/Digital Marketing")}
                      className='text-decoration-none text-black  '>
                        <p className='hover:text-green-400 fontfam text-lg fw-bolder transi my-3'>
                          Explore Service</p></Link>
                           <p className="card-text  text-slate-700 text-[15px] lg:text-[17px] mulish">                        
We offer expert guidance to optimise your software solutions, streamline processes, and enhance overall efficiency.   </p> </div>
                    </div>
                    </div>
                   
                    <div id='cardfour' className='bg-amber-300 transi hover:border hover:border-amber-300 rounded-xl'>
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
                      <Link  to={("/service/Investment Planning")}
                      className='text-decoration-none text-black  '>
                        <h5 className="card-title text-2xl fontfam fw-bolder  udline w-4/5">
                        Business Consulting
                      </h5></Link>
                      <Link to={("/service/Business Consulting")}
                      className='text-decoration-none text-black  '>
                        <p className='hover:text-amber-400 fontfam text-lg fw-bolder transi my-3'>
                          Explore Service</p></Link>
                           <p className="card-text text-slate-700 text-[15px] lg:text-[17px] mulish">                        
We collaborate with you to identify opportunities, overcome challenges, and implement effective strategies.</p> </div>
                    </div>
                    </div>
                   
                   
                   </Slider>  
         
       </div>
     {/* Scroll card ending */}

     {/* Growth page */}

     <div id="" className='md:mt-72 rounded px-4 bg-slate-950'>
      <article className='container bgbl rounded-s-3xl position-relative md:bottom-20'>
          <div className='d-flex flex-col md:flex-row'>
              <div  className='p-4  px-5'>
                  <p className='text-pink-400 text-lg'>Our Growth</p>
                  <p className='text-white fontfam fw-semibold display-5 '>Thinking
        <span className='d-block'>
         Beyond Ordinary</span> Strategies</p>  
<p className='text-slate-400 text-lg mulish'>The wise man therefore always holds in these
matters to this principle of selection</p>
<button id='three-rounded' onClick={()=>navigate("/about")} className='px-4 text-white  btn-change fw-semibold p-3 bg-violet-700'>
      Annual report
       </button>
              </div>
              {/* image heading */}
              <div  className='bgbl d-none d-xl-block h-[400px] mx-auto'>
                <img className='d-none d-md-block position-relative bottom-28' src={require("../assest/growth-1.png")} alt="" />
                <div id='' className='fs-5 rounded-s-3xl rounded-t-3xl text-white fw-semibold 
                h-fit w-fit p-3 pb-2 position-relative md:bottom-80
                 bg-slate-900'>
      Monthly Growth
      <br /> <p className='mt-2'>
      $48,560,25    <span className='text-pink-600 sm:ms-5'>+18%</span>
      </p>
       </div>
              </div>
              {/* card section text area */}
            <div id="card section" className='bg-white'>
                <div className='p-6 rounded-t-2xl rounded-s-2xl'>
                  <Link className='text-decoration-none text-black'> 
                  <h4 className='hover:text-violet-600 fw-bolder text-3xl fontfam transi'>Golbal Impact</h4></Link>
                    <p className='mulish text-slate-600'>Ever undertakes labor physic exercise except some advantage.</p>
                    <div className='d-flex px-5 justify-between'>
                      {/* Icon creation */}
                    <div id='icon' className='d-flex'>
                      <div id="three-rounded" className='bg-violet-100 w-8 h-8 p-9'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-20 flex text-violet-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
</svg>
                      </div>  
                      
                   </div>
                      {/* Inner icon finish */}
                      <Link className='text-decoration-none text-black md:ms-5 mt-3'>
                        <p className=' transi hover:text-violet-800 fw-bold'>
                        Read more</p></Link>
                    
                    
                      {/* icon and readme fnish */}

                    </div>
                </div>
                <div className='p-3'>
                  
                <Link className='text-decoration-none text-black'> 
                  <h4 className='hover:text-violet-600 fw-bolder text-3xl fontfam transi'>Corporate Sustainability</h4></Link>
                  
                    <p className='mulish text-slate-600'>Ever undertakes labor physic exercise except some advantage.</p>
                    <div className='d-flex px-5 justify-between'>
                    <div id='icon' className='d-flex justify-content-between'>
                      <div id="three-rounded" className='bg-violet-100 w-8 h-8 p-9'>
                      </div>
                      <div className='position-relative top-2 gap-2 right-20 flex text-violet-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-android2" viewBox="0 0 16 16">
  <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264M3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278m-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z"/>
</svg>
                      </div> 
                    </div>
                      {/* Inner icon finish */}
                      <Link className='text-decoration-none text-black hover:text-violet-800 md:ms-5 mt-3'>
                        <p className=' transition duration-1000 hover:text-violet-800 fw-bold'>
                        Read more</p></Link>
                    
                    
                      </div>
                </div>

            </div>
          </div>
      </article>
      {/* Company tags slider*/}
      <div className='container my-5'>
        
      <Slider {...symbolsettings}
      className=''
      >
         {
          sysarry.map((sys)=>{
            return(
              <Link>
         <div className="ps-28 sm:ps-0">
            <img src={require(`../assest/${sys}`)} alt="" />
          </div>
          </Link>
            )
          })
         }
          
        
        </Slider> 
      </div>
      <textthing>
        <p className='text-center fs-5 text-white pb-9'>
        2.6k Companies & Individuals Trusted Us. <Link className=' text-white text-decoration-none'>
          <span className='transi hover:text-pink-700'>View All Clients</span>
          </Link>
        </p>
      </textthing>
     </div>
     {/* Growth ending */}
    </div>
  )
}

export default Body1