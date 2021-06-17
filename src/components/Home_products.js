import React from 'react'
import { MediaCard } from './ListCard'

import products from '../data/productData'


export const HomeProducts = () => {


    let bannerImageStyle = {
        height: "100%",
        width: "99%",
        objectFit: "contain"
    }

    let productTitleStyle = {
        color: "#23596e",
        fontSize: "38px",
        textAlign: "center",
        letterSpacing: "1px",
        lineHeight: "1",
        marginBottom: "48px",
        padding: " 0 10px",
        position: "relative",
    }
    // Call Adobe Target
    try{
        if (window.adobe && window.adobe.target && typeof window.adobe.target.getOffer === 'function') {
            window.adobe.target.getOffer({
                "mbox": "target-global-mbox",
                "params":{
                "view-name": "Home"
                },
                "success": function(offer) {
                    window.adobe.target.applyOffer( {
                        "mbox": "target-global-mbox", 
                        "offer": offer
                    } ); 
                },
                "error": function(status, error) {
                console.log('Error', status, error); 
                } 
            });
        }
    }
    catch (e){
        console.log(e);
    }
    targetView('Home');
    function targetView(viewName) {
        // Validate if the Target Libraries are available on your website
        if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
          window.adobe.target.triggerView(viewName);
        }
      }

    return (
        <div className="container">

            <div className="jumbotron row">
                <div className="pb-5">
                    <img style={bannerImageStyle} src="./assets/img/food_banner.jpg" alt="banner" />

                </div>
            </div>


            <div className="jumbotron row">

                <h3 style={productTitleStyle}>Latest Products</h3>


                {products.map(item =>
                    <div key={item.id}  className="col-md-6 col-lg-4 col-xs-12 pb-5">
                        <MediaCard product={item} />
                    </div>
                )}



            </div>

        </div>
    )
}
