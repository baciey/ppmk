import React from 'react';
import './css/Portfolio.sass';

import portfolio1280 from './img/portfolio-1280px.jpg'
import portfolio480 from './img/portfolio-480px.jpg'
import LightboxExample from './Lightbox'

import lady from './img/lady.jpg'
import lady2 from './img/lady2.jpg'
import cennik from './img/cennik.jpg'
import kontakt from './img/contact.jpg'

import bgc from './img/bgc.jpg'
import bgc2 from './img/bgc-img-home.jpg'


const imagesSmolec = [
  lady,
  lady2,
];
const imagesMokronos = [
  cennik,
  kontakt,
];


const Portfolio = (props) => {
  const width = props.width;
  return (
    <>

      <div className="portfolio-container">
        <div className="background-img">
          {<img src={width < 1024 ? portfolio480 : portfolio1280} alt="" />}
          <div className="text-on-image">
            <p>Poznaj nasze projekty</p>
          </div>
        </div>
        <div className="gallery">
          <div className="galleryItem">
            <LightboxExample images={imagesSmolec} bg={bgc} />
            <h3>Smolec - 45m2</h3>
          </div>
          <div className="galleryItem">
            <LightboxExample images={imagesMokronos} bg={bgc2} />
            <h3>Mokronos Dolny - 63m2</h3>
          </div>
          <div className="galleryItem">
            <LightboxExample images={imagesSmolec} bg={bgc} />
            <h3>Oporów - 24m2</h3>
          </div>
          <div className="galleryItem">
            <LightboxExample images={imagesMokronos} bg={bgc2} />
            <h3>Miami - 39m2</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;