import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const ArrowDown = (props) => {

    function executeScroll() {
        window.scrollTo({ behavior: 'smooth', top: 420 })
    }
    return (
        <div className="arrow" onClick={executeScroll}>
            <FontAwesomeIcon icon={faAngleDown} size="4x" color="#2b2928" />
        </div>
    );
}

export default ArrowDown;