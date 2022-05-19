import React from 'react'
import { useHistory, useLocation } from "react-router-dom";




import products from '../data/productData'




export const Product = () => {
    let location = useLocation();
    let histroy = useHistory();

    const productData = products.find(product => product.name === location.search.substring(1))
    

    let imageBoderStyle = {
        border: "5px solid #ddd",
        borderRadius: "10px",
        padding: "5px",
        width: "100%",
        height: "26rem",
    }
    
    //Click call GA 
    const onClick = () => {
        localStorage.setItem("cartProduct", JSON.stringify(productData));
        histroy.push("/basket");

        window.dataLayer.push({

        'event': 'click',
        'ctaName':'add to cart',
        'userID': '123456',

       });

    }

   //Pageview call GA
    var Del=setInterval(function(){
    if(document.querySelectorAll("#pdp").length===1){
    window.dataLayer.push({
'event': 'Pageview',
'pageTitle':'pdp',
'userID': '123456'

});
    clearInterval(Del)
}
},500);
    return (

        <>
            <div className="container" id="pdp">
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
