import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Body2Landing = () => {
    let navigate =useNavigate()
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
    let [step1,set1]=useState(false)
    let [step2,set2]=useState(false)
    let [step3,set3]=useState(false)
  return (
   <>
   <div style={{
    backgroundPosition : 'center' ,
    backgroundSize : 'cover',
    backgroundAttachment : 'fixed'
}}
    className='container indsbg rounded-3xl my-10'
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
                                    <button 
                                    className='w-100 focus:text-slate-950 focus:bg-slate-50 rounded-t-3xl p-2 pt-3 my-2 focus:rounded-s-3xl border-bottom text-slate-50 text-start '>
                                        <p  onClick={()=>changecontent(con.id)} className='text-lg md:text-2xl'>{con.title}</p>
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
                    <button id='three-rounded' onClick={()=>{navigate(`/service/${title}`)}} className='px-4  btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Explore More
       </button>
                    </div>
                </Col>
            </Row>


    </div>
    {/* How we Works */}
    <div className='container text-center'>
        <div className='h-10'></div>
         <p className='text-clr fw-bold '>HOW WE WORKS</p>
         <p className='text-5xl fw-semibold mb-5'>We Plan for your Growth</p>
        <Row className='justify-around m-sm-0'>
            <Col sm={8} md={5} lg={3} className='flex flex-col p-5 py-2 p-md-0'
            onMouseEnter={()=>{set1(true) }}
            onMouseLeave={()=>set1(false)}
            >
          <div id='img-container' className=' mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src={require('../assest/coworking.png')} alt="" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src={require('../assest/working-1.jpg')} alt="" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='mt-5 transi text-start'>
                       <p className='fw-semibold text-2xl'>Appointment</p>
                       <p className='text-lg'>That they cannot foresee 
                        the pain trouble that are bound ensue equal blame of business .</p>
                        <p className='text-clr transi border-bottom border-violet-700 text-lg fw-bold my-3'>
                           <span style={{color : step1? "rgb(108,78,167)" : "whitesmoke",
                               }}
                            className="text-7xl      transi">
                            01</span> st step</p>
                </div>
            </Col>
            <Col sm={8} md={5} lg={3} className='flex p-5 py-2 p-md-0 position-relative lg:bottom-20 flex-col'
            onMouseEnter={()=>set2(true)}
            onMouseLeave={()=>set2(false)}
            >
          <div id='img-container' className='mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src={require('../assest/paper.png')} alt="" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src={require('../assest/working-2.jpg')} alt="" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='mt-5 transi text-start'>
                       <p className='fw-semibold text-2xl'>Appointment</p>
                       <p className='text-lg'>That they cannot foresee 
                        the pain trouble that are bound ensue equal blame of business .</p>
                        <p className='text-clr transi border-bottom border-violet-700 text-lg fw-bold my-3'>
                           <span style={{color : step2? "rgb(108,78,167)" : "whitesmoke",
                               }}
                            className="text-7xl      transi">
                            02</span> nd step</p>
                </div>
            </Col>
            <Col sm={8} md={5} lg={3} className='flex p-5 py-2 p-md-0 flex-col'
            onMouseEnter={()=>{set3(true)
            
            }}
            onMouseLeave={()=>set3(false)}
            >
          <div id='img-container' className='mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src={require('../assest/research.png')} alt="" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src={require('../assest/working-3.jpg')} alt="" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='my-5 transi text-start'>
                       <p className='fw-semibold text-2xl'>Appointment</p>
                       <p className='text-lg'>That they cannot foresee 
                        the pain trouble that are bound ensue equal blame of business .</p>
                        <p className='text-clr transi text-lg fw-bold border-bottom border-violet-700 my-3'>
                           <span style={{color : step3? "rgb(108,78,167)" : "whitesmoke",
                               }}
                            className="text-7xl transi">
                            03</span> rd step</p>
                </div>
            </Col>
        </Row>
        <div className='d-flex flex-col align-items-center sm:flex-row justify-center gap-3'>
        <p className='fw-semibold text-lg flex'>Start Investing with Smart Idea. </p>
         <Link className='text-decoration-none text-slate-800'> 
         <p className='text-lg hover:text-violet-950 fw-semibold '> ! Appointment</p>
          </Link>
        </div>
    </div>
    {/* End */}
   </>
  )
}

export default Body2Landing