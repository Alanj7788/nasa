import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {RiCompassDiscoverFill} from 'react-icons/ri'
import {IoIosContacts} from 'react-icons/io'
import {BsDatabase} from 'react-icons/bs'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}> <AiOutlineHome/>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}> <RiCompassDiscoverFill/>Discover</a>
      
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}> <RiCompassDiscoverFill/>Uses</a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}> <BsDatabase/>Data</a>

      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav==='#testimonials' ? 'active' : ''}> <IoIosContacts/>Contact</a>
    
    </nav>

    )
}

export default Nav