import React from 'react'
import products from '../data/productData'

import { useHistory } from "react-router-dom";



export const Basket = () => {
    let histroy = useHistory();


    let isChecked;
    let cartProduct = {};
    if (localStorage.getItem("cartProduct") === null) {
        cartProduct = products[0]
    }
    else {
        cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
    }

    targetView('Basket');
    function targetView(viewName) {
        // Validate if the Target Libraries are available on your website
        if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
          window.adobe.target.triggerView(viewName);
        }
      }

    const handleChange = (e) => {
        isChecked = e.target.checked;
    }

    const checkout = () => {

        if (isChecked) {
            histroy.push("/personalDetail")
        }
        else {
            histroy.push("/checkout")


        }

    }


    return (
        <>

            <div className="container back_img">
                <div className="card" style={{ width: "18rem" }} >
                    <img className="card-img-top" src={cartProduct.thumbNailUrl} alt={cartProduct.name} />
                    <div className="card-body">
                        <div className="row">
                            <p className="card-text" style={{ textAligment: "center" }}  > {cartProduct.name} </p>
                            <p>  {cartProduct.price}  </p>

                            <div id="checkout" className="checkbox pb-2">
                                <label>
                                    <input type="checkbox" value="checkoutType" onChange={e => handleChange(e)} /> Two step checkout
                                </label>
                            </div>

                            <button className="btn btn-sm btn-signin" onClick={() => checkout()} > Checkout </button>

                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}
