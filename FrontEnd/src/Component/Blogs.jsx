import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import Pagination from './Pagination'
import TitleBanner from './TitleBanner'
import axios from 'axios'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const Blogs = () => {
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
     
      let [webblogs,setblogs]=useState([])
      let [boolean,setboolean]=useState(false)
      useEffect(()=>{
            const fetch=  ()=>{
             axios.get("http://65.1.24.6:8000/api/blog/")
             .then((response)=>{
                 console.log(response.data);
                 setblogs(response.data);
             })
             .catch((err)=>{
                 console.log(err);
             })
             if(webblogs.length>0){
              setboolean(true)
            }
            } 
            fetch()
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={"Blog"}/>
        {/* Grid View */}
        <h1 className='h-20'></h1>
         <Pagination data={webblogs}/> 
        
        
        {/* Belive us */}

       <BeliveUs/>
       {/*  */}
       <ContactLanding/>
    </div>
  )
}

export default Blogs