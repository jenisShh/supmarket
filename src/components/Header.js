import React, { Component } from "react";
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="agileits_header">
          <div className="container">
            <div className="w3l_offers">
              <p>
                SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
                <a href="products.html">SHOP NOW</a>
              </p>
            </div>
            <div className="agile-login">
              <ul>
                <li>
                  <a href="registered.html"> Create Account </a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="contact.html">Help</a>
                </li>
              </ul>
            </div>
            <div className="product_list_header">
              <form action="#" method="post" className="last">
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="display" value="1" />
                <button
                  className="w3view-cart"
                  type="submit"
                  name="submit"
                  value=""
                >
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
