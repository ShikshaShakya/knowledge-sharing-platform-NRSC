import React from 'react'
import '../../Css/About.css'
import about from './logo.png'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-section">
    <div className="inner ">
       <div className='backdiv'> 
      <img src={about} alt='about' className='aboutimg' />
       </div>
        <div className='aboutcontent'>
        <h1 className='h1'>About Us</h1>
        <p className='para'>National Remote Sensing Centre (NRSC) is one of the primary centres of Indian Space Research Organisation (ISRO), Department of Space (DOS). NRSC  has the mandate for establishment of ground stations for receiving satellite data, generation of data products, dissemination to the users, development of techniques for remote sensing applications including disaster management support, geospatial services for good governance and capacity building for professionals, faculty and students. NRSC operates through multiple campuses to meet national and regional remote sensing data and applications needs of the country.</p>
        </div>

        
    </div>
    <div className='buttbox'>
    <NavLink to="/" className="btnn">Home</NavLink>
    <NavLink to="/blog" className="btnn">Blogs</NavLink>
    </div>
    </div>
  )
}

export default About