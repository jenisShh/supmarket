import React from 'react'
import Header from './Header'
import Logo from './logo'
import NavBar from './NavBar'
import Slider from './Slider'
import TopBrand from './TopBrand'
import Brands from './Brands'
import fslide from '../assets/images/b1.jpg'
import sslide from '../assets/images/b3.jpg'
import {Carousel} from 'react-bootstrap';
import Footer from './Footer'
import Gallary from './Gallary'
import NewProducts from './NewProducts'



function Home() {
    return (
        <>
            <Header />
            <Logo />
            <NavBar />
            
            <Slider />
            <TopBrand />
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={fslide}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sslide}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={fslide}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            
            <Gallary/>
            <Brands />
            <NewProducts/>
            <Footer />

        </>
    )
}

export default Home
