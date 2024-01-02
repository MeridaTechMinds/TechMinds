import React from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import Slider from 'react-slick';

const Solutions = () => {
  let navigate=useNavigate()
    let cards=[
       {
        "title":"Traditional Consulting",
        "url":"../assest/service-8-170x170.jpg"
       },
       {
        "title":"Portfolio management",
        "url":"../assest/service-9-170x170.jpg"
       },
       {
        "title":"Asset allocation ",
        "url":"../assest/service-10-170x170.jpg"
       },
       {
        "title":"Risk Management ",
        "url":"../assest/service-11-170x170.jpg"
       },
       {
        "title":"Fiduciary Consulting",
        "url":"../assest/service-12-170x170.jpg"
       },
       {
        "title":"Policy Development",
        "url":"../assest/service-13-170x170.jpg"
       }

    ]
    var settings = {
        dots: true,
        slidesToShow: 4,
        initialSlide: 0,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
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
  return (
    <div>
        <div className='container '>
            <p className='text-violet-700 fw-semibold'>SOLUTIONS</p>
            <p className='text-3xl lg:text-5xl fw-semibold  '>Growing with smart  ideas </p>
        </div>
        <div className='container my-10'>

       
        <Slider {...settings}>
            {
                cards.map((card)=>{
                   return(
                    <div className='w-[300px] rounded-3xl bg-slate-100 hover:bg-slate-50 shadow  p-5'>
                        <p className='text-2xl hover:text-violet-700 transi cursor-pointer fw-semibold w-3/5'>{card.title}</p>
                        <Image className='rounded-full' src={card.url} alt='missing'>
                          
                        </Image>
                        <div onClick={()=>{navigate(`/service/${card.title}`)}}
                        className='rounded-t-full ms-auto cursor-pointer rounded-s-full bg-slate-200 hover:bg-violet-700 w-14 h-14   text-slate-900 hover:text-slate-50'>
                                 <p className='hover:-rotate-45 w-[100%] flex justify-center transition duration-700 align-items-center h-[100%]'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
</svg></p> 
                        </div>
                        
                    </div>
                   )
                })
            }

        </Slider>
        </div>
    </div>
  )
}

export default Solutions