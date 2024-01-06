import React, { useEffect, useState } from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import TitleBanner from './TitleBanner'

const Testimonial = () => {
    let [anime,setanime]=useState("")
    useEffect(()=>{
      setanime("animate__fadeIn");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
    },[])
  return (
    <div className={`${anime} animate__animated transi durationani `} >
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={"Testimonial"}/>
        <ContactLanding/>
    </div>
  )
}

export default Testimonial