import React from 'react'

import products from '../data/productData'
import vietnam from '../img/gallery/vietnamese2.jpg'



export const VietnamProduct = () => {

    const vietnamCuisine = products.find(product => product.cuisine === "VIETNAMESE")


    let imageBoderStyle = {
        border: "5px solid #ddd",
        borderRadius: "10px",
        padding: "5px",
        width: "100%",
        height: "26rem",
    }


    return (

        <>
            <div className="container">
                <div className="jumbotron row">
                    <div className="col">
                        <img style={imageBoderStyle} src={vietnam} alt="vietnam" />
                    </div>
                    <div className="col">
                        <div className="">
                            <h3>{vietnamCuisine.cuisine}</h3>
                            <h5> {vietnamCuisine.title} </h5>
                            <p> {vietnamCuisine.description} </p>
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
