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
    
    //Pageview call GA
    var Del=setInterval(function(){
    if(document.querySelectorAll("#home").length===1){
    window.dataLayer.push({
'event': 'Pageview',
'pageTitle':'home',
'userID': '123456'

});
    clearInterval(Del)
}
},500);

    return (
        <div className="container" id="home">

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
