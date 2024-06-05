import React from 'react'
import '../../Css/About.css'
import about from './about3.jpg'
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
        <p className='para'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        
    </div>
    <div className='buttbox'>
    <NavLink to="/" className="btnn">Home</NavLink>
    <NavLink to="/" className="btnn">Blogs</NavLink>
    </div>
    </div>
  )
}

export default About