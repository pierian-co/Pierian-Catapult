import React from 'react'

import products from '../data/productData'
import indian from '../img/gallery/indian2.jpg'




export const IndianProduct = () => {

    const indianCuisine = products.find( product =>   product.cuisine === "INDIAN")


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
                        <img style={imageBoderStyle} src={indian} alt="indian" />
                    </div>
                    <div className="col">
                        <div className="">
                    <h3>{ indianCuisine.cuisine }</h3>
                    <h5> { indianCuisine.title } </h5>
                    <p> { indianCuisine.description } </p>
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
