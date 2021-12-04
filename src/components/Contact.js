import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./logo";
import NavBar from "./NavBar";
import {FaEnvelope} from "../../node_modules/react-icons/fa";
import {FaPhone} from "../../node_modules/react-icons/fa";
import {FaFacebook} from "../../node_modules/react-icons/fa";
import {FaTwitter} from "../../node_modules/react-icons/fa";
import {FaRss} from "../../node_modules/react-icons/fa";
import { Link } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  return (
    <>
      <Header />
      <Logo />
      <NavBar />
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
            <li className="active">Contact</li>
          </ol>
        </div>
	   </div>


     <div className="about">
		<div className="w3_agileits_contact_grids">
			<div className="col-md-6 w3_agileits_contact_grid_left">
				<div className="agile_map">
					{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917" style="border:0"></iframe> */}
				</div>
				<div className="agileits_w3layouts_map_pos">
					<div className="agileits_w3layouts_map_pos1">
						<h3>Contact Info</h3>
						<p>1234k Avenue, 4th block, New York City.</p>
						<ul className="wthree_contact_info_address">
							<li><i  aria-hidden="true"> <FaEnvelope/></i><Link to="mailto:info@example.com">info@example.com</Link></li>
							<li><i aria-hidden="true"> <FaPhone/></i>+(0123) 232 232</li>
						</ul>
						<div className="w3_agile_social_icons w3_agile_social_icons_contact">
							<ul>
              
								<li><Link to="https://www.facebook.com/" className="icon icon-cube agile_facebook "><FaFacebook/>  </Link></li>
								<li><Link to="/https://www.facebook.com/" className="icon icon-cube agile_rss"> <FaRss/></Link></li>
								<li><Link to="/https://www.twitter.com/" className="icon icon-cube agile_t"> <FaTwitter/></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 w3_agileits_contact_grid_right">
				<h2 className="w3_agile_header">Leave a<span> Message</span></h2>

				<form action="#" method="post">
					<span className="input input--ichiro">
						<input className="input__field input__field--ichiro" type="text" id="input-25" name="Name" placeholder=" " required="" />
						<label className="input__label input__label--ichiro" for="input-25">
							<span className="input__label-content input__label-content--ichiro">Your Name</span>
						</label>
					</span>
					<span className="input input--ichiro">
						<input className="input__field input__field--ichiro" type="email" id="input-26" name="Email" placeholder=" " required="" />
						<label className="input__label input__label--ichiro" for="input-26">
							<span className="input__label-content input__label-content--ichiro">Your Email</span>
						</label>
					</span>
					<textarea name="Message" placeholder="Your message here..." required=""></textarea>
					<input type="submit" value="Submit"/>
				</form>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>
      <Footer/>
    </>
  );
}

export default Contact;
