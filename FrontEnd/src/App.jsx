import React from 'react'
import "./index.css"
  import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import 'animate.css';
import Service from './Component/Service';
import ContactLanding from './Component/ContactLanding';
import Project from './Component/Project';
import Blogs from './Component/Blogs';
import Contact from './Component/Contact';
import AboutsUS from './Component/AboutsUS';
import BlogDetails from './Component/BlogDetails';
import MiniNav from './NavBar/MiniNav';
import LogoNav from './NavBar/LogoNav';
import MainNav from './NavBar/MainNav';
import OurTeam from './Component/OurTeam';
import ProjectDetails from './Component/ProjectDetails';
import Catogeries from './Component/Catogeries';
import ServicesDivision from './Component/ServicesDivision';
import MainNavBar from './Component/MainNavBar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <MainNavBar/> */}
           <Routes>
               <Route path='/*' element={<LandingPage/>}></Route>
               <Route path='/service/*' element={<Service/>}/>
               <Route path='/project/*' element={<Project/>}/>
               <Route path='/blogs/*' element={<Blogs/>}/>
               <Route path='/contact/*' element={<Contact/>}/>
               <Route path='/about/*' element={<AboutsUS/>}/>
               <Route path='/blog/:id' element={<BlogDetails/>}/>
               <Route path='/ourteam' element={<OurTeam/>}/> 
               <Route path='/project/:name' element={<ProjectDetails/>}/>
               <Route path='/catogery/:catogery' element={<Catogeries/>}/>
               <Route path='/service/:service' element={<ServicesDivision/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App