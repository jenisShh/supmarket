import React from 'react'
import Header from './Header'
import Logo from './logo'
import NavBar from './NavBar'
// import TopBrand from './TopBrand'
import { Container} from 'react-bootstrap';
import Footer from './Footer'
import Gallary from './Gallary'
import NewProducts from './NewProducts'
import Categories from './Categories'
import Immagess from './Immagess'
import Pics from './Pics'

function Home() {     
    
    return (
        <>
            <Header />
            <Logo />
            <NavBar />
            
            <Immagess/>
            <Container>
                 <Categories/>
            </Container>
            {/* <TopBrand /> */}
            
            <Pics/>
            <NewProducts/>
            <Gallary/>
            
            <Footer />
            {/* <Menus /> */}

        </>
    )
}
export default Home;



