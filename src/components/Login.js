import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../css/login.css';
import users from '../data/userData'



export const Login = () => {
    const [email_value, setEmailValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState(null)

   const history = useHistory()

   targetView('Login');
   function targetView(viewName) {
    // Validate if the Target Libraries are available on your website
    if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
      window.adobe.target.triggerView(viewName);
    }
  }
    const emailChange = (e) =>{
        setEmailValue(e.target.value)
    }

    const passwordChange = (e) =>{
        setPasswordValue(e.target.value)
    }
    

    const submitForm = (e) => {
        e.preventDefault()
      const newUser =  users.filter((user) => {
            return user.email === email_value
        })
        if (newUser.length  === 0) {
            alert("Incorrect Email")
        }
        else {
            if ( newUser[0].password ===  passwordValue) {
                try{
                    if(window.Visitor){ 
                        window.Visitor.getInstance("14AF2CD35CD3D8060A495CDCAdobeOrg").setCustomerIDs({ 
                            "userid":{ 
                                "id":email_value, 
                                "authState":window.Visitor.AuthState.AUTHENTICATED
                            }
                        }, "SHA-256"); 
                    }
                    
                }
                catch(e){
                    console.log(e);
                }

                history.push('/account')
            }
            else {
                alert("Incorrect Password")
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
