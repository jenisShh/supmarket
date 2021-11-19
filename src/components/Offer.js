import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Logo from './logo'
import NavBar from './NavBar'
import TopBrand from './TopBrand'

function Offer() {
    return (
        <>
            <Header/>
            <Logo/>
            <NavBar/>
            <div class="breadcrumbs">
                <div class="container">
                    <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><a href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li class="active">Offers</li>
                    </ol>
                </div>
	        </div>
            <TopBrand/>
            <Footer/>

        </>
    )
}

export default Offer
