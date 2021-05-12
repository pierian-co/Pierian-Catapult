import React from 'react'

import { MediaCard } from './ListCard'


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
                    <div className="pb-5 pt-4">
                        <img style={ bannerImageStyle } src="./assets/img/food_banner.jpg" alt="banner" />

                    </div>
            </div>



            <div className="jumbotron row">

                <h3 style={productTitleStyle}>Latest Products</h3>

                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-1.jpg"} title={"INDIAN"}  />
                </div>


                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-2.jpg"} title={"CONTINENTAL"}  />
                </div>


                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-3.jpg"} title={"PUNJABI"}  />
                </div>


                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-1.jpg"} title={"JAPANESE"}  />
                </div>


                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-2.jpg"} title={"CHINESE"}  />
                </div>


                <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                    <MediaCard imagePath={"./assets/img/gallery/img-3.jpg"} title={"AFRICAN"}  />
                </div>



            </div>

        </div>
    )
}
