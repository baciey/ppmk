import React from 'react';
import { Link } from "react-router-dom";


const FancyButton = (props) => {
  // console.log(props);
  return (
    <button className="fancy-button">
      <Link
        to={props.path}>
        {props.content}
      </Link>
    </button>
  );
}

export default FancyButton;