import React, { Component } from 'react'
import '../assets/css/style.css';
import {BsSearch} from '../../node_modules/react-icons/bs';
import {FaPhoneAlt} from '../../node_modules/react-icons/fa';


export class Logo extends Component {
    render() {
        return (
            <div>
                	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i aria-hidden="true"> <FaPhoneAlt/> </i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><a href="index.html">super Market</a></h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." required="" />
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i aria-hidden="true"> <BsSearch/> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
			
			<div className="clearfix"> </div>
		</div>
	</div>
            </div>
        )
    }
}

export default Logo;
