
import React from 'react'
import { useNavigate } from 'react-router'

const TitleBanner = (props) => {
    let navigate=useNavigate()

  return (
    <div>
        <div id='head' className='position-relative transi'>
            <div id="servicetitle" className='d-block' alt="" ></div>
             <p style={{backgroundColor :"rgba(0,0,0,0.5)"}} 
             className='position-absolute text-white text-3xl md:text-7xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-center  justify-center'>
             {props.data}
             </p>
                <p 
             className='position-absolute text-white text-xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-end  justify-start p-5'>
                <a onClick={()=>navigate("/")} className='cursor-pointer no-underline text-white hover:underline'>Home</a> 
                 <span className='flex align-items-end mx-1'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                  class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> {props.data} 
                 </span>
</p>
        </div>
    </div>
  )
}

export default TitleBanner