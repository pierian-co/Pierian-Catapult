import React from 'react'

import { Link } from "react-router-dom";



export const Checkout = () => {


    let linkStyle = {
        textDecoration: "none",
        color: "white",
    }

  
  var Del=setInterval(function(){
    if(document.querySelectorAll("#checkout").length===1){
    window.dataLayer.push({
'event': 'Pageview',
'pageTitle':'checkout',
'userID': '123456'

});
    clearInterval(Del)
}
},500);

    return (

        <div className="container back_img" id="checkout"> 
            <div className="card card-container">
                <h5>Please submit your Details  </h5>

                <img id="profile-img" className="profile-img-card" src="./assets/img/gallery/img-1.jpg" alt="" />
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin">
                    <span > <h6>Please submit your name and email</h6> </span>
                    <input type="text" className="form-control" placeholder="your name" autoFocus />
                    <input type="email" className="form-control" placeholder="email address" />

                    <span > <h6>Please submit your card detail</h6> </span>
                    <input type="text" className="form-control" placeholder="card number" />
                    <input type="text" className="form-control" placeholder="cvv" />


                </form>

                <button className="btn btn-sm btn-signin  btn-resize" >
                    <Link to={{ pathname: `/checkoutThank` }} style={linkStyle}> submit </Link>
                </button>
            </div>
        </div>


    )
}
