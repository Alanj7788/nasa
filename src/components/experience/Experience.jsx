import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>More About</h5>
      <h2>Emit</h2>

      <div className="container experience_container">
        {/* Tile 1 */}
        <div className="experience_frontend">
          <h3>Data Collection</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Over its mission, EMIT will collect measurements of surface minerals in arid regions of Africa, Asia, North and South America, and Australia. The data will help researchers better understand airborne dust particles’ role in heating and cooling Earth’s atmosphere and surface</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Tile 2 */}
        <div className="experience_frontend">
          <h3>First Light Measurements</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>This image shows the first measurements taken by NASA’s Earth Surface Mineral Dust Source Investigation (EMIT) from aboard the International Space Station at 7:51 p.m. PDT (10:51 p.m. EDT) on July 27, 2022, as it passed over western Australia.</h4>
                <a href="https://www.jpl.nasa.gov/images/pia24529-emit-instruments-first-light">Link</a>
              </div>
            </article>
          </div>
        </div>

        {/* Duplicate the above structure for more tiles */}
        {/* Tile 3 */}
        <div className="experience_frontend">
          <h3>Mineral Map Creation</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>The mineral map shows an area of southwestern Libya in the Sahara Desert observed by NASA’s Earth Surface Mineral Dust Source Investigation (EMIT) mission as it maps the world’s mineral dust sources, gathering information about surface composition as the instrument orbits aboard the International Space Station.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 4 */}
        <div className="experience_frontend">
          <h3>First Detailed Maps</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>NASA’s Earth Surface Mineral Dust Source Investigation (EMIT) mission aboard the International Space Station has produced its first mineral maps, providing detailed images that show the composition of the surface in regions of northwest Nevada and Libya in the Sahara Desert.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 5 */}
       

        {/* Continue duplicating for more tiles */}
        {/* Tile 6 */}
        <div className="experience_frontend">
          <h3>Uniform Spectral Response</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>Across EMIT’s 39-mile (72-kilometer) field of view, the instrument has a uniform spectral response. This allows use of the most advanced data processing algorithms.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 7 */}
        <div className="experience_frontend">
          <h3>Advanced Technology</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>EMIT incorporates multiple advanced new technologies. Its Dyson spectrometer optical layout provides exceptionally high photon throughput, meaning the optics maximize the light reaching the detector.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 8 */}
        <div className="experience_frontend">
          <h3>Spectral Analysis</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>The EMIT instrument is an imaging spectrometer — a NASA invention widely used in the agency’s space missions — that will measure light in visible and infrared wavelengths.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 9 */}
        <div className="experience_frontend">
          <h3>Understanding Heating and Cooling Impacts</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>EMIT will make the first detailed maps of dust composition of Earth’s dust source regions and use state-of-the-art climate models to better understand regional and global heating and cooling impacts and future changes in dust source regions.</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Continue duplicating for more tiles */}
        {/* Tile 10 */}
        <div className="experience_frontend">
          <h3>Understanding Dust Effects</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>By accurately mapping the composition of areas that produce mineral dust, EMIT will advance our understanding of dust’s effects throughout the Earth system and to human populations now and in the future.</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
