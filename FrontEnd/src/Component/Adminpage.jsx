import React from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'

const Adminpage = () => {
  return (
    <div>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <div className='my-5'>
            <h3 className='text-center fontfam fw-bolder'>Welcome Admin</h3>
        </div>
    </div>
  )
}

export default Adminpage