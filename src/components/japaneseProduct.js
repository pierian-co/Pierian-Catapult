import React from 'react'

import products from '../data/productData'
import japanese from '../img/gallery/japanese2.jpg'



export const JapaneseProduct = () => {

    const japaneseCuisine = products.find( product =>   product.cuisine === "JAPANESE")



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
                        <img style={imageBoderStyle} src={japanese} alt="japanese" />
                    </div>
                    <div className="col">
                        <div className="">
                    <h3>{ japaneseCuisine.cuisine }</h3>
                    <h5> { japaneseCuisine.title } </h5>
                    <p> { japaneseCuisine.description } </p>
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
