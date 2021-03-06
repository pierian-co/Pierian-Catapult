import React from 'react';
import products from '../data/productData'

import thanks from '../img/gallery/thanks.jpg'


export const Thanks = () => {
  let cartProduct = {};
  if (localStorage.getItem("cartProduct") === null) {
    cartProduct = products[0]
  }
  else {
    cartProduct = JSON.parse(localStorage.getItem("accountCartData"));
  }

  targetView('SubmitChoiceThanks');
    function targetView(viewName) {
        // Validate if the Target Libraries are available on your website
        if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
          window.adobe.target.triggerView(viewName);
        }
      }

  let textStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#666"
  }

  return (
    <div className="container back_img">
      <div className="card" style={{ width: "18rem" }} >
        <img className="card-img-top" src={thanks} alt={cartProduct.name} />
        <div className="card-body">
          <div className="row">
            <p className="card-text" style={{ textAligment: "center" }}  > {cartProduct.name} </p>
            <p>  {cartProduct.price}  </p>
            <p style={textStyle}>  Thanks For Order  </p>
          </div>
        </div>
      </div>
    </div>

  );
}
