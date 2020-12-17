import React, { useEffect } from 'react';
// import portfolio1280 from './img/portfolio-1280px.jpg'
// import portfolio480 from './img/portfolio-480px.jpg'
import LightboxExample from './Lightbox'
import { projects } from './content/PortfolioContent.js'





const Portfolio = (props) => {
  const width = props.width;
  useEffect(() => {
    document.title = "PPMK - Portfolio"
  })
  const project = projects.map(project => (
    <div className="galleryItem" key={project.name}>
      <LightboxExample project={project} />
      <h3>{project.name}</h3>
    </div>
  ))

  return (
    <>
      <div className="background-img">
        {<img src={width < 1024 ? props.bg[2] : props.bg[1]} alt="" />}
        <div className="text-on-image">
          <p>Poznaj nasze projekty</p>
        </div>
      </div>
      <div className="portfolio-container">

        <div className="gallery">
          {project}
        </div>
      </div>
    </>
  );
}

export default Portfolio;