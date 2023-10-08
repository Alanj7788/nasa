import React from 'react'
import './contact.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Contact = () => {
  const fullScreenStyles = {
    height: '100vh',
    margin: 0,
    padding: 0,
  };

  return (
    <div style={fullScreenStyles}>
      <section id='testimonials'>
        <h5>Meet Our Team</h5>
        <h2>Gravity</h2>
        <Swiper className="container testimonials_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR1} alt="Alwin George" />
            </div>
            <h5 className='client_name'>Jishnu Devadas</h5>
            <small className='client_review'>
              Team Lead
            </small>
            <br /> Contact via: <br />
            <AiOutlineMail/>
            <a href="mailto:jishnu.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=8714014040" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/jerin-jaison-047698227/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR2} alt="Akhil Mathew" />
            </div>
            <h5 className='client_name'>Alan Jose</h5>
            <small className='client_review'>
              Team Member
            </small>
            <br /> Contact via: <br />

            <AiOutlineMail/>
            <a href="mailto:alan.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=9497204867" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/alan-jose-5b7354227/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR3} alt="Abishek Rumal" />
            </div>
            <h5 className='client_name'>Evin Babu</h5>
            <small className='client_review'>
            Team Member
            </small>
            <br /> Contact via: <br />
            <AiOutlineMail/>
            <a href="mailto:evin.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=8848183674" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/evin-babu-693ba123b/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR5} alt="Jerin Varghese" />
            </div>
            <h5 className='client_name'>Jerin Jaison</h5>
            <small className='client_review'>
            Team Member
            </small>
            <br /> Contact via: <br />
            <AiOutlineMail/>
            <a href="mailto:jerin.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=8281104955" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/jerin-jaison-047698227/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR4} alt="Athul Kumari" />
            </div>
            <h5 className='client_name'>Aswin Vincent</h5>
            <small className='client_review'>
            Team Member
            </small>
            <br /> Contact via: <br />
            <AiOutlineMail/>
            <a href="mailto:aswin.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=8137967382" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/evin-babu-693ba123b/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR6} alt="Alwin George" />
            </div>
            <h5 className='client_name'>Adithya E</h5>
            <small className='client_review'>
              Team Member
            </small>
            <br /> Contact via: <br />
            <AiOutlineMail/>
            <a href="mailto:adithya.cse21@jecc.ac.in" target="_blank" rel="noopener noreferrer">Email</a>
            <br />
            <FaWhatsapp/>
            <a href="https://api.whatsapp.com/send?phone=8921939034" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <br />
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/adithya-e-b5b9a8269/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SwiperSlide>
          
        </Swiper>
      </section>
    </div>
  );
}

export default Contact;
