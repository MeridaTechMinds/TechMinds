import React, { useEffect } from 'react'
import "./nav.css"
import { Link, useNavigate } from 'react-router-dom'
import 'animate.css';
const LogoNav = () => {
  let navigate=useNavigate()
  return (
   <div className=' clr'>
     <div id='top-rounded' className='d-flex bg-white pt-2'>
        <div id='left-side' className='d-flex mt-3 mx-5 w-100 justify-between'>
             <div className='mx-auto mx-sm-0'>
             <img className='cursor-pointer' width={150} onClick={()=>navigate("/")} 
             src={require("../assest/png-01.png")} alt="logo"/>
             </div>
        <button id='three-rounded' onClick={()=>navigate("/contact")} className='fs-5 btn-change d-none d-md-block fw-semibold h-14 w-44 bg-slate-100'>
      Contact
       </button>
        </div>   
    </div>
   </div>
  )
}

export default LogoNav