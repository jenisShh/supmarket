import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Logo from "../components/logo";
import NavBar from "../components/NavBar";

function Registerr() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [ppassword, setPPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [phn, setPhn] = useState("");
  const navigate = useNavigate();

  async function handleData() {
    let item = { fname, lname, email, ppassword, cpassword, phn };
    console.warn(item);

    let result = await fetch(
      "https://uat.ordering-boafresh.ekbana.net//api/v4/auth/signup",
      {
        method: "POST",
        headers: {
          "Api-key":
            "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
          "Warehouse-Id": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: fname,
          last_name: lname,
          email: email,
          password: ppassword,
          mobile_number: phn,
        }),
      }
    );
    result = await result.json();
    // console.warn("result", result)
    localStorage.setItem("user-info", JSON.stringify(result));
    if (result.errors) {
      alert(result.errors[0].message);
    } else {
      localStorage.setItem("user-info", JSON.stringify(result));
    }
    navigate("/");
    console.log(result);
  }
  return (
    <>
      <Header />
      <Logo />
      <NavBar />
      <div className="breadcrumbs">
        <div className="container">
          <ol
            className="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="/">
                <span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li className="active">Register</li>
          </ol>
        </div>
      </div>
      <div className="register">
        <div className="container">
          <h2>Register Here</h2>
          <div className="login-form-grids">
            <h5>profile information</h5>
            {/* <form action="#" method="post"> */}
            <input
              type="text"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
              placeholder="First Name..."
            />
            <input
              type="text"
              value={lname}
              onChange={(e) => setLName(e.target.value)}
              placeholder="Last Name..."
            />
            <input
              type="text"
              value={phn}
              onChange={(e) => setPhn(e.target.value)}
              placeholder="Phone Number.."
            />
            {/* </form> */}
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>Subscribe to Newsletter
                </label>
              </div>
            </div>
            <h6>Login information</h6>
            {/* <form action="#" method="post"> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <input
              type="password"
              value={ppassword}
              onChange={(e) => setPPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              placeholder="Password Confirmation"
            />
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            {/* </form> */}
            <button onClick={handleData} className="btn btn-primary">
              {" "}
              Register
            </button>
            {/* <input onClick = {handleData} type="submit" value="Register"/> */}
          </div>
          <div className="register-home">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registerr;
