import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './NavBar.css'
// import dals from './menus/dals'


export class NavBar extends Component {
    render() {
        return (
            <>
			<Navbar collapseOnSelect expand="lg" >
				<Container>
				{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" class="">
					<Nav className="me-auto">
					<Nav.Link href="/" className="nav-links">Home</Nav.Link>	
					<NavDropdown title="Groceries" id="collasible-nav-dropdown">
						<NavDropdown.Item>All Groceries</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/groceries">Dals & Pulses</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">Almonds</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">Cashews</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">Dry Fruit</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">Mukhwas</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">Rice & Rice Products</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Household" id="collasible-nav-dropdown">
						<NavDropdown.Item>All Household </NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/household">Cookware</NavDropdown.Item>
						<NavDropdown.Item href="/household">Dust Pans</NavDropdown.Item>
						<NavDropdown.Item href="/household">Scrubbers</NavDropdown.Item>
						<NavDropdown.Item href="/household">Dust Cloth</NavDropdown.Item>
						<NavDropdown.Item href="/household">Mops</NavDropdown.Item>
						<NavDropdown.Item href="/household">Kitchenware</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Personal Care" id="collasible-nav-dropdown">
						<NavDropdown.Item>Baby Care</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/personalCare">Baby Soap</NavDropdown.Item>
						<NavDropdown.Item href="/personalCare">Baby Care Accessories</NavDropdown.Item>
						<NavDropdown.Item href="/personalCare">Baby Oil & Shampoos</NavDropdown.Item>
						<NavDropdown.Item href="/personalCare">Baby Creams & Lotion</NavDropdown.Item>
						<NavDropdown.Item href="/personalCare">Baby Powder</NavDropdown.Item>
						<NavDropdown.Item href="/personalCare">Diapers & Wipes</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Packaged Foods" id="collasible-nav-dropdown">
						<NavDropdown.Item>All Accessories</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/packagedFood">Baby Foods</NavDropdown.Item>
						<NavDropdown.Item href="/packagedFood">Dessert Items</NavDropdown.Item>
						<NavDropdown.Item href="/packagedFood">Biscuits</NavDropdown.Item>
						<NavDropdown.Item href="/packagedFood">Breakfast Cereals</NavDropdown.Item>
						<NavDropdown.Item href="/packagedFood">Canned Food</NavDropdown.Item>
						<NavDropdown.Item href="/packagedFood">Chocolates & Sweets</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Beverages" id="collasible-nav-dropdown">
						<NavDropdown.Item>Tea & Coeffe</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/beverages">Green Tea</NavDropdown.Item>
						<NavDropdown.Item href="/beverages">Ground Coffee</NavDropdown.Item>
						<NavDropdown.Item href="/beverages">Herbal Tea</NavDropdown.Item>
						<NavDropdown.Item href="/beverages">Instant Coffee</NavDropdown.Item>
						<NavDropdown.Item href="/beverages">Tea</NavDropdown.Item>
						<NavDropdown.Item href="/beverages">Tea Bags</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link  href="/gourment" >Gourment</Nav.Link>
					<Nav.Link href="offer">Offers</Nav.Link>
					<Nav.Link href="contact">Contact</Nav.Link>
					</Nav>
					{/* <Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Dank memes
					</Nav.Link>
					</Nav> */}
				</Navbar.Collapse>
				</Container>
</Navbar>
			</>
        )
    }
}
export default NavBar;




