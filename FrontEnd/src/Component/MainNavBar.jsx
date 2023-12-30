import React, { useState } from 'react'
import { Form, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const MainNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   let navigate =useNavigate()
  return (
    <div className='head'>
        <input type="checkbox" id='menu-bar' />
        <label htmlFor="menu-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        </label>
        <nav className='navgibar'>
            <ul>
                 <li><Link href="">Home</Link></li>
                 <li><Link href="">About</Link>
                 <ul>
                    <li><Link >About Comapny</Link></li>
                    <li><Link to={"/ourteam"}>Our Team</Link></li>
                 </ul>
                 </li>
                 <li><Link href="">Service</Link>
                     <ul>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link>PRivate</Link>
                            <ul>
                                <li>
                                    <Link>Traditional consultence</Link>
                                </li>
                                <li>
                                    <Link>Porfolio</Link>
                                </li>
                                <li>
                                    <Link>Management</Link>
                                </li>
                                <li>
                                    <Link>Consultence</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link>INstitution</Link>
                            <ul>
                                <li>
                                    <Link>Traditional consultence</Link>
                                </li>
                                <li>
                                    <Link>Porfolio</Link>
                                </li>
                                <li>
                                    <Link>Management</Link>
                                </li>
                                <li>
                                    <Link>Consultence</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link>RetireMent</Link>
                            <ul>
                                <li>
                                    <Link>Traditional consultence</Link>
                                </li>
                                <li>
                                    <Link>Porfolio</Link>
                                </li>
                                <li>
                                    <Link>Management</Link>
                                </li>
                                <li>
                                    <Link>Consultence</Link>
                                </li>
                            </ul>
                        </li>

                 </ul>
                 </li>
                 <li><Link href="">Projects</Link></li>
                 <li><Link href="">Blog</Link></li>
                 <li><Link href="">Contact</Link></li>
            </ul>
        </nav>
        <div className='d-flex lg:mx-10 '>
            <Form className="d-flex">
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
            <Offcanvas show={show} 
      onHide={handleClose}
     
      className="p-4 lg:w-2/5 trans bg-white text-black">
        <Offcanvas.Header closeButton className=''>
          <Offcanvas.Title>
          <div className='mx-auto mx-sm-0'>
             <img src="../assest/logo.png" alt="logo"/>
             </div>
          </Offcanvas.Title>
          </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default MainNavBar