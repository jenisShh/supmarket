import React, { Component } from "react";
import './slider.css'
// import pic1 from "../asset/images/11.jpg";
// import pic2 from "../asset/images/22.jpg";
// import pic3 from "../asset/images/44.jpg";

export class Slider extends Component {
  render() {
    return (
      <div className="slide">
        <ul id="demo1">
          <li>
            {/* <img src={pic1} alt="" /> */}
            {/* <!--Slider Description example--> */}
            <div class="slide1">
              <h3>Buy Rice Products Are Now On Line With Us</h3>
            </div>
          </li>
          <li>
            {/* <img src={pic2} alt="" /> */}
            <div class="slide2">
              {/* <h3>Whole Spices Products Are Now On Line With Us</h3> */}
            </div>
          </li>

          <li>
            {/* <img src={pic3} alt="" /> */}
            <div class="slide3">
              {/* <h3>Whole Spices Products Are Now On Line With Us</h3> */}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
