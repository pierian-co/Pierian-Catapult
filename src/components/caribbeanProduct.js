import React from 'react'

import products from '../data/productData'
import caribbean from '../img/gallery/caribbean2.jpg'



export const CaribbeanProduct = () => {
   


    let imageBoderStyle = {
        border: "5px solid #ddd",
        borderRadius: "10px",
        padding: "5px",
        width: "100%",
        height: "26rem",
    }

    const caribbeanCuisine = products.find( product =>   product.cuisine === "CARIBBEAN")

    return (

        <><div className="container">
        <div className="jumbotron row">
            <div className="col">
                <img style={imageBoderStyle} src={caribbean} alt="caribbean" />
            </div>
            <div className="col">
                <div className="">
                    <h3>{ caribbeanCuisine.cuisine }</h3>
                    <h5> { caribbeanCuisine.title } </h5>
                    <p> { caribbeanCuisine.description } </p>
                </div>
                <button className="btn btn-sm btn-warning" >
                    Add To Cart
                </button>
            </div>
        </div>
    </div>
        </>
    )
}
