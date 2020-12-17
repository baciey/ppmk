import React, { useEffect } from 'react';

// import omnie from './img/omnie-1280px.jpg'
// import omnieSmall from './img/omnie-480px.jpg'
import lady from './img/Małgorzata-Kowalkowska.jpg'
import ArrowDown from './ArrowDown'
import { description } from './content/OnasContent.js'

const Onas = (props) => {
  const { width } = props
  useEffect(() => {
    document.title = "PPMK - O nas"
  })
  return (
    <>
      <div className="background-img">
        <img src={width < 1024 ? props.bg[4] : props.bg[3]} alt="" />
        <div className="text-on-image">
          <p>Kilka słów o mnie..</p>
        </div>
      </div>
      <div className="onas-container">
        {width < 600 ? null : <ArrowDown />}
        <div className="o-mnie">
          <div className="photo">
            <img src={lady} alt="" />
          </div>
          <div className="desc">
            <h3>mgr inż. arch. Małgorzata Kowalkowska</h3>
            <div>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onas;