import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {IoIosContacts} from 'react-icons/io'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}> <AiOutlineHome/>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}> <BiUserCircle/>Demo</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}> <BsBook/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav==='#testimonials' ? 'active' : ''}> <IoIosContacts/>Contact</a>
    </nav>

    )
}

export default Nav