
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import { Image } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import TitleBanner from './TitleBanner'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const Project = () => {
    let navigate=useNavigate()
    
     let arryobj=[
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-17-370x470.jpg"
        },
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-18-370x470.jpg"

        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-20-370x470.jpg",
            "category" : "Money"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-21-370x470.jpg",
            "category" : "Investment"
        },
       
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-20-370x470.jpg",
        "category" : "Money 4"
    },
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-21-370x470.jpg",
        "category" : "Investment7"
    },
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-22-370x470.jpg",
        "category" : "Honey"
    },
    {
        "title" : "Retired plan",
        "photo" :"../assest/project-18-370x470.jpg",
        "category" : "Investment"
    }
     ]
     const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    const itemsPerPage=6;
    let [anime,setanime]=useState("")
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(arryobj.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(arryobj.length / itemsPerPage));
    },[arryobj,itemOffset])
    useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
    },[])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % arryobj.length;
      setItemOffset(newOffset);
    };
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
        <TitleBanner data={"Portfolio"}/>
        <h1 className='h-20'></h1>
         <div className='container mulish fw-bolder text-lg flex flex-wrap justify-around mx-auto'>
            <p className='cursor-pointer mx-1 text-salte-900'>View All</p>
            <p className='cursor-pointer mx-1 text-salte-900'>Business</p>
            <p className='cursor-pointer mx-1 text-salte-900'>Investment</p>
            <p className='cursor-pointer mx-1 text-salte-900'>Innovative</p>
            <p className='cursor-pointer mx-1 text-salte-900'>Consulting</p>
            <p className='cursor-pointer mx-1 text-salte-900'>Management</p>
         </div>
        <>
         <div className={`flex ${anime} animate__animated transi durationani  flex-wrap mx-auto mt-3  container-lg gap-3 justify-between`}>
                   {
                    currentItems.map((obj)=>{
                    //   console.log(obj.photo);
                        return(
                <div className='position-relative mx-auto transi w-auto h-auto'>
                  
                    {/* <img  className='d-block w-[100%] rounded-3xl'
                     src={require(`../assest/project-17-370x470.jpg`)} alt="" /> */}
                     <Image  className='d-block w-[100%] rounded-3xl' 
                     src={obj.photo} alt='missing'>

                     </Image>
                    <div  id='opchi'
                    className='position-absolute rounded-3xl d-flex align-items-end transi  p-3 md:p-5 justify-center top-0 left-0 w-[100%] h-[100%]'>
                        <div id='three-rounded'  className='bg-slate-100 py-3 rounded-t-3xl rounded-s-3xl w-full mp-3 px-4'>
                        <p className='text-violet-600'>{obj.category}</p>
                        <button onClick={()=>{
                            navigate(`/project/${obj.title}`)
                        }} className= 'lg:text-xl text-slate-900 transi text-start py-2 hover:text-violet-600'>
                            {obj.title}</button>
                        </div>
                    </div>
                   </div>
                         
                        )
                    })
                   }
                   </div>
                  <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />  
    </>  
        {/* Belive us */}
        <BeliveUs/>
{/* Bielive us ends */}
<ContactLanding/>
    </div>
  )
}

export default Project