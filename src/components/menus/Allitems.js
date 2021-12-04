import axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Header from '../Header'
import Logo from '../logo'
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import NavBar from '../NavBar'
import "../../assets/css/style.css"

const Allitems = () => {

	useEffect(() => {
		getAllitems();
	}, []);
    
	const[allitems, setAllitems] = useState([]);
	const [allProducts, setAllProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])
	const [filters, setFilters] = useState({
		s: ""
	})
	const[loading, setLoading] = useState(false);

	const getAllitems = async () =>{
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
			  setAllitems(res.data.data);
			  setLoading(true);
			//   res = await res.json()
			  setAllProducts(res.data.data);
			  setFilteredProducts(res.data.data);
			//   filter(product => product.categoryId === 3);
			  console.log(allitems);
		} catch (err) {
			alert(err.message);
		}
	}

	function find(value) {
		if(value.title === filters ) {
		  return true;
		} else {
		  return false;
		}
	  }


	const Allitem = ({allitem}) => { 
		return(
			<>
			<Card className = "ml-3 my-3 p-3 rounded h-90 ">
           		 <Card.Img  src={`${allitem.images[0].imageName}`} />
					<Card.Body>
						<Card.Title>
							{`${allitem.title}`}
						</Card.Title>
						<Card.Subtitle className= "mb-2 text-muted">  
							{`${allitem.categoryTitle}`} 
						</Card.Subtitle>
						<p>NRS {`${allitem.unitPrice[0].sellingPrice}`}</p> 
						<a href="/Allitems" className="card-link">Shop Now</a>
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
	 useEffect(() => {
		// let allitems = allProducts.filter(p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || 
		// p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
		let allitems = allProducts.filter(find);
		setFilteredProducts(allitems);
	}, [filters]);


    return (
        <>
            <Header/>
            <Logo/>
            <NavBar/>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><a href="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li className="active">ALL ITEMS</li>
                    </ol>
                </div>
	        </div>

			<div className="w3l_search">
			{/* <form action="#" method="post"> */}
				<input type="text" onChange = {(e) => setFilters(e.target.value)} className = "form-control mb-2 mt-2" placeholder="Search for a Product..." required=""/>
				<select className = "form-select">
					<option>Select</option>
					<option value = "asc"> Price Ascending</option>
					<option value = "desc"> Price Decending</option>

					
				 </select>
				<div className="clearfix"></div>
			{/* </form> */}
		</div>
		{/* <div>

			{filteredProducts.map((prod) => 
					{prod.title}
					)
				}
		</div> */}
            <div className="products">
		<div className="container">
			<div className="col-md-4 products-left">
				<div className="categories"> 
					<h2>Categories</h2>
					<ul className="cate">
                        <li><a href="/Allitems"><i className="fa fa-arrow-right" aria-hidden="true"></i>All Items</a></li>
						<li><a href="/Pizzas"><i className="fa fa-arrow-right" aria-hidden="true"></i>PIZZA</a></li>
							<ul>
								<li><a href="/Pizzas1"><i className="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 1</a></li>
								<li><a href="/Pizzas2"><i className="fa fa-arrow-right" aria-hidden="true"></i>PIZZA Sub 2</a></li>
							</ul>
						<li><a href="/Momos"><i className="fa fa-arrow-right" aria-hidden="true"></i>MOMO</a></li>
						<li><a href="/Noodles"><i className="fa fa-arrow-right" aria-hidden="true"></i>NOODLES</a></li>
						<li><a href="/Chillies"><i className="fa fa-arrow-right" aria-hidden="true"></i>CHILLI</a></li>
						<li><a href="/Sandwiches"><i className="fa fa-arrow-right" aria-hidden="true"></i>SANDWICH</a></li>
						<li><a href="/Healthychoices"><i className="fa fa-arrow-right" aria-hidden="true"></i>HEALTHY CHOICE</a></li>
						<li><a href="/Rices"><i className="fa fa-arrow-right" aria-hidden="true"></i>RICE</a></li>
						
					</ul>
				</div>																																												
			</div>
			<div className="col-md-8 products-right">
				<div className="products-right-grid">
					<div className="products-right-grids">
						<div className="clearfix"> </div>
					</div>
				</div>
				<h3> Shop By Categories</h3>
      <p className="mt-2" >We've got something for everyone</p>
       <Row>
                {loading && 
                    allitems.map((allitem) => (
                        <Col sm={12} md={6} lg={4} key= {allitem.id}> 
                        <Allitem allitem = {allitem} />
                        </Col>
                )) }

      </Row>
				<nav className="numbering">
					<ul className="pagination paging">
						<li>
							<a href="/" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li className="active"><a href="/">1<span className="sr-only">(current)</span></a></li>
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
			<div className="clearfix"> </div>
		</div>
	</div>
        </>
    )
}

export default Allitems
