import React from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom'
import 'animate.css';
const LogoNav = () => {
  let navigate=useNavigate()
  return (
   <div style={{backgroundColor:"rgb(19,19,60)"}}>
     <div id='top-rounded' className='d-flex align-items-center justify-between px-5 bg-white py-2'>
        <div id='left-side' className='d-flex w-100 '>
             <div className='mx-auto mx-lg-0'>
             <img className='cursor-pointer' width={150} onClick={()=>navigate("/")} 
             src={require("../assest/png-01.png")} alt="logo"/>
             </div>
             {/* <div>
               <p className='w-56'>
               Leading providers of investment
advisory solutions.
               </p>
             </div> */}
        </div>  
        <div id='right-side' className='d-none d-lg-flex'>
       {/* <button className='rounded-t-3xl text-slate-500 hover:text-violet-600 transi rounded-s-3xl w-44 h-14 cursor-pointer bg-slate-50 mx-2 text-xl'>
       +91 92945780
       </button> */}
        <button id='three-rounded' onClick={()=>navigate("/contact")} 
        className='fs-5 transi hover:bg-pink-500 hover:text-slate-50  fw-semibold h-14 w-44 bg-slate-100'>
      Contact
       </button>
          </div> 
    </div>
   </div>
  )
}

export default LogoNav