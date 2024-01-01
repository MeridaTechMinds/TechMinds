import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import { Card, Container } from 'react-bootstrap'
import Slider from 'react-slick'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import TitleBanner from './TitleBanner'
import ContactLanding from './ContactLanding'

const OurTeam = () => {
  var settings = {
    dots: false,
    speed: 500,
    arrows : false,
    slidesToShow: 3,
    initialSlide: 0,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: false,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
      <MiniNav/>
        <LogoNav/>
        <MainNav/>
   <TitleBanner data={"Our Team"}/>
    <Container className='mx-auto my-20'>
      <p className='text-clr fw-semibold ms-3'>LEADERSHIP</p>
      <p className='text-5xl fw-semibold'>Team Behind Company</p>
       <Slider {...settings} className='my-10'>
       <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" className='zoomin' width={100} src="../assest/team-3.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Hermoni </Card.Title>
        <Card.Text> 
          Some quick example text to build on the card title and make up the  bulk of the card's content. 
                            <span className='cursor-pointer text-black fw-semibold'> Read more</span>
         
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-1.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-2.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-1.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
       </Slider>

      <p className='text-lg transi hover:text-violet-700 text-center cursor-pointer'>View All Members
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> </p>
    </Container>
    <BeliveUs/>
    <ContactLanding/>
</div>

  )
}

export default OurTeam