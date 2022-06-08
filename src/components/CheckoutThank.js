import React from 'react';
import products from '../data/productData'


export const CheckoutThanks = () => {

  let cartProduct = {};
  if (localStorage.getItem("cartProduct") === null) {
    cartProduct = products[0]
  }
  else {
    cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
  }
  
  

 
  let textStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#666"
  }

   // Tealium call for page-view
   if(window.utag){ 
    let prod_quantity = 1;
    window.utag.view({"page_name":"order complete","tealium_event": "purchase", "product_id":[cartProduct.id],"product_name":[cartProduct.name], "product_unit_price": [cartProduct.price], "product_quantity":[prod_quantity],"order_id": Date.now() + '' + Math.random() });
}

  return (

    <div className="container back_img">
      <div className="card" style={{ width: "18rem" }} >
        <img className="card-img-top" src={cartProduct.thumbNailUrl} alt={cartProduct.name} />
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
