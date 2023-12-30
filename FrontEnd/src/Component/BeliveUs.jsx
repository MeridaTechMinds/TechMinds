import React from 'react'

const BeliveUs = () => {
  return (
    <div>
         <div className='blogbg flex flex-col align-start p-4 sm:p-5 align-items-md-center justify-content-sm-center my-10'>
          
          <p className='text-white text-4xl sm:text-5xl md:text-7xl sm:w-[700px] md:text-center fw-semibold'>Believe us when
it comes to investment</p>
        <div className='flex flex-col mt-4 sm:flex-row sm:gap-7'>
        <img width={170} id='three-rounded' src={require("../assest/cart-1.jpg")} alt="" />
<div className='sm:w-[300px] '>
<p className='text-slate-400 text-lg'>The moment, so blinded by desire, that they cannot foresee and trouble that are bound to ensue.</p>
<button id='three-rounded' className='px-4 text-white  btn-change fw-semibold p-3 bg-violet-700'>
      Send request
       </button>
        </div>
</div>
</div>
    </div>
  )
}

export default BeliveUs