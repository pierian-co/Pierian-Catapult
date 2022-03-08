import React from 'react';
import {useHistory} from 'react-router-dom'
import '../css/login.css';
import users from '../data/userData'



export const Login = () => {
    let email_value = "";
    let passwordValue = "";


   const history = useHistory()

    // Tealium call for page-view
    if(window.utag){ 
        window.utag.view({"page_name":"myaccount: login","tealium_event": "page_view"});
    }
 
    const emailChange = (e) =>{
        email_value = e.target.value
    }

    const passwordChange = (e) =>{
        passwordValue = e.target.value

    }
    

    const submitForm = (e) => {
        e.preventDefault()
      const newUser =  users.filter((user) => {
            return user.email === email_value
        })
        if (newUser.length  === 0) {
             // Tealium call for email error
            if(window.utag){ 
                window.utag.link({"page_name":"myaccount: login","tealium_event": "error", "error_name": "incorrect email address"});
            }
            alert("Incorrect Email");
        }
        else {
            if ( newUser[0].password ===  passwordValue) {
                // Tealium call for login
                if(window.utag){ 
                    window.utag.link({"page_name":"myaccount: login","tealium_event": "user_login", "customer_id":email_value});
                }
                history.push('/account')
            }
            else {
                // Tealium call for password error
                if(window.utag){ 
                    window.utag.link({"page_name":"myaccount: login","tealium_event": "error", "error_name":"incorrect password"});
                }
                alert("Incorrect Password");
                 
            }

        }
    }



    return(
            <>
                <div className="container back_img">
                    <div className="card card-container">
                        <h5>Login to your account  </h5>
                       
                        <img id="profile-img" className="profile-img-card" src="./assets/img/gallery/img-1.jpg" alt="" />
                        <p id="profile-name" className="profile-name-card"></p>
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"></span>
                            <input type="email" id="inputEmail" className="form-control" onChange = { (e) => emailChange(e)} placeholder="Email address" required autoFocus/>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange = { (e) => passwordChange(e)} />
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick = {(e) => submitForm(e)}>Sign in</button>
                        </form>
                        <a href="http://localhost:3000/" className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
                </div>
            </>
    )
}
