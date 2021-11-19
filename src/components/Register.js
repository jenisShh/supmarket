import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

function register() {
    return (
        <>
        <Header/>
        <NavBar/>
        <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                    <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                    <li className="active">Register Page</li>
                </ol>
            </div>
	    </div>
        <div className="register">
            <div className="container">
                <h2>Register Here</h2>
                <div className="login-form-grids">
                    <h5>profile information</h5>
                    <form action="#" method="post">
                        <input type="text" placeholder="First Name..." required=" " />
                        <input type="text" placeholder="Last Name..." required=" " />
                    </form>
                    <div className="register-check-box">
                        <div className="check">
                            <label className="checkbox"><input type="checkbox" name="checkbox"/><i> </i>Subscribe to Newsletter</label>
                        </div>
                    </div>
                    <h6>Login information</h6>
                        <form action="#" method="post">
                        <input type="email" placeholder="Email Address" required=" " />
                        <input type="password" placeholder="Password" required=" " />
                        <input type="password" placeholder="Password Confirmation" required=" " />
                        <div className="register-check-box">
                            <div className="check">
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i> </i>I accept the terms and conditions</label>
                            </div>
                        </div>
                        <input type="submit" value="Register"/>
                    </form>
                </div>
                <div className="register-home">
                    <a href="index.html">Home</a>
                </div>
            </div>
        </div>
        <Footer/>
      </>
    )
}

export default register
