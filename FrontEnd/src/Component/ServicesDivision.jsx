import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Row } from 'react-bootstrap'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import { contents } from './ServiceContent'

const ServicesDivision = () => {
    let {service} =useParams()
    let navigate=useNavigate()
    let [servicecontent,setcontent]=useState({})
    let [anime,setanime]=useState("")
    let [cards,setcards]=useState([])
    let [points,setpoints]=useState([])
    // console.log(contents);
    
    useEffect(()=>{
      setanime("animate__fadeIn");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '2s');
     setTimeout(() => {
        setanime("")
     }, 2000);
     let find=()=>{
      contents.map((content)=>{
        if(content.title.toLowerCase()===service.toLowerCase()){
          setcontent(content)
          setcards(content.points1)
          setpoints(content.points2)
        } })
    }
    if (service && contents.length > 0) {
      find();
    }
    },[service,contents])
  return (
    <div className={`${anime} animate__animated transi durationani`}>
      <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={service}/>
        <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
            <Col lg={7}>            
            <img className='rounded-3xl' src={require("../assest/MailMarketing.jpg")} alt="" />
            <p className='text-black mt-10'>" Extremely painful or again is there anyone who loves or case pursues or 
            desires these cases dislike perfectlys imple and to distinguish..... "</p>
            <h1 className='fontfam fw-bold fs-3'>{servicecontent.title} </h1>
           <p className='text-slate-600'>{servicecontent.para1} </p>
            {/* Card */}
            <div className=' flex flex-wrap my-5 justify-between gap-3'>
              {
               cards.map((card)=>{
                  return(
<div  className='p-5 px-4 w-[25rem] md:w-[20rem] lg:w-[15rem] mx-auto xl:w-[22rem] rounded-t-3xl rounded-s-3xl bg-slate-100'
                                  style={{
                                  borderRadius : "20px,20px, 20px,0px",
                                   }}>
        <div id='three-rounded' className='w-14 float-right h-14 flex
         align-items-center justify-center bg-slate-800'>
                    <p className='text-white text-2xl pt-3'>{card.id}</p>
            </div>
            <img className='w-10 h-10' src={require("../assest/zigzag.png")} alt="" />
            
        <div className='my-4 fontfam fw-semibold text-2xl text-start w-4/5'>
           {card.title}
        </div>
      
        <div className='mulish text-start'> {card.point}
        </div>
      </div>
                  )
                })
              }

            </div>
            
            
           {/* Card end */}
               <h2 className='text-black fontfam fw-semibold text-3xl'>
                {servicecontent.approch}</h2>
               <p className='text-lg mulish'> {servicecontent.para2}</p>
               {
                points.map((point)=>{
                  return(
                    <div className='flex my-2'>
                    <img className='w-8 h-8' src={require("../assest/check-mark.png")} alt="" />
                    <div className='ms-4 flex flex-col text-slate-900'>
                    <h2 className=' text-xl fw-semibold'>{point.title}</h2>
                    <span className='text-slate-500 text-base my-2 fw-normal sm:w-3/5 block'>
                    {point.point}
                    </span>
                    </div>
                </div>
                  )
                })
               }
                   
            </Col>

            <Col lg={4} className='mx-auto mt-5'>
                <div className='bg-slate-100 trnasi fw-semibold transi shadow my-4 rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                    <p onClick={()=>navigate(`/service/Lead Generation`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Lead Generation
                       </p>
                       <p onClick={()=>navigate(`/service/Search Engine Optimization`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Search Engine Optimization
                       </p>
                       <p onClick={()=>navigate(`/service/Profile Maintenance`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                      Profile Maintenance
                       </p>
                       <p onClick={()=>navigate(`/service/Affiliate Marketing`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Affiliate Marketing
                       </p>
                       <p onClick={()=>navigate(`/service/Graphic Designing`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Graphic Designing
                       </p>
                       <p onClick={()=>navigate(`/service/Investors`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Investors
                       </p>
                   
                </div>
                <div className='bg-slate-100 shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                <p className='text-xl text-center fw-semibold my-2'>Popular Services</p>
                <hr />
                <div id='post1' onClick={()=>navigate("/service/Website Development")} className='cursor-pointer  align-items-center flex gap-2'>
                    <img className='w-25 h-16 bg-center rounded' src={require("../assest/smlpic.jpeg")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Software consulting 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips for Website Development</p></div>
                </div>
                <div id='post2' onClick={()=>navigate("/service/Content Creation")} className='cursor-pointer align-items-center flex gap-2'>
                    <img className='w-25 h-16 bg-center rounded' src={require("../assest/smlpic2.jpeg")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Branding 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Look here for a Content Creation tips.</p></div>
                </div>
                <div id='post3' onClick={()=>navigate("/service/Startups")} className='cursor-pointer flex align-items-center gap-2'>
                    <img className='w-25 h-16 bg-center rounded ' src={require("../assest/smlpic3.png")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Confused where to start your Business?</p></div>
                </div>
                    
                </div>
                {/* Giving Wings */}
                <div className='p-4 bg-violet-600 rounded-t-3xl my-4 rounded-s-3xl'>
                    <p className='text-white text-3xl '>Giving Wings to your Investment.</p>
                      <p className='text-white'>Actual teachings of the great</p>
                      <button id='three-rounded' className='px-4 text-slate-50 hover:text-blue-950  hover:bg-slate-50 transi fw-semibold p-3 bg-pink-600'>
             Get Support
       </button>
                    <img className="rounded-t-full rounded-s-full w-52 ms-auto"  src={require("../assest/news-20-310x270.jpg")} alt="" />
                </div>
            </Col>
        </Row>
        <ContactLanding/>
    </div>
  )
}

export default ServicesDivision