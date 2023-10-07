import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>To Download APK file</a>
        <a href="https://www.spaceappschallenge.org/" className='btn btn-primary'>To go to Nasa Space Apps Challenge Website Click Here</a>
    </div>
  )
}

export default CTA