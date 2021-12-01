import React from 'react'
import { Carousel } from 'react-bootstrap'

const Immage = (image) => {
    return (
        <>
            <Carousel fade>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={`${image.images}`} alt="" />
          <Carousel.Caption textalign="center">
            <h1>
              BUY RICE PROUCTS ARE <br /> NOW ON LINE WITH US
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={`${image.images}`} alt="" />

          <Carousel.Caption>
            <h1>
              WHOLE SPICES PRODUCTS <br /> ARE NOW ON LINE WITH US
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={400}>
          <img className="d-block w-100" src={`${image.images}`} alt="" />

          <Carousel.Caption>
            <h1>
              WHOLE SPICES PRODUCTS <br /> ARE NOW ON LINE WITH US
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}

export default Immage
