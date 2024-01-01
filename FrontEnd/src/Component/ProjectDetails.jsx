import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TitleBanner from './TitleBanner'
import { useNavigate, useParams } from 'react-router'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const ProjectDetails = () => {
    let {name}=useParams()
    let firstlettter =name.charAt(0);
    console.log(firstlettter);
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
    useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '2s');
        setTimeout(() => {
            setanime("")
        }, 2000);
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
    <TitleBanner data={name}/>
    <h2 className='h-20'></h2>
    <Row className='container justify-around mx-auto mb-20'>       
        <Col lg={4} className='mx-auto mt-5'>
            {/* project information */}
           <div className='p-5 text-white rounded-t-3xl rounded-s-3xl bg-violet-600'>
               <p className='text-white text-4xl w-4/5'>Project information</p>
               <hr />
               <p className='text-lg'> client
                <span className='fw-semibold block'>Naxly Info Tech</span>
               </p>
               <p className='text-lg'> Category
                <span className='fw-semibold block'>Business consulting</span>
               </p>
               <p className='text-lg'> Date
                <span className='fw-semibold block'>14th Feb, 2023</span>
               </p>
               <p className='text-lg'> Location
                <span className='fw-semibold block'>Los Angeles , USA</span>
               </p>
           <button type="" className=' bg-slate-50 hover:bg-pink-400 hover:text-slate-50 transi text-violet-900 p-3 fw-semibold ' id="three-rounded">Yes ! I'm Interested</button>

           </div>
           {/* project information end*/}
           {/* Social media */}
           <div className='my-20'>
            <p className='text-slate-900 text-3xl'>Share this project</p>
        <div className='flex gap-3'>    <p className='text-slate-900 hover:text-slate-50 cursor-pointer transi border w-fit p-2 rounded-full hover:bg-slate-900'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></p>
<p className='text-slate-900 hover:text-slate-50 cursor-pointer transi border w-fit p-2 rounded-full hover:bg-slate-900'> 
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg></p>
<p className='text-slate-900 hover:text-slate-50 cursor-pointer transi border w-fit p-2 rounded-full hover:bg-slate-900'> 
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> </p>
        </div>
           </div>
            {/* Giving Wings */}
            <div className='p-4 bg-violet-600 rounded-t-3xl my-4 rounded-s-3xl'>
                <p className='text-white text-3xl '>Giving Wings to your Investment.</p>
                  <p className='text-white'>Actual teachings of the great</p>
                  <button id='three-rounded' className='px-4 text-slate-50 hover:text-blue-950  hover:bg-slate-50 transi fw-semibold p-3 bg-pink-600'>
         Get Support
   </button>
                <img className="rounded-t-full rounded-s-full w-52 ms-auto"  src={require("../assest/news-20-310x270.jpg")} alt="" />
            </div>
        </Col>
        <Col lg={7}>
        <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'><img className='inline mx-3' src={require("../assest/e7b9b29c4fdd4d4ec28699064fe80204.png")} alt="" /> Investment</p>
     <div className='flex '>   
     <span className=' h-fit w-fit p-2 px-4 text-3xl fw-semibold flex  justify-content-center align-items-center
      bg-slate-900 text-white rounded-s-3xl rounded-t-3xl m-3'>{firstlettter} </span>
        <p className='text-slate-600 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta nobis nihil accusamus! Deserunt consequatur eligendi porro totam! A error quis 
            eveniet quisquam rerum, deserunt doloremque voluptas? Iure, ex dicta?
        </p>
    </div>
        <p className='text-slate-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta nobis nihil accusamus! Deserunt consequatur eligendi porro totam! A error quis 
            eveniet quisquam rerum, deserunt doloremque voluptas? Iure, ex dicta?
        </p>
        <img src={require("../assest/news-25.jpg")} alt="" />
        <p className='text-xl md:text-3xl fw-semibold my-10'>Business And Inaguration</p>
        <p className='text-slate-600'>Extremely painful or again is there anyone who loves or case pursues or desires these cases dislike perfectlys imple and to distinguish.</p>
        <p className='text-black'>We keep ourselves up to make your dreams come true,</p>
        <div className='flex flex-wrap'>
            <p className='text-slate-600 w-1/2 flex'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <p className='text-slate-600 '> Who the Arre you taking Belongs to those who fail.</p> </p>
            <p className='text-slate-600 w-1/2 flex'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <p className='text-slate-600 '>  Who the Arre you taking Belongs to those who fail.</p> </p>
            <p className='text-slate-600 w-1/2 flex'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <p className='text-slate-600 '>  Who the Arre you taking Belongs to those who fail.</p> </p>
            <p className='text-slate-600 w-1/2 flex'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <p className='text-slate-600 '>  Who the Arre you taking Belongs to those who fail.</p> </p>
            <p className='text-slate-600 w-1/2 flex'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <p className='text-slate-600 '>  Who the Arre you taking Belongs to those who fail.</p> </p>


        </div>
        {/* Highlights */}
        <div className='p-4 rounded-t-3xl flex rounded-s-3xl bg-slate-800'>
            <img className='w-16 mx-auto my-auto h-16' src={require("../assest/quote (1).png")} alt="" />
            <div className='p-4 text-white text-xl'>
                  <p>
                  Contrary to popular belief, lorem ipsum is not simply random It has roots in a piece 
                  of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
            </div>
        </div>
           
        </Col>   
    </Row>
    <ContactLanding/>
</div>
  )
}

export default ProjectDetails