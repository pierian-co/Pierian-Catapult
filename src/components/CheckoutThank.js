import React from 'react';

import thanks from '../img/gallery/thanks.jpg'


export const CheckoutThanks = () => {


  
  let paddingStyle = {
    paddingBottom: "1.25rem"
  }

  
  let imageStyle = {
    width: "60%"
  }
  

  let textStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#666"
  }

  return (

    <div className="container">
      <div className="jumbotron">
        <div className="row justify-content-md-center" style={paddingStyle}>
          <img style={imageStyle} src={thanks} alt="thanks" />
        </div>
        <div className="row justify-content-md-center" >
          <div className="col col-md-auto" style={textStyle}>
            Thanx For Order
          </div>
        </div>
      </div>
    </div>
  );
}
