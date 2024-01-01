
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import OurTeam from './OurTeam'
import Slider from 'react-slick'
import BeliveUs from './BeliveUs'
import TitleBanner from './TitleBanner'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const AboutsUS = () => {
    let navigate =useNavigate()
    let [tanime,settanime]=useState("");
      useEffect(()=>{
        settanime("animate__fadeIn");
        const element = document.querySelector('.durationanit');
        element.style.setProperty('--animate-duration', '4s');
      },[])
      let content = [
        {
            "id":1,
            "title" : "Technology & Life Sciences",
            "content" : "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
            "point" : [
                'Denounce with righteous indignation.',
                'Belongs to those who fail'
            ]
        },
        {
            "id":2,
            "title" : "Banking & Financial",
            "content" : "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
            "point" : [
                'Denounce with righteous indignation.',
                'Belongs to those who fail',
                'Denounce with righteous indignation.',
                'Belongs to those who fail'
            ]
        },
        {
            "id":3,
            "title" : "Commercial Real Estate",
            "content" : "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
            "point" : [
                'Denounce with righteous indignation.',
                'Belongs to those who fail'
            ]
        },
        {
            "id":4,
            "title" : "Manufacturing",
            "content" : "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
            "point" : [
                'Denounce with righteous indignation.',
                'Belongs to those who fail'
            ]
        }
    ]
    let cardcontent=[
        {
            "id":1,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        },
        {
            "id":2,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        },
        {
            "id":3,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        },
        {
            "id":4,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        },
        {
            "id":5,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        },
        {
            "id":6,
            "heading": "Extensive Knowledge",
            "content": "Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations."
        }

    ]
    let [title,settitle]=useState(content[0].title);
    let [text,settext] = useState(content[0].content);
    let [points,setpoints] = useState(content[0].point);
    let [anime,setanime]=useState("")
    let changecontent=(id)=>{
       content.forEach((cont)=>{
        if(cont.id==id){
            settitle(cont.title);
            settext(cont.content);
            setpoints(cont.point);
            setanime("animate__fadeIn");
            const element = document.querySelector('.durationani');
            element.style.setProperty('--animate-duration', '2s');
            setTimeout(()=>{
              setanime("")
            },2500)
        }
       })
    }
    var settings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 4,
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
              slidesToShow: 2,
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
      
  return (
    <div className={`${tanime} animate__animated transi durationanit `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={"About Company"}/>
        {/* About us starts */}
        <div className='h-20'></div>
        <Row className='container mx-auto my-20'>
            <Col lg={6}>
                <p className='text-violet-600 fw-semibold'>ABOUT US</p>
                <p className=' text-3xl md:text-5xl fw-semibold text-slate-900 w-4/5'>
                    Experts in Providing Investment Consulting Services</p>
                    <p className='text-slate-900 text-xl fw-semibold my-4'>Service Since 2015</p>
                    <p className='text-slate-500 text-lg sm:w-3/5'>Equal blame belongs to those who fail in their duty through weakness of will, which is the all same as saying
                         through shrinking from toil and pain these cases are perfectly.</p>
                         <button id='three-rounded' onClick={()=>navigate("/ourteam")} className='px-4 my-4 btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Our History
       </button>
            </Col>
            <Col lg={6} className=''>
                <p  className='text-slate-500 text-lg sm:w-3/5'>Blinded by desire, that they cannot foresee the pain and trouble 
                    that are bounds to ensure and blame belongs to those who fail.</p>
                    <div className='flex'>
                        <img className='w-8 h-8' src={require("../assest/check-mark.png")} alt="" />
                        <p className='ms-4 text-2xl fw-semibold text-slate-900'>Our Mission
                        <span className='text-slate-500 fw-normal text-lg sm:w-3/5 block'>
                        It is a long established fact that a reader
                         will distracted by the content of a page when looking.
                        </span>
                        </p>
                    </div>
                    <div className='flex'>
                        <img className='w-8 h-8' src={require("../assest/check-mark.png")} alt="" />
                        <p className='ms-4 text-2xl fw-semibold flex flex-col text-slate-900'>Our Vision
                        <span className='text-slate-500 fw-normal text-lg sm:w-3/5 block'>
                        There are many variations passages of lorem
                         ipsum available, but the ma- jority have suffered.
                        </span>
                        <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span>
                        <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span>
                        <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span>
                        
                        </p>
                    </div>
            </Col>
        </Row>
        {/* Why choose us */}
        <div className='bg-slate-800 py-10'>
             <div className='container text-center'>
                <p className='text-pink-700 fw-semibold'>WHY CHOOSE US</p>
                <p className='text-white text-5xl fw-semibold '>Reason for Choosee Counsolve</p>
             <Slider {...settings} className='mt-5' >
                {
                    cardcontent.map((con,index)=>{
                        return(
                            
    <div  className='p-5 px-4 rounded-t-3xl rounded-s-3xl bg-slate-700'
                                  style={{ width: '18rem',
                                  borderRadius : "20px,20px, 20px,0px",
                                  backgroundColor :"rgb(51,60,74)" }}>
      <div className=''>
        <div className=''>
        <div id='three-rounded' className='w-14 float-right h-14 flex align-items-center justify-center bg-slate-800'>
                    <p className='text-white text-2xl pt-2'>  {con.id}</p>
            </div>
            <img className='w-10 h-10' src={require("../assest/zigzag.png")} alt="" />
            
        <div className='my-4 text-2xl text-white text-start w-4/5'>{con.heading}</div>

        </div>
      
        <div className='text-white text-start xl:w-10/12'>
          {con.content}
        </div>
      </div>
    {/* Card */}
 
                            </div>
                        )
                    })
                }
            
             </Slider>
         <h1 className='h-10'></h1>    </div>
        </div>
        {/* Skills */}
        <Row className='container my-5 mx-auto'>
                <Col lg={6}>
                    <div className=''>
                        <img className='d-block' src={require("../assest/skills-1.jpg")} alt="" />
                        <img className='rounded-t-3xl rounded-s-3xl mt-5 lg:relative  left-64 bottom-56' src={require("../assest/skills-2.jpg")} alt="" />
                    </div>
                </Col>
               <Col lg={6} className=''>
                <p className='text-violet-700 fw-semibold'>OUR SKILLS</p>
                <p className='fw-semibold md:text-5xl text-3xl'>
                We keep ourselves
up to make your Dreams come true
                </p>
                <p className='text-slate-500 text-lg'>
                Ever undertakes labor physical exercise except obtain some advantage from it? but who has any 
                rights to find fault with man who pleasure that has no annoying consequences.
                </p>
                <p className='text-slate-500 text-lg'>
                Physical exercise except to obtain some advantage,
                </p>
                <div className='flex'>
                    <div className='flex'>
                    <img className='w-8 h-8 me-2' src={require("../assest/check-mark.png")} alt="" />

                        <p className='ms-4 text-2xl fw-semibold w-4/5 text-slate-900'>
                     Personal Consulting Service
                     <a href="" className='text-decoration-none block text-lg text-slate-600 hover:text-violet-700'>Explore Projects</a>
                     
                     </p>
                    </div>
                    <p className='text-slate-600 w-2/5'>
                    Complete account of the syste all expound the teachings.
                    </p>
                </div>
                <div className='flex'>
                    <div className='flex'>
                    <img className='w-8 h-8 me-2' src={require("../assest/check-mark.png")} alt="" />

                        <p className='ms-4 text-2xl fw-semibold w-4/5 text-slate-900'>
                     Personal Consulting Service
                     <a href="" className='text-decoration-none block text-lg text-slate-600 hover:text-violet-700'>Explore Projects</a>
                     
                     </p>
                    </div>
                    <p className='text-slate-600 w-2/5'>
                    Complete account of the syste all expound the teachings.
                    </p>
                </div>
               </Col>
             </Row>
             {/* Skills ends */}
        {/* We work for starts */}
        <div style={{backgroundImage : `url('https://wp1.themevibrant.com/newwp/counsolve/wp-content/uploads/2023/06/industries-bg.jpg')`,
    backgroundPosition : 'center' ,
    backgroundSize : 'cover',
    backgroundAttachment : 'fixed'
}}
    className='container rounded-3xl my-10'
    >
            <Row className='d-flex flex-column pt-5 flex-md-row justify-center px-10'>
                <Col lg={6} style={{background : 'rgb(46,53,64)',
               opacity:'0.9' }}
                className='px-5 py-10 rounded-ss-3xl'>
                   <div>
                   <p className='fw-bold text-pink-700'>WE WORK FOR</p>
                    <p className='text-white fw-bold text-3xl md:text-5xl mb-10'>Industries We Served</p>
                    {
                        content.map((con)=>{
                            return(
                                <div className='w-10/12'>
                                    <button className='w-100 text-start '
                                    onClick={()=>changecontent(con.id)}>
                                    <hr className='text-white-50' />
                                        <p className='text-lg md:text-2xl text-white-50 '>{con.title}</p>
                                    </button>   
                                </div>
                            )
                        })
                    }
                   </div>
                </Col>
                <Col lg={4}
                id='anime'
                className={`bg-white durationani  h-fit mt-5  mt-lg-auto rounded-tr-3xl p-4 d-flex justify-center`}>
                    <div className={`w-11/12 durationani animate__animated ${anime}`}>
                    <p className='text-2xl font-sans fw-semibold my-3'>
                        {title}
                    </p>
                    <hr />
                    <p className='pt-2 text-lg text-slate-700'>
                       {text}
                    </p>
                    {
                        points.map((point)=>{
                            return(
                                <p className='flex gap-3'>
                                <img className='w-8 h-8 align-self-center' src={require('../assest/fast-forward.png')} alt="" />
                                <p className=''>{point}</p>
                            </p> 
                            )
                        })
                    }
                    <button id='three-rounded' className='px-4  btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Explore More
       </button>
                    </div>
                </Col>
            </Row>


    </div>
        {/* ends */}
         
        {/* <OurTeam/> */}
        <BeliveUs/>
        <ContactLanding/>
    </div>
  )
}

export default AboutsUS