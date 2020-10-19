import React from 'react';
import cennik from './img/cennik.jpg'


const Cennik = () => {
    return (
        <>
            <div className="background-img">
                <img src={cennik} alt="" />
                <div className="text-on-image">
                    <p>Zapraszamy do wyceny</p>
                </div>
            </div>
            <div className="cennik-container">cennik</div>
        </>
    );
}

export default Cennik;