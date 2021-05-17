import React from 'react'

export const ProductDescription = () => {
   


    let imageBoderStyle = {
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "5px",
        // width: "150px",
    }
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="">
                            <img style={imageBoderStyle} className="img-fluid" src="./assets/img/gallery/img-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="">
                            <h3>Chinese</h3>
                            <h5>Creamy Spaghetti Chicken Charcuterie</h5>
                            <p>We use smoked chicken sausages to toss up a creamy spaghetti-meal
                            that is smoky, delicious and a comforting tribute to the art of
                          charcuterie. Serves 1.</p>
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
