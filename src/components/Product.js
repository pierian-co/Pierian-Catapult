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

    const onClick = () => {
        localStorage.setItem("cartProduct", JSON.stringify(productData));
        histroy.push("/basket");

    }

    var Del=setInterval(function(){
    if(document.querySelectorAll("#productdetails").length==1 && window._satellite){
    window.adobeDataLayer.push({

'pagename':'pdp',
'productname':productData.name,
'userID': '123456',
'pagetype': 'home',

});
    window._satellite.track('pdp');
    window._satellite.track('target');
    clearInterval(Del)
}
},500);

    return (

        <>
            <div className="container" id="productdetails">
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
