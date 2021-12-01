import React from 'react'
import Header from './Header'
import Logo from './logo'
import NavBar from './NavBar'
import TopBrand from './TopBrand'
import Brands from './Brands'
import fslide from '../assets/images/b1.jpg'
import sslide from '../assets/images/b3.jpg'
import {Carousel, Container} from 'react-bootstrap';
import Footer from './Footer'
import Gallary from './Gallary'
import NewProducts from './NewProducts'
import Categories from './Categories'
import Immagess from './Immagess'

// const url = 'https://uat.ordering-boafresh.ekbana.net/api/v4/newhome';



// import axios from 'axios'


// Api-key : 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'

function Home() {
//     useEffect(() => {
//         const fetchImages = async () => {
//             const response = await axios.get("https://uat.ordering-boafresh.ekbana.net/api/v4/newhome")
//             .catch((err) => {
//                 console.log("Err :",err);
//             });
//             console.log("The data from API is", response);
//     };
//     fetchImages();
    
// },[]);

        // var url = `https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`;
        // const Apikey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545" 
        
        // async function getImages() {
        //     var result = await Axios.get(url, Apikey);
        //     console.log(result.data);
        // }

        // const data = {title: "Category"};

        
      

            
        //     fetch('https://uat.ordering-boafresh.ekbana.net/api/v4/category', {
        //         method: 'GET',
        //         headers: {
        //             'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
        //             // 'Content-Type': 'application/json',
        //             'Warehouse-Id': '1'
        //         }   
        //     })
        //     .then(response => response.json())
        //     .then((json) => {
        //         console.log(json)
        //         setData(json);
        //     },[]);

            // .catch(error => console.log(error))      
    
    return (
        <>
            <Header />
            <Logo />
            <NavBar />
            
            <Immagess/>
            <Container>
                 <Categories/>
            </Container>
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
            <NewProducts/>
            
            <Footer />
            {/* <Menus /> */}

        </>
    )
}
export default Home;



