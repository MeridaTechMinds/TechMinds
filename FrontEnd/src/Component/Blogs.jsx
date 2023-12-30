import { KeyboardArrowRight } from '@mui/icons-material'
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
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
      let bogs=[
        {
            "id" :1,
            "title":"the villain",
            "url":"../assest/news-20-310x270.jpg",
            "category" : "busines"
        },
        {
            "id" :2,
            "title":"the villain",
            "category" : "investment",
            "url":"../assest/news-21-310x270.jpg"
        },
        {
            "id" :3,
            "title":"the villain",
            "category" : "real estate",
            "url":"../assest/news-22-310x270.jpg"
        },
        {
            "id" :4,
            "title":"the villain",
            "category" : "Gaming",
            "url":"../assest/news-23-310x270.jpg"
        },
        {
            "id" :5,
            "title":"the villain",
            "category" : "Loan",
            "url":"../assest/news-24-310x270.jpg"
        },
        {
            "id" :6,
            "title":"the villain",
            "category" : "investment",
            "url":"../assest/news-25-310x270.jpg"
        },
        {
            "id" :7,
            "title":"the villain",
            "category" : "Business",
            "url":"../assest/news-20-310x270.jpg"
        },
        {
          "id" :1,
          "title":"the villain",
          "url":"../assest/news-20-310x270.jpg",
          "category" : "busines"
      },
      {
          "id" :2,
          "title":"the villain",
          "category" : "investment",
          "url":"../assest/news-21-310x270.jpg"
      },
      {
          "id" :3,
          "title":"the villain",
          "category" : "real estate",
          "url":"../assest/news-22-310x270.jpg"
      },
      {
          "id" :4,
          "title":"the villain",
          "category" : "Gaming",
          "url":"../assest/news-23-310x270.jpg"
      },
      {
          "id" :5,
          "title":"the villain",
          "category" : "Loan",
          "url":"../assest/news-24-310x270.jpg"
      },
      {
          "id" :6,
          "title":"the villain",
          "category" : "investment",
          "url":"../assest/news-25-310x270.jpg"
      },
      {
          "id" :7,
          "title":"the villain",
          "category" : "Business",
          "url":"../assest/news-20-310x270.jpg"
      },
      {
        "id" :1,
        "title":"the villain",
        "url":"../assest/news-20-310x270.jpg",
        "category" : "busines"
    },
    {
        "id" :2,
        "title":"the villain",
        "category" : "investment",
        "url":"../assest/news-21-310x270.jpg"
    },
    {
        "id" :3,
        "title":"the villain",
        "category" : "real estate",
        "url":"../assest/news-22-310x270.jpg"
    },
    {
        "id" :4,
        "title":"the villain",
        "category" : "Gaming",
        "url":"../assest/news-23-310x270.jpg"
    },
    {
        "id" :5,
        "title":"the villain",
        "category" : "Loan",
        "url":"../assest/news-24-310x270.jpg"
    },
    {
        "id" :6,
        "title":"the villain",
        "category" : "investment",
        "url":"../assest/news-25-310x270.jpg"
    },
    {
        "id" :7,
        "title":"the villain",
        "category" : "Business",
        "url":"../assest/news-20-310x270.jpg"
    },
    {
      "id" :1,
      "title":"the villain",
      "url":"../assest/news-20-310x270.jpg",
      "category" : "busines"
  },
  {
      "id" :2,
      "title":"the villain",
      "category" : "investment",
      "url":"../assest/news-21-310x270.jpg"
  },
  {
      "id" :3,
      "title":"the villain",
      "category" : "real estate",
      "url":"../assest/news-22-310x270.jpg"
  },
  {
      "id" :4,
      "title":"the villain",
      "category" : "Gaming",
      "url":"../assest/news-23-310x270.jpg"
  },
  {
      "id" :5,
      "title":"the villain",
      "category" : "Loan",
      "url":"../assest/news-24-310x270.jpg"
  },
  {
      "id" :6,
      "title":"the villain",
      "category" : "investment",
      "url":"../assest/news-25-310x270.jpg"
  },
  {
      "id" :"last",
      "title":"the villain",
      "category" : "Business",
      "url":"../assest/news-20-310x270.jpg"
  }
       
      ]
      let [webblogs,setblogs]=useState([])
     
      useEffect(()=>{
        // axios.get('http://192.168.0.122:9000/api/blog')
        // .then((response)=>{
        //     console.log(response.data);
        // })
        // .catch((error)=>{
        //        console.log(error);
        // })
            const fetch=  ()=>{
             axios.get("http://192.168.0.122:9000/api/blog/")
             .then((response)=>{
                 console.log(response.data);
                 setblogs(response.data)
             })
             .catch((err)=>{
                 console.log(err);
             })
            }
            fetch()
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={"Blogs"}/>
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