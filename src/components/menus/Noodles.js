import axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Header from '../Header'
import Logo from '../logo'
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import NavBar from '../NavBar'

const Noodles = () => {

	useEffect(() => {
		getNoodles();
	}, []);
    
	const[noodles, setNoodles] = useState([]);
	const[loading, setLoading] = useState(false);
	const getNoodles = async () =>{
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
			  setNoodles(res.data.data);
			  setLoading(true);
			//   filter(product => product.categoryId === 3);
			  console.log(noodles);
		} catch (err) {
			alert(err.message);
		}
	}

	const Noodle = ({noodle}) => {
		return(
			<>
			
			<Card className = "ml-3 my-3 p-3 rounded h-90">
            <Card.Img  src={`${noodle.images[0].imageName}`} />
            <Card.Body>
                <Card.Title>
                    {`${noodle.title}`}
                </Card.Title>
                <Card.Subtitle className= "mb-2 text-muted">  
                    {`${noodle.categoryTitle}`}
                </Card.Subtitle>
				<p>NRS {`${noodle.unitPrice[0].sellingPrice}`}</p> 
                <a href="/Allitems" class="card-link">Shop Now</a>
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
                        <li><a href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li class="active">NOODLES</li>
                    </ol>
                </div>
	        </div>

            <div class="products">
		<div class="container">
			<div class="col-md-4 products-left">
				<div class="categories">
					<h2>Categories</h2>
					<ul class="cate">
						<li><a href="/products"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA</a></li>
							<ul>
								<li><a href="/Pizzas1"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 1</a></li>
								<li><a href="/Pizzas2"><i class="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 2</a></li>
							</ul>
						<li><a href="/Momos"><i class="fa fa-arrow-right" aria-hidden="true"></i>MOMO</a></li>
						<li><a href="/Noodles"><i class="fa fa-arrow-right" aria-hidden="true"></i>NOODLES</a></li>
						<li><a href="/Chillies"><i class="fa fa-arrow-right" aria-hidden="true"></i>CHILLI</a></li>
						<li><a href="/Sandwiches"><i class="fa fa-arrow-right" aria-hidden="true"></i>SANDWICH</a></li>
						<li><a href="/Healthychoices"><i class="fa fa-arrow-right" aria-hidden="true"></i>HEALTHY CHOICE</a></li>
						<li><a href="/Rices"><i class="fa fa-arrow-right" aria-hidden="true"></i>RICE</a></li>
						
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
                    noodles.filter((noodle) => noodle.categoryId===4).map((noodle) => (
                        <Col sm={12} md={6} lg={4} key= {noodle.id}> 
                        <Noodle noodle = {noodle} />
                        </Col>
                )) }

      </Row>

				<nav class="numbering">
					<ul class="pagination paging">
						<li>
							<a href="/" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="active"><a href="/">1<span class="sr-only">(current)</span></a></li>
						<li><a href="/">2</a></li>
						<li><a href="/">3</a></li>
						<li><a href="/">4</a></li>
						<li><a href="/">5</a></li>
						<li>
							<a href="/" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							</a>
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

export default Noodles
