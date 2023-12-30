import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const PeopleTrust = () => {
    let sysarry=[
        "clients-1.png","clients-2.png","clients-3.png","clients-4.png","clients-5.png",
        "clients-6.png","clients-7.png","clients-8.png","clients-10.png"
      ]
    var symbolsettings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true
    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

  return (
    <div>
        {/* Our Clients */}
        <div style={{backgroundColor :"rgb(108,78,167)"}} 
        className='text-center py-16'>
                <p className='text-white fw-semibold'>OUR CLIENTS</p>
                <p className='text-white text-3xl md:text-5xl font-sans fw-semibold'>People Who Trusted Us</p>
                <div className='container my-5'>
        
        <Slider {...symbolsettings}
        className=''
        >
           {
            sysarry.map((sys)=>{
              return(
                <Link>
           <div className="ps-28 sm:ps-0">
              <img src={require(`../assest/${sys}`)} alt="" />
            </div>
            </Link>
              )
            })
           }
            
          
          </Slider> 
        </div>
        </div>
    </div>
  )
}

export default PeopleTrust