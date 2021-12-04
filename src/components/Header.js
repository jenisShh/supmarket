import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import { FaCartArrowDown } from "../../node_modules/react-icons/fa";
import { Nav, NavDropdown } from "react-bootstrap";
import {  useNavigate } from "react-router";
import "../assets/css/style.css";
// import { Nav, NavDropdown } from  'bootstrap/dist/css/bootstrap.css'

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/Registerr");
  }
  return (
    <>
      <div className="agileits_header">
        <div className="container">
          <div className="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <a href="/Allitems">SHOP NOW</a>
            </p>
          </div>
          <div className="agile-login">
            {localStorage.getItem("user-info") ? (
              <>
                <a href="/contact">Help</a>
              </>
            ) : (
              <ul>
                <li>
                  <a href="/Registerr"> Create Account </a>
                  <a href="/Login">Login</a>
                </li>
              </ul>
            )}
          </div>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title="user" />
              <NavDropdown.Item onClick={logout}> Log Out </NavDropdown.Item>
            </Nav>
          ) : null}
          <div className="product_list_header">
            <form action="/" method="post" className="last">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <button
                className="w3view-cart"
                type="submit"
                name="submit"
                value=""
              >
                <i aria-hidden>
                  {" "}
                  <FaCartArrowDown />
                </i>
              </button>
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
  // }
}

export default Header;
