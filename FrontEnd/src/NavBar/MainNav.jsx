import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
const MainNav = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <div className='mx-auto mt-3 mx-sm-0'>
                <img width={150} src={require("../assest/merida website logo white.png")} alt="logo" />
             </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex flex-column justify-between'>
                <div>
                <Nav className="px-5 fw-semibold justify-content-start justify-content-between  flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{navigate("/");setnav(false) }} className='fontfam text-lg'><button className='fontfam text-lg'>Home</button></Nav.Link>
                  <Nav.Link><div className="drpdown ">
                  <button className="drpbtn fontfam text-lg">About 
                
                  <svg width="20" height="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                   class=" inline ms-2 d-lg-none">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
 </button>
  <div className="drpdown-content xl:bg-slate-50 bg-red-200 text-slate-50 transi">
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
<Nav.Link><div className="drpdown ">
   <button className="drpbtn fontfam text-lg">Service 
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class=" d-lg-none ms-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></button>
  <div className="drpdown-content2">
    <Nav.Link onClick={()=>{navigate("/service");setnav(false) }} 
    className='text-decoration-none text-slate-600'>Service </Nav.Link>
    <Nav.Link 
    className='text-decoration-none h-fit drpdown3 text-slate-600' >
      <button className='drpbtn fontfam text-lg d-block fs-6 text-start w-max'> Traditional Cosulting
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="ms-2 d-none d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class=" d-lg-none ms-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></button> 
       <div className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[100%]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transfo</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
             ready</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transformers are ready</Nav.Link>
           </div>
       </div>
      </Nav.Link>
      <Nav.Link 
    className='text-decoration-none h-fit fontfam text-lg drpdown3 text-slate-600' >
      <button className='drpbtn  d-block text-start w-max'> Traditional Cosulting
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="ms-2 d-none d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class="ms-2 d-lg-none inline ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> </button> 
       <div className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[100%]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transfo</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
             ready</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transformers are ready</Nav.Link>
           </div>
       </div>
      </Nav.Link>
      <Nav.Link 
    className='text-decoration-none fontfam text-lg h-fit drpdown3 text-slate-600' >
      <button className='drpbtn  d-block text-start w-max'> Traditional Cosulting
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="d-none ms-2 d-lg-inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
   class="ms-2 d-lg-none inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> </button> 
       <div className='drpdown-content3 bg-transparent left-44 inline top-0'>
           <div className='lg:ms-10 lg:bg-slate-50 lg:rounded-s-3xl lg:rounded-t-3xl lg:w-[100%]'>
           <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transfo</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
             ready</Nav.Link>
            <Nav.Link 
           onClick={()=>{navigate("/service/Traditional Consulting");setnav(false) }} >
            Transformers are ready</Nav.Link>
           </div>
       </div>
      </Nav.Link> 
     
  </div>
</div>
</Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/project");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Projects</button> </Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/blogs");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Blog</button> </Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/contact");setnav(false) }} className='position-relative fontfam text-lg'><button className='fontfam text-lg'>Contact</button> </Nav.Link>
                  
                </Nav>
                </div>
              <div className='d-lg-none ms-10'>
              <p className='fontfam text-2xl fw-bolder'>Contact Info</p>
              <p className='mulish text-slate-600'>
              <span>Chicago 12, Melbrone city ,USA</span>
              <span className='cursor-pointer my-2 hover:text-violet-600 block'>+91 9791582480</span>
              <span className='cursor-pointer hover:text-violet-600 block'>infp@example.com</span>
            </p>
            <div className='flex gap-2'>
              <p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
              </p>
              <p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg></p>
<p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-skype" viewBox="0 0 16 16">
  <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
</svg></p>
<p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg></p>
            </div>
          </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            </div>
            <div className='d-flex lg:mx-10 '>
            <Form className="d-flex shadow-none">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <button className='mx-2 bg-inherit'  onClick={handleShow}>
                <img src={require("../assest/navicon.png")} alt="Awesome Image"/>
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
            <p className='mulish text-slate-600'>
              <span>Chicago 12, Melbrone city ,USA</span>
              <span className='cursor-pointer my-2 hover:text-violet-600 block'>+91 9791582480</span>
              <span className='cursor-pointer hover:text-violet-600 block'>infp@example.com</span>
            </p>
            <div className='flex gap-2'>
              <p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
              </p>
              <p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg></p>
<p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-skype" viewBox="0 0 16 16">
  <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
</svg></p>
<p className='rounded-full hover:text-violet-700 transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
</svg></p>
            </div>
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
        </Navbar>
        
    </div>
  )
}

export default MainNav