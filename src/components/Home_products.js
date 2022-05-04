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
    

// //     //Data layer update and direct call rules for analytics and target from Launch

    var Del=setInterval(function(){
    if(document.querySelectorAll("#home").length==1){
    window.adobeDataLayer.push({
'event': 'landing',
'screenname':'home',
'pagename':'home launch page',
'userID': '123456'

});

if(window.alloy) {
      window.alloy("sendEvent", {
        "renderDecisions": false,
        "xdm": {
          "web": {
            "webPageDetails": {
              "viewName": "Home"
            }
          }
        }
      });
    }
    

    clearInterval(Del)
}
},1000);


    return (
        <div className="container" id="home" >

            <div className="jumbotron row" id="heroimage">
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
