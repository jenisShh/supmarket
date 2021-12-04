import React from 'react'
import { Link } from 'react-router-dom'
import card from "../assets/images/card.png"

function Footer() {
    return (
        <>
        <div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/About">About Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="Contact">Contact Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/faq">FAQ's</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/Allitems">Special Products</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3> 
					<ul className="info"> 


						<li><a href="/Pizzas"><i className="fa fa-arrow-right" aria-hidden="true"></i>PIZZA</a></li>
						<li><a href="/Momos"><i className="fa fa-arrow-right" aria-hidden="true"></i>MOMO</a></li>
						<li><a href="/Noodles"><i className="fa fa-arrow-right" aria-hidden="true"></i>NOODLES</a></li>
						<li><a href="/Chillies"><i className="fa fa-arrow-right" aria-hidden="true"></i>CHILLI</a></li>
						<li><a href="/Sandwiches"><i className="fa fa-arrow-right" aria-hidden="true"></i>SANDWICH</a></li>
						<li><a href="/Healthychoices"><i className="fa fa-arrow-right" aria-hidden="true"></i>HEALTHY CHOICE</a></li>
						<li><a href="/Rices"><i className="fa fa-arrow-right" aria-hidden="true"></i>RICE</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/Allitems">Store</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/">My Cart</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/login">Login</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="/Registerr">Create Account</a></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2017 Super Market. All rights reserved | Design by <a href="/">Jenish</a></p>
			</div>
		</div>
		
	</div>

    <div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><Link to="https://www.facebook.com/" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
						<li><Link to="https://www.twitter.com/" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
						<li><Link to="https://www.facebook.com/" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
						<li><Link to="https://www.facebook.com/" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></Link></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src={card} alt=" " className="img-responsive" />
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
    </>
    
    )
}

export default Footer
