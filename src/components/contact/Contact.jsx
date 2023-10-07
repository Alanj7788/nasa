import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail/>
        <h4>Email</h4>
        <h5>alan@gmail.com</h5>
        <a href="mailto:alan@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <AiOutlineMail/>
        <h4>Instagram</h4>
        <h5>alanjoseaj987@gmail.com</h5>
        <a href="mailto:alan@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <AiOutlineMail/>
        <h4>Linkedin</h4>
        <h5>alan@gmail.com</h5>
        <a href="mailto:alan@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <AiOutlineMail/>
        <h4>whatsapp</h4>
        <h5>67654876t7</h5>
        <a href="https://api.whatsapp.com/send?phone=9497204867" target="_blank">Send a message</a>
        </article>

        </div>
        {/*end of contact options*/}

       
      </div>


     </section>
  )
}

export default Contact