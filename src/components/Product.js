import React from 'react'
import { useHistory, useLocation } from "react-router-dom";




import products from '../data/productData'




export const Product = () => {
    let location = useLocation();
    let histroy = useHistory();

    const productData = products.find(product => product.name === location.search.substring(1))
    
    // Tealium call for page-view
    if(window.utag){ 
        window.utag.view({"page_name":"product: " + productData.name,"tealium_event": "product_view", "product_id": [productData.id], "product_name": [productData.name], "product_unit_price": [productData.price]});
    }

    let imageBoderStyle = {
        border: "5px solid #ddd",
        borderRadius: "10px",
        padding: "5px",
        width: "100%",
        height: "26rem",
    }

    const onClick = () => {
        localStorage.setItem("cartProduct", JSON.stringify(productData));
        histroy.push("/basket")
        // Tealium call for link-click
        let prod_quantity = 1;
        if(window.utag){ 
            window.utag.link({"page_name": "product: " + productData.name,"product_id": [productData.id], "product_name": [productData.name], "product_unit_price": [productData.price], "product_quantity":[prod_quantity], "tealium_event": "cart_add"});
        }
    }   



    return (

        <>
            <div className="container">
                <div className="jumbotron row">
                    <div className="col">
                        <img style={imageBoderStyle} src={productData.imageUrl} alt="indian" />
                    </div>
                    <div className="col">
                        <div className="">
                            <h3>{productData.name}</h3>
                            <h5> {productData.title} </h5>
                            <p> {productData.description} </p>
                        </div>
                        <button className="btn btn-sm btn-signin" onClick={() => onClick()} >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}
