import React from 'react'
import './about.css'
import {FaHandPointDown} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs'
import PPT from '../../assets/ppt.pptx'

const About = () => {
  

  return (
   <section id='about'>
   <h5>Get to know</h5> 
   <h2>About EMIT</h2>

   <div className="container about_container">
    
   <div className="about_me">
   <iframe width="650" height="428" src="https://www.youtube.com/embed/TKz58Jc2waE" title="EMIT APP( NASA SPACE CHALLENGE )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
 
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
          <h5>To Download our Project Demo <BsDownload/></h5>
          <a href={PPT} >Nasa Space Apps Challenge</a>
          </article>

        </div>

        <p>

</p>
    <a href="#testimonials" className='btn btn-primary'>Give us a message to know more about EMIT</a>
    </div>
   </div>
   </section>

  )
}

export default About