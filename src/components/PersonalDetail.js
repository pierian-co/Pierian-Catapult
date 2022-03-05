import React from 'react'

import { Link } from "react-router-dom";



export const PersonalDetail = () => {


    let linkStyle = {
        textDecoration: "none",
        color: "white",
    }

   

    return (
        <>

            <div className="container back_img">
                <div className="card card-container">
                    <h5>Please submit your name and email  </h5>

                    <img id="profile-img" className="profile-img-card" src="./assets/img/gallery/img-1.jpg" alt="" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <input type="text" className="form-control" placeholder="Name" autoFocus />
                        <input type="email" className="form-control" placeholder="Email address" />

                    </form>

                    <button className="btn btn-sm btn-signin btn-resize" >
                        <Link to={{ pathname: `/cardDetail` }} style={linkStyle}> Next </Link>
                    </button>
                </div>
            </div>


        </>


    )
}
