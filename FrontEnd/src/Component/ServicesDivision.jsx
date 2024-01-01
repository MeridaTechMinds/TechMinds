import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Image, Row } from 'react-bootstrap'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const ServicesDivision = () => {
    let {service} =useParams()
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
    let cards =[
      {
        "id":"01",
        "title":"Investment Policy Statements",
        "para":"Prevents our being able to do what welike best,every circumstances less owing to the claims."
      },
      {
        "id":"02",
        "title":"Spending & Distribution Policies",
        "para":"Undertakes laborious physical except to obtain some advantage from it right to find fault."
      },
      {
        "id":"03",
        "title":"Asset Allocation",
        "para":"Cases are perfectly simple and easy to distinguish. In a free hour, when all choice is untrammelled hold."
      },
      {
        "id":"04",
        "title":"Portfolio Rebalancing",
        "para":"Take a trivial example, which of ever undertakes laborious physical obtain some advantages."
      }

    ]
    useEffect(()=>{
      setanime("animate__fadeIn");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '2s');
     setTimeout(() => {
        setanime("")
     }, 2000);
    },[service])
  return (
    <div className={`${anime} animate__animated transi durationani`}>
      <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={service}/>
        <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
            <Col lg={7}>
            
            <img src={require("../assest/news-25.jpg")} alt="" />
            <p className='text-black mt-10'>" Extremely painful or again is there anyone who loves or case pursues or 
            desires these cases dislike perfectlys imple and to distinguish..... "</p>
           <p className='text-slate-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta nobis nihil accusamus! Deserunt consequatur eligendi porro totam! A error quis 
                eveniet quisquam rerum, deserunt doloremque voluptas? Iure, ex dicta? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iste molestiae placeat suscipit ratione eaque vel alias,
                 praesentium soluta maiores eos, nam incidunt quos facilis nihil rerum, veritatis quas eius!
            </p>
            {/* Card */}
            <div className=' flex flex-wrap my-5 justify-around gap-3'>
              {
                cards.map((card)=>{
                  return(
<div  className='p-5 px-4 rounded-t-3xl rounded-s-3xl bg-slate-100'
                                  style={{ width: '18rem',
                                  borderRadius : "20px,20px, 20px,0px",
                                   }}>
        <div id='three-rounded' className='w-14 float-right h-14 flex
         align-items-center justify-center bg-slate-800'>
                    <p className='text-white text-2xl pt-3'>{card.id}</p>
            </div>
            <img className='w-10 h-10' src={require("../assest/zigzag.png")} alt="" />
            
        <div className='my-4 fw-semibold text-2xl text-start w-4/5'>
           {card.title}
        </div>
      
        <div className=' text-start xl:w-10/12'> {card.para}
        </div>
      </div>
                  )
                })
              }

            </div>
            
            
           {/* Card end */}
               <p className='text-black fw-semibold text-3xl'>Performance Reporting</p>
               <p className='text-lg'>Extremely painful or again is there anyone who loves or case pursues,</p>
               <div className='flex'>
                        <img className='w-8 h-8' src={require("../assest/check-mark.png")} alt="" />
                        <p className='ms-4 text-xl fw-semibold flex flex-col text-slate-900'>Financial Planning for Excutives:
                        <span className='text-slate-500 text-base my-2 fw-normal sm:w-3/5 block'>
                        Fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that.
                        </span>
                        </p>
                    </div>
                    <div className='flex'>
                        <img className='w-8 h-8' src={require("../assest/check-mark.png")} alt="" />
                        <p className='ms-4 text-xl fw-semibold flex flex-col text-slate-900'>Tax Planning & Preparation:
                        <span className='text-slate-500 text-base my-2 fw-normal sm:w-3/5 block'>
                        Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness or avoids pleasure itself,.
                        </span>
                        </p>
                    </div>
            </Col>   
            <Col lg={4} className='mx-auto mt-5'>
                <div className='bg-slate-100 trnasi fw-semibold transi shadow my-4 rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                    <p onClick={()=>navigate(`/service/Traditional Consulting`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Traditional Consulting
                       </p>
                       <p onClick={()=>navigate(`/service/Financial plan`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Financial plan
                       </p>
                       <p onClick={()=>navigate(`/service/Consulting`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                      Consulting
                       </p>
                       <p onClick={()=>navigate(`/service/Management`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Management
                       </p>
                       <p onClick={()=>navigate(`/service/Investment`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Investment
                       </p>
                       <p onClick={()=>navigate(`/service/Innovative`)} 
                    className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                       Innovative
                       </p>
                   
                </div>
                <div className='bg-slate-100 shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                <p className='text-xl text-center fw-semibold my-2'>Popular Post</p>
                <hr />
                <div id='post1' className='cursor-pointer my-4 flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
                </div>
                <div id='post2' className='cursor-pointer flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
                </div>
                <div id='post3' className='cursor-pointer flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
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