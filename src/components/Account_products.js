import React from 'react'

import { MediaCard } from './ListCard'

import products from '../data/productData'



export const AccountProducts = () => {

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
        padding:" 0 10px",
        position: "relative",
      }

    return (
        <div className="container">

            <div className="jumbotron row">
                    <div className="pb-5">
                        <img style={ bannerImageStyle } src="./assets/img/food_banner.jpg" alt="banner" />

                    </div>
            </div>



            <div className="jumbotron row">

                <h3 style={productTitleStyle}>Latest Products</h3>

                

                {products.map(item =>
                    <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                        <MediaCard key={item.id} product={item} isAccount={true}  />
                    </div>
                )}


            </div>

        </div>
    )
}
