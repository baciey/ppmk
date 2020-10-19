import React from 'react';
import omnie from './img/omnie-1280px.jpg'
import omnieSmall from './img/omnie-480px.jpg'
import lady from './img/lady2.jpg'
import ArrowDown from './ArrowDown'
import './css/Onas.sass';


const Onas = (props) => {
  const width = props.width;

  return (
    <>

      <div className="onas-container">
        <div className="background-img">
          <img src={width < 1024 ? omnieSmall : omnie} alt="" />
          <div className="text-on-image">
            <p>Kilka słów o mnie..</p>
          </div>
        </div>
        {width < 400 ? null : <ArrowDown />}
        <div className="o-mnie">

          <div className="photo">
            <img src={lady} alt="" />
          </div>
          <div className="desc">
            <h3>mgr inż. arch. Małgorzata Kowalkowska</h3>
              W 2011 roku ukończyłam studia na Wydziale Architektury i Urbanistyki Politechniki Wrocławskiej.
              Moja pracownia zajmuje się projektowaniem wnętrz mieszkalnych, usługowych, mebli indywidualnych.
              W projektowaniu kładę nacisk głównie na funkcjonalność oraz prostą, ponadczasową formę.
              Zawsze zachęcam  swoich klientów do wyboru naturalnych i ekologicznych materiałów.
              Współpracuję ściśle z pracowniami stolarskimi oraz wykonawcami stalowych konstrukcji dzięki czemu zapewniam swoim Klientom darmowe wyceny zabudowy meblowej, ścianek szklanych, konstrukcji stalowych, drzwi.
          </div>
        </div>
      </div>
    </>
  );
}

export default Onas;