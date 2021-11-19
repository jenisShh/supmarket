import React from "react";
import {Carousel} from 'react-bootstrap';
// import { Fade } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/images/11.jpg'
import pic2 from '../assets/images/22.jpg'
import pic3 from '../assets/images/44.jpg'

function Slider() 
{
  return(
    <>

    <Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption textalign="center">
      <h1>BUY RICE PROUCTS ARE <br/> NOW ON LINE WITH US</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>WHOLE SPICES PRODUCTS  <br/> ARE  NOW ON LINE WITH US</h1>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>WHOLE SPICES PRODUCTS  <br/> ARE  NOW ON LINE WITH US</h1>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}
export default Slider;