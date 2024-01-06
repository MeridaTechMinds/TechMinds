import React, { useState } from 'react'
import "../NavBar/nav.css"
import "./home.css"
import { Col, Image, Row } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
const Chooseus = () => {
  const [isflip,setisflip]=useState(false)
  const [isflipcard2,setisflipcard2]=useState(false)
  const [isflipcard3,setisflipcard3]=useState(false)
  const [isflipcard4,setisflipcard4]=useState(false)
  const [isflipcard5,setisflipcard5]=useState(false)
  const [isflipcard6,setisflipcard6]=useState(false)
  return (
    <div className='mt-10'>
        <p className='h-10'></p>
        <p className='text-center blclr text-xl fontfam fw-bolder'>
         WHY CHOOSE US</p>
        <p className='text-center md:text-5xl p-3 text-4xl fontfam   fw-bolder text-black'>
         Reason To Choose Merida</p>
           <article className="p-3 d-flex flex-column flex-xl-row  container">
           {/* Card section 1 */}
           <Row className='d-flex flex-column justify-center align-items-center p-4 '>
           <Col sm={7} md={9} lg={8} xl={12}
           onClick={()=>setisflip(!isflip)}
           onMouseEnter={()=>setisflip(true)}
           onMouseLeave={()=>setisflip(false)}
            style={{backgroundColor : isflip? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflip? "whitesmoke": "black" }}
            className='transition duration-300 position-relative xl:left-20 border flex rounded-s-3xl my-4
             bg-slate-200'>
               {/* text area md:w-[200px] xl:w-[230px] h-[220px] sm:h-[180px] */}
      <div className=' py-4 w-[100%] xl:w-[200px] h-[220px] sm:h-[180px] ps-2'>
            <ReactCardFlip flipDirection='vertical' className="" isFlipped={isflip}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl  fontfam'>Extensive Knowledge</p> 
                 <p className=''>Benifits from our wealth of expertise.</p>
              </div>
              <div className='thebackcard' >
              <p className='fw-bolder fontfam'>
               Benifits from our wealth of expertise, 
               ensuring informed desicions and Solutions
                  tailored to your unique requirements. </p> 
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 lg:left-10 xl:left-14'>
               <div style={{backgroundColor : isflip? "rgb(204,92,129)" : "rgb(81,55,133)" }}
                className='lg:w-[15px] w-6 h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflip? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 h-24 pt-4 transi lg:w-[70px]
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/clock.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={8} xl={12}
            onClick={()=>setisflipcard2(!isflipcard2)}
            onMouseEnter={()=>setisflipcard2(true)}
            onMouseLeave={()=>setisflipcard2(false)}
            style={{backgroundColor : isflipcard2? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflipcard2? "whitesmoke": "black" }}
            className='my-4 transition duration-300 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 w-[100%] xl:w-[230px] h-[220px] sm:h-[180px] ps-2 '>
              <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard2}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl fontfam'>Team Approach</p> 
                 <p>Expirence synergy as our collabrative team works seamlessly

                 </p>
              </div>
              <div className='thebackcard ' >
                 <p> Experience synergy as our collaborative team works seamlessly, 
                  bringing diverse skills together to address your challenges comprehensively. </p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 lg:left-10 xl:left-8'>
               <div style={{backgroundColor : isflipcard2? "rgb(204,92,129)" : "rgb(81,55,133)" }}
               className='w-[15px] h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflipcard2? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 h-24 w-[70px] pt-4 transi
                rounded-es-3xl rounded-tr-3xl bg-violet-600 text-white'>
                    <img src={require("../assest/united.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={8} xl={12}
            onClick={()=>setisflipcard3(!isflipcard3)}
            onMouseEnter={()=>setisflipcard3(true)}
            onMouseLeave={()=>setisflipcard3(false)}
            style={{backgroundColor : isflipcard3? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflipcard3? "whitesmoke": "black" }}
             className='my-4 transition duration-300 position-relative xl:left-16 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 w-[100%] xl:w-[230px] h-[220px] sm:h-[180px] ps-2 md:p-6 '> 
            <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard3}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl fontfam'>On-Time Delivery:</p> 
                 <p>Count on us for punctual project completion</p>
              </div>
              <div className='thebackcard' > 
                 <p> Count on us for punctual project completion, meeting
                   deadlines with precision and ensuring your goals are achieved on schedule.</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 lg:left-10 xl:left-8'>
               <div style={{backgroundColor : isflipcard3? "rgb(204,92,129)" : "rgb(81,55,133)" }}
               className='w-6 lg:w-[15px] h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflipcard3? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 transi h-24 pt-4 lg:w-[70px]
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/personal-computer.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
           </Row>
            
            {/* Image round */}
            <div id='experience' className='xl:w-1/2 d-flex align-items-center justify-content-center  mx-10 my-2'>
                    <Image src={require(`../assest/chooseus-1.jpg`)}></Image>
                 </div>
            {/* Card section 2  */}
            <Row className='d-flex p-4 sm:p-0 align-items-center flex-column'>
            <Col sm={7} md={9} lg={8} xl={12} 
            onClick={()=>setisflipcard4(!isflipcard4)}
            onMouseEnter={()=>setisflipcard4(true)}
            onMouseLeave={()=>setisflipcard4(false)}
            style={{backgroundColor : isflipcard4? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflipcard4? "whitesmoke": "black" }}
            className='transition duration-300 position-relative xl:right-20 border flex rounded-s-3xl my-4 bg-slate-200'>
            <div className='py-4 w-[100%] xl:w-[230px] h-[220px] sm:h-[180px] ps-2 '>
               <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard4}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl fontfam'>Risk Management:</p> 
                 <p>Trust our robust risk management strategies</p>
              </div>
              <div className='thebackcard' >
                 <p>Trust our robust risk management strategies, 
                  safeguarding your ventures and providing a secure foundation for success.</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 xl:left-8'>
               <div style={{backgroundColor : isflipcard4? "rgb(204,92,129)" : "rgb(81,55,133)" }}
                className='w-6 xl:w-[15px] transi h-6 rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflipcard4? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 xl:w-[70px] h-24 pt-4
                rounded-es-3xl transi rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/risk-management.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={8} xl={12} 
            onClick={()=>setisflipcard5(!isflipcard5)}
            onMouseEnter={()=>setisflipcard5(true)}
            onMouseLeave={()=>setisflipcard5(false)}
            style={{backgroundColor : isflipcard5? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflipcard5? "whitesmoke": "black" }}
            className='my-4 transition duration-300 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 w-[100%] xl:w-[230px] h-[220px] sm:h-[180px] ps-2'>
               <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard5}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl fontfam'>Advanced Tech</p> 
                 <p>Stay ahead with cutting-edge technology at your fingertips</p>
              </div>
              <div className='thebackcard' >
                 <p>Stay ahead with cutting-edge technology at your fingertips,
                   empowering your endeavors with the latest innovations and efficiencies.</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 xl:left-8'>
               <div style={{backgroundColor : isflipcard5? "rgb(204,92,129)" : "rgb(81,55,133)" }}
                className='w-6 xl:w-[15px] h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflipcard5? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 h-24 pt-4 transi xl:w-[70px]
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/advice.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={8} xl={12} 
            onClick={()=>setisflipcard6(!isflipcard6)}
            onMouseEnter={()=>setisflipcard6(true)}
            onMouseLeave={()=>setisflipcard6(false)}
            style={{backgroundColor : isflipcard6? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflipcard6? "whitesmoke": "black" }}
            className='my-4 transition duration-300 position-relative xl:right-20 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 w-[100%] xl:w-[230px] h-[220px] sm:h-[180px] ps-2 md:p-6 '>
               <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard6}>
              <div className='thefrontcard'>
                
              <p className='fw-bolder text-xl fontfam'>Customized Advice</p> 
                 <p>Receive personalized guidance that aligns with your goals</p>
              </div>
              <div className='thebackcard' >
                
                 <p> Receive personalized guidance that aligns with your goals, 
                  as our expert advisors tailor advice to suit your specific business needs.</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7 xl:left-8'>
               <div style={{backgroundColor : isflipcard6? "rgb(204,92,129)" : "rgb(81,55,133)" }}
               className='w-6 xl:w-[15px] h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflipcard6? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 xl:w-[70px] h-24 pt-4
                rounded-es-3xl transi rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/book.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
           </Row>
           </article>
         
     
          
    </div>
  )
}

export default Chooseus