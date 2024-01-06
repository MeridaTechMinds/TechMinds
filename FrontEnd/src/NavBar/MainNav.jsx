import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
const MainNav = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [aboutboolean,setaboutboolean]=useState(false);
  const [serviceboolean,setserviceboolean]=useState(false);
  const [SCboolean,setSCboolean]=useState(false);
  const [DMboolean,setDMboolean]=useState(false);
  const [Bboolean,setBboolean]=useState(false);
  const [BCboolean,setBCboolean]=useState(false);


  const [navshow,setnav]=useState(false);
  let navigate =useNavigate()
  
  return (
    <div className={`border-none clr transi sticky-top `}>
         <Navbar key='lg' expand="lg" className="transi py-3 bg-body-tertiary">
          <Container fluid>
            <div className=' lg:w-1/2'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={()=>setnav(true)}
            className='shadow-none border-0' />
            <Navbar.Offcanvas
              show={navshow}
              onHide={()=>setnav(false)}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className="trans"
            >
              <Offcanvas.Header >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}
                className='flex w-full justify-between align-items-center'>
                <div className='mt-3 mx-sm-0'>
                <img onClick={()=>{navigate("/");setnav(false)}} width={150} src={require("../assest/merida website logo white.png")} alt="logo" />
             </div>
                <img className='w-[20px] h-[18px]' onClick={()=>setnav(false)} src={require("../assest/close.png")} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex flex-column justify-between'>
                <div>
                <Nav className="px-5 fw-semibold justify-content-start justify-content-between  flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{navigate("/");setnav(false) }} className='fontfam text-lg'><button className='fontfam text-lg'>Home</button></Nav.Link>
                  <Nav.Link><div onMouseLeave={()=>setaboutboolean(false)} className="drpdown">
                  <button onClick={()=>setaboutboolean(!aboutboolean)}
                  onMouseEnter={()=>setaboutboolean(true)} 
                  
                  className="drpbtn fontfam text-lg">About 
                
                  <svg width="20" height="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                   class=" inline ms-2 d-lg-none">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
 </button>
  <div style={{
    display : aboutboolean ? "block" : "none"
  }} className="drpdown-content xl:bg-slate-50 bg-red-200 text-slate-50 transi">
    <Link to={"/about"} onClick={()=>{navigate("/about");setnav(false) }}
     className='text-decoration-none fs-6 fontfam text-lg w-full hover:scale-105  hover:text-violet-600'>
      About Company</Link>
    <Link to={"/ourteam"} onClick={()=>{navigate("/ourteam");setnav(false) }}
     className='text-decoration-none fs-6 fontfam text-lg hover:scale-105 hover:text-violet-600' >
      Our Team </Link>
  </div>
</div>
</Nav.Link>
{/* service start */}
<Nav.Link>
  <div onMouseLeave={()=>setserviceboolean(false)} className="drpdown ">
   <button onClick={()=>setserviceboolean(!serviceboolean)}
                  onMouseEnter={()=>setserviceboolean(true)} 
                  
    className="drpbtn fontfam text-lg">Services 
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class=" d-lg-none ms-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></button>
  <div style={{
    display : serviceboolean ? "block" : "none"
  }} 
  className="drpdown-content2">
    {/* <Nav.Link onClick={()=>{navigate("/service");setnav(false) }} 
    className='text-decoration-none text-slate-600'>Service </Nav.Link> */}
    <Nav.Link onMouseLeave={()=>setSCboolean(false)}
    className='text-decoration-none h-fit drpdown3 text-slate-600' >
      <button  onClick={()=>setSCboolean(!SCboolean)}
                  onMouseEnter={()=>setSCboolean(true)} 
                  
      className='drpbtn fontfam text-lg d-block fs-6 text-start w-max'> Software Consulting
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="ms-2 d-none d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class=" d-lg-none ms-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></button> 
       <div style={{
    display : SCboolean ? "block" : "none"
  }}
        className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[300px] '>
           <Nav.Link 
           onClick={()=>{navigate("/service/Custom Software Development");setnav(false);setserviceboolean(false) }} >
            Custom Software Development</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Mobile App Development");setnav(false);setserviceboolean(false) }} >
             Mobile App Development</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Website Development");setnav(false);setserviceboolean(false) }} >
            Website Development</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/E-Commerce Development");setnav(false);setserviceboolean(false) }} >
            E-Commerce Development</Nav.Link>
           </div>
       </div>
      </Nav.Link>
      <Nav.Link onClick={()=>setDMboolean(!DMboolean)}
      onMouseEnter={()=>setDMboolean(true)} onMouseLeave={()=>setDMboolean(false)}
    className='text-decoration-none h-fit fontfam text-lg drpdown3 text-slate-600' >
      <button 
      className='drpbtn  d-block text-start w-max'> Digital Marketing
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="ms-2 d-none d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class="ms-2 d-lg-none inline ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> </button> 
       <div style={{
    display : DMboolean ? "block" : "none"
  }} 
       className='drpdown-content3 bg-transparent  left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[270px]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Search Engine Optimization");setnav(false);setserviceboolean(false) }} >
            Search Engine Optimization</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Search Engine Marketing");setnav(false);setserviceboolean(false) }} >
             Search Engine Marketing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Social Media Marketing");setnav(false);setserviceboolean(false) }} >
            Social Media Marketing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Lead Generation");setnav(false);setserviceboolean(false) }} >
            Lead Generation</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Email Marketing");setnav(false);setserviceboolean(false) }} >
            Email Marketing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Affiliate Marketing");setnav(false);setserviceboolean(false) }} >
            Affiliate Marketing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Content Marketing");setnav(false);setserviceboolean(false) }} >
            Content Marketing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Influencer Marketing");setnav(false);setserviceboolean(false) }} >
            Influencer Marketing</Nav.Link>
           </div>
       </div>
      </Nav.Link>
      <Nav.Link onClick={()=>setBboolean(!Bboolean)}
      onMouseEnter={()=>setBboolean(true)} 
      onMouseLeave={()=>setBboolean(false)}
    className='text-decoration-none fontfam text-lg h-fit drpdown3 text-slate-600' >
      <button className='drpbtn  d-block text-start w-max'> Branding
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="d-none ms-2 d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class="ms-2 d-lg-none inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> </button> 
       <div style={{
    display : Bboolean ? "block" : "none"
  }} 
        className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[250px]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Graphic Designing");setnav(false);setserviceboolean(false) }} >
            Graphic Designing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/UI & UX Designing");setnav(false);setserviceboolean(false) }} >
             UI & UX Designing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Logo Designing");setnav(false);setserviceboolean(false) }} >
            Logo Designing</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Content Creation");setnav(false);setserviceboolean(false) }} >
            Content Creation</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Profile Maintenance");setnav(false);setserviceboolean(false) }} >
            Profile Maintenance</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Ad Shoot & Photography");setnav(false);setserviceboolean(false) }} >
            Ad Shoot & Photography</Nav.Link>
           </div>
       </div>
      </Nav.Link> 
      <Nav.Link  onClick={()=>setBCboolean(!BCboolean)}
      onMouseEnter={()=>setBCboolean(true)} 
      onMouseLeave={()=>setBCboolean(false)}
    className='text-decoration-none fontfam text-lg h-fit drpdown3 text-slate-600' >
      <button className='drpbtn  d-block text-start w-max'> Business Consulting
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="d-none ms-2 d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class="ms-2 d-lg-none inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> </button> 
       <div style={{
    display : BCboolean ? "block" : "none"
  }} 
       className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[100%]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Startups");setnav(false);setserviceboolean(false) }} >
            Startups</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Sick Units Revival");setnav(false);setserviceboolean(false) }} >
             Sick Units Revival</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Investors");setnav(false);setserviceboolean(false) }} >
            Investors</Nav.Link>
           </div>
       </div>
      </Nav.Link> 
     
  </div>
</div>
</Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/project");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Portfolio</button> </Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/testimonial");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Testimonial</button> </Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/blogs");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Blog</button> </Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/contact");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Contact</button> </Nav.Link>
                  
                </Nav>
                </div>
              <div className='d-lg-none ms-10'>
              <p className='fontfam text-2xl fw-bolder'>Contact Info</p>
              <p className='fontfam text-lg fw-bolder'>Merida Tech Minds</p>
              <p className='mulish text-slate-600'>
              <span>21-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</span>
              <span className='cursor-pointer my-2 hover:text-violet-600 block'>+91 8904599283</span>
              <span className='cursor-pointer hover:text-violet-600 block'>info@meridatechminds.com</span>
            </p>
            <div className='flex gap-2'>
              <a href='https://www.facebook.com/MeridaTechMinds/' target='_blank' className='rounded-full text-slate-50 hover:text-violet-700 transi cursor-pointer p-2' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
              </a>
              <a href='https://www.linkedin.com/company/merida-tech-minds/' target='_blank' className='rounded-full text-slate-50 hover:text-violet-700 transi cursor-pointer p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg></a>
<a  href='https://www.instagram.com/meridatechminds_/' target='_blank'
 className='rounded-full text-slate-50 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
<a href='https://twitter.com/MTechminds/' target='_blank' className='rounded-full text-slate-50 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg></a>
<a href='https://in.pinterest.com/meridatechminds/' target='_blank' className='rounded-full text-slate-50 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
</svg></a>
            </div>
          </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            </div>
            <div className='d-flex lg:mx-10 '>
            {/* <Form className="d-flex shadow-none">
                  <input
                    type="search"
                    placeholder='Search'
                    className="me-2 outline-none focus:outline-violet-500 p-3 w-[250px] border rounded"
                    aria-label="Search"
                  />
                </Form> */}
                <button className='mx-2 bg-inherit'  onClick={handleShow}>
                <img className='w-6' src={require("../assest/merida logo.png")} alt="Awesome Image"/>
                 </button>
            </div>
          </Container>
          {/* Logo off canvas */}
      <Offcanvas show={show} 
      onHide={handleClose}
     
      className="p-4 lg:w-2/5 transi text-black">
        <Offcanvas.Header closeButton className=''>
          <Offcanvas.Title>
          <div className='mx-auto mx-sm-0'>
             <img width={130} src={require("../assest/png-01.png")} alt="logo"/>
             </div>
          </Offcanvas.Title>
          </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column justify-between'>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <div className=''>
            <p className='fontfam text-2xl fw-bolder'>Contact Info</p>
            <p className='fontfam text-lg fw-bolder'>Merida Tech Minds</p>
            <p className='mulish text-slate-600'>
              <span>20-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</span>
              <span className='cursor-pointer my-2 hover:text-violet-600 block'>+91 8904599283</span>
              <span className='cursor-pointer hover:text-violet-600 block'>info@meridatechminds.com</span>
            </p>
            <div className='flex gap-2'>
            <a href='https://www.facebook.com/MeridaTechMinds/' target='_blank' className='rounded-full text-slate-500 hover:text-violet-700 transi cursor-pointer p-2' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
              </a>
              <a href='https://www.linkedin.com/company/merida-tech-minds/' target='_blank' className='rounded-full text-slate-500 hover:text-violet-700 transi cursor-pointer p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg></a>
<a  href='https://www.instagram.com/meridatechminds_/' target='_blank'
 className='rounded-full text-slate-500 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
<a href='https://twitter.com/MTechminds/' target='_blank' className='rounded-full text-slate-500 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg></a>
<a href='https://in.pinterest.com/meridatechminds/' target='_blank' className='rounded-full text-slate-500 hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
</svg></a>
            </div>
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
        </Navbar>
        
    </div>
  )
}

export default MainNav