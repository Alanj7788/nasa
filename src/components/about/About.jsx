import React from 'react'
import './about.css'
import {FaHandPointDown} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs'


const About = () => {
  return (
   <section id='about'>
   <h5>Get to know</h5> 
   <h2>About EMIT</h2>

   <div className="container about_container">
    
   <div className="about_me">
        <iframe
            title="YouTube Video"
            width="105%" /* Adjust the width as needed */
            height="335" /* Maintain aspect ratio */
            src="https://www.youtube.com/embed/hYv6BM2fWd8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
   
 
      </div>
      <div className="about_content">
        <div className="about_cards">
         
          <article className='about_card'>
          <h5>Click Below to know about <FaHandPointDown/></h5>
          
          <a href="https://www.spaceappschallenge.org/2023/challenges/emit-for-the-future/?tab=details" >Nasa Space Apps EMIT Challenge</a>
          
          </article>

          <article className='about_card'>
          <h5>Click Below to get into <FaHandPointDown/></h5>
          <a href="https://earth.jpl.nasa.gov/emit/" >Nasa Official Site(EMIT)</a>
          </article>

          <article className='about_card'>
          <h5>Click Below to know how our App works <BsDownload/></h5>
          <a href="https://www.spaceappschallenge.org/" >Nasa Space Apps Challenge</a>
          </article>

        </div>

        <p>

</p>
    <a href="#contact" className='btn btn-primary'>Give us a message to know more about EMIT</a>
    </div>
   </div>
   </section>

  )
}

export default About