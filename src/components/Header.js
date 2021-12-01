import React, { Component } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import '../assets/css/bootstrap.css'
import '../assets/css/style.css';
import {FaCartArrowDown} from "../../node_modules/react-icons/fa";


export class Header extends Component {
  render() {
    return (
      <>
        <div className="agileits_header">
          <div className="container">
            <div className="w3l_offers">
              <p>
                SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
                <a href="/products">SHOP NOW</a>
              </p>
            </div>
            <div className="agile-login">
              <ul>
                <li>
                  <a href="/register"> Create Account </a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/contact">Help</a>
                </li>
              </ul>
            </div>
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
                  <i aria-hidden > <FaCartArrowDown/></i>
                </button>

              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        
      </>
      
    );
  }
}

export default Header;
