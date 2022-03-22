import React from 'react'
import { useHistory, useLocation } from "react-router-dom";




import products from '../data/productData'




export const Product = () => {
    let location = useLocation();
    let histroy = useHistory();

    const productData = products.find(product => product.name === location.search.substring(1))
    
    // if (window.adobe && window.adobe.target && typeof window.adobe.target.trackEvent === 'function') {
    //     window.adobe.target.trackEvent({
    //         "mbox": "collect-params",
    //         "params": {
    //           "entity.id":  location.search.substring(1)
    //          } 
    //         });
    // }
    
    // targetView('ProductDetails-' + location.search.substring(1));
    // function targetView(viewName) {
    //     // Validate if the Target Libraries are available on your website
    //     if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
    //       window.adobe.target.triggerView(viewName);
    //     }
    //   }
    

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

         window.adobeDataLayer.push({

        'event': 'click',
        'linkname':'add to cart',
        'userID': '123456',

});

    }

//Data layer update and direct call rules for analytics and target from Launch
    var Del=setInterval(function(){
    if(document.querySelectorAll("#product").length==1){
    window.adobeDataLayer.push({
'event': 'landing',
'screenname':'product detail',
'pagename':'product detail page',
'userID': '123456'


});
    clearInterval(Del)
}
},1000);


    return (

        <>
            <div className="container" id="product">
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
