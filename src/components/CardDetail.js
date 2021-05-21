import React from 'react'

import { Link } from "react-router-dom";



export const CardDetail = () => {


    let linkStyle = {
        textDecoration: "none",
        color: "white",
    }


    return (
        <>


<div className="card card-container">
                <h5>Please submit your card detail  </h5>

                <img id="profile-img" className="profile-img-card" src="./assets/img/gallery/img-1.jpg" alt="" />
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin pb-2">
                    <input type="text" className="form-control" placeholder="card number" autoFocus />
                    <input type="txt" className="form-control" placeholder="CVV" />

                </form>

                <button className="btn btn-sm btn-danger" >
                    <Link to={{ pathname: `/checkoutThank` }} style={linkStyle}> submit </Link>
                </button>
            </div>



        </>


    )
}
