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
					<NavDropdown title="PIZZA" id="collasible-nav-dropdown">
						<NavDropdown.Item>PIZZA</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/groceries">Pizza Sub</NavDropdown.Item>
						<NavDropdown.Item href="/groceries">pizza Sub1</NavDropdown.Item>
					</NavDropdown>	
					<Nav.Link href="/" > MOMO </Nav.Link>
					<Nav.Link href="/" > NOODLES </Nav.Link>
					<Nav.Link href="/" > CHILLI </Nav.Link>
					<Nav.Link href="/" > SANDWICH </Nav.Link>
					<Nav.Link href="/" > HEALTHY CHOICE  </Nav.Link>
					<Nav.Link href="/" > RICE </Nav.Link>
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




