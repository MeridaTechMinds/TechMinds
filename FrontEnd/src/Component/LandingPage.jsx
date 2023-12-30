import React, { useEffect, useState } from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import 'animate.css';
import "../NavBar/nav.css"
import "../Component/home.css"
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import HomeBanner from './HomeBanner';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import Body1 from './Body1';
import Chooseus from './Chooseus';
import Body2Landing from './Body2Landing';
import ContactLanding from './ContactLanding';
import LandinBLog from './LandinBLog';
import MainNavBar from './MainNavBar';
const LandingPage = () => {
  let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
  return (
    <section id="home" className={`${anime} animate__animated transi durationani `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        {/* <MainNavBar/> */}
      <HomeBanner/>
      <Body1></Body1>
       <Chooseus/>
       <Body2Landing/>
       <LandinBLog/>
       <ContactLanding/>
      </section>
  )
}

export default LandingPage