
import React, { useEffect, useState } from 'react'
import { Col, Image } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';
const Pagination = (props) => {
    const {data} =props;
    console.log(data);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    const itemsPerPage=12;
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    },[itemOffset,itemsPerPage,data])
    // recent blogs
    let recentdata=data.slice(0,3)
    sessionStorage.setItem("recentblog",JSON.stringify(recentdata))
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  let navigate=useNavigate()
    return (
      <>
        <div className='flex flex-wrap mx-auto mt-3 container-lg gap-3 justify-between'>
            {
                currentItems.map((item,index)=>{
                  let date=""+item.created_at;
                  let months=["","January","February","March","April","May","June","July",
                "August","September","October","November","December"]
                  let year=date.slice(0,4)
                  let month=""+(months.slice(date.slice(5,7),date.slice(5,7)+1))
                  console.log(month);
                  let dte=date.slice(8,10)
                  // const encryptedData = CryptoJS.AES.encrypt(dataToEncrypt, secretKey).toString();

                    return(
                        <div className="rounded w-[300px] md:w-[350px] mx-auto position-relative transi border-2 p-3 py-3">
                           
                            <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'>{item.Category}</p>
                            <p className='fontfam text-[18px] fw-bolder'>On <span className='text-slate-600'>
                               {month} {dte}, {year}</span> </p>
                            <div className='position-relative'>
                            <Image  className='d-block w-[100%] rounded-s-3xl rounded-t-3xl' 
                             src={item.img} alt='missing'>
                             </Image>
                             <div id='opchi' 
                             className='position-absolute rounded-t-3xl rounded-s-3xl 
                             flex p-10 align-items-end justify-end left-0 top-0 w-[100%] h-[100%] '>
                                   <p className='bg-white rounded-t-3xl h-fit rounded-s-3xl w-fit p-2'>
                                    <img onClick={()=>navigate(`/blog/${item.slug}`)}
                                     className='w-8 cursor-pointer h-8' src={require("../assest/zoom.png")} alt="" />
                                   </p>
                            </div>
                            </div>
                            <p className='text-3xl fontfam fw-bolder mt-2'>{item.Main_Title}</p>
                            <p onClick={()=>{
                                        navigate(`/blog/${item.slug}`)
                                    }} className='cursor-pointer hover:text-violet-700 fontfam fw-semibold '>Explore more <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="inline">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                  </svg> </p>
                        
                            
                        </div>
                    )

                })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </>
    );
}

export default Pagination