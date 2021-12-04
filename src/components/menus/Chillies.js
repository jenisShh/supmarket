import axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Header from '../Header'
import Logo from '../logo'
import { Col, NavLink, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import NavBar from '../NavBar'
import { Link } from 'react-router-dom';

const Chillies = () => {

	useEffect(() => {
		getChillies();
	}, []);
    
	const[chillies, setChillies] = useState([]);
	const[loading, setLoading] = useState(false);
	const getChillies = async () =>{
		try {
			const res = await axios.get(
				"https://uat.ordering-boafresh.ekbana.net/api/v4/product",
				{
				  headers: {
					"Api-key":	
					  "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
					"Warehouse-Id": "1",
				  },
				}
			  );
			  setChillies(res.data.data);
			  setLoading(true);
			  console.log(chillies);
		} catch (err) {
			alert(err.message);
		}
	}

	const Chilli = ({chilli}) => {
		return(
			<>
			
			<Card className = "ml-3 my-3 p-3 rounded h-90">
            <Card.Img  src={`${chilli.images[0].imageName}`} />
            <Card.Body>
                <Card.Title>
                    {`${chilli.title}`}
                </Card.Title>
                <Card.Subtitle className= "mb-2 text-muted">  
                    {`${chilli.categoryTitle}`}
                </Card.Subtitle>
				<p>NRS {`${chilli.unitPrice[0].sellingPrice}`}</p> 
                <Link to="/Allitems" class="card-link">Shop Now</Link>
				<div className = "snipcart-details"> 
						<input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                            />
				</div>
            </Card.Body> 
        </Card>
			</>
		)

	}

    return (
        <>
            <Header/>
            <Logo/>
            <NavBar/>
            <div class="breadcrumbs">
                <div class="container">
                    <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                        <li class="active">CHILLI</li>
                    </ol>
                </div>
	        </div>

            <div class="products">
		<div class="container">
			<div class="col-md-4 products-left">
				<div class="categories">
					<h2>Categories</h2>
					<ul class="cate">
						<li><Link to="/Pizzas"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA</Link></li>
							<ul>
								<li><Link to="/Pizzas1"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 1</Link></li>
								<li><Link to="/Pizzas2"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 2</Link></li>
							</ul>
						<li><Link to="/Momos"><i class="fa fa-arrow-right" aria-hidden="true"></i>MOMO</Link></li>
						<li><Link to="/Noodles"><i class="fa fa-arrow-right" aria-hidden="true"></i>NOODLES</Link></li>
						<li><Link to="/Chillies"><i class="fa fa-arrow-right" aria-hidden="true"></i>CHILLI</Link></li>
						<li><Link to="/Sandwiches"><i class="fa fa-arrow-right" aria-hidden="true"></i>SANDWICH</Link></li>
						<li><Link to="/Healthychoices"><i class="fa fa-arrow-right" aria-hidden="true"></i>HEALTHY CHOICE</Link></li>
						<li><Link to="/Rices"><i class="fa fa-arrow-right" aria-hidden="true"></i>RICE</Link></li>
						
					</ul>
				</div>																																												
			</div>
			<div class="col-md-8 products-right">
				<div class="products-right-grid">
					<div class="products-right-grids">
						<div class="sorting">
							<select id="country" onchange="change_country(this.value)" class="frm-field required sect">
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Default sorting</option>
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by popularity</option> 
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by average rating</option>					
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by price</option>								
							</select>
						</div>
						<div class="sorting-left">
							<select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 9</option>
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 18</option> 
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 32</option>					
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>All</option>								
							</select>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<h3> Shop By Categories</h3>
      <p className="mt-2" >We've got something for everyone</p>
       <Row>
                {loading && 
                    chillies.filter((chilli) => chilli.categoryId===5).map((chilli) => (
                        <Col sm={12} md={6} lg={4} key= {chilli.id}> 
                        <Chilli chilli = {chilli} />
                        </Col>
                )) }

      </Row>

				<nav class="numbering">
					<ul class="pagination paging">
						<li>
							<Link to="/" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</Link>
						</li>
						<li class="active"><Link to="/">1<span class="sr-only">(current)</span></Link></li>
						<li><Link to="/">2</Link></li>
						<li><Link to="/">3</Link></li>
						<li><Link to="/">4</Link></li>
						<li><Link to="/">5</Link></li>
						<li>
							<Link to="/" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
        </>
    )
}

export default Chillies
