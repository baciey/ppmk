import React from 'react';
import { useEffect } from 'react';
// import cennik from './img/cennik.jpg'


const Cennik = (props) => {
    useEffect(() => {
        document.title = "PPMK - Cennik"
    })
    return (
        <>
            <div className="background-img">
                <img src={props.bg[7]} alt="" />
                <div className="text-on-image">
                    <p>Zapraszamy do wyceny</p>
                </div>
            </div>
            <div className="cennik-container">cennik</div>
        </>
    );
}

export default Cennik;