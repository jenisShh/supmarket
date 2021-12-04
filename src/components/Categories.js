import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../components/Categories.css"
// import Category from "./Category";

const Categories = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const [categoriess, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://uat.ordering-boafresh.ekbana.net/api/v4/newhome",
        {
          headers: {
            "Api-key":
              "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            "Warehouse-Id": "1",
          },
        }
      );
      setCategories(res.data.data[1].categories);
      setLoading(true);
      console.log(categoriess)
    } catch (err) {
      alert(err.message);
    }
  };



  const Category = ({category}) => {
    return (
        <>
        <Card className = "ml-3 my-3 p-3 rounded h-90">
            <Card.Img  src={`${category.icon}`} />
            <Card.Body>
                <Card.Title>
                    {`${category.title}`}
                </Card.Title>
                <Card.Subtitle className= "mb-2 text-muted">  
                    {`${category.productCount}`} products
                </Card.Subtitle>
                <a href="/Allitems" class="card-link">Shop Now</a>
            </Card.Body> 
        </Card>

        </>
    )
}

    return (
        <>
      <h3> Shop By Categories</h3>
      <p className="mt-2" >We've got something for everyone</p>
       <Row>
                {loading && 
                    categoriess.map((category) => (
                        <Col sm={12} md={6} lg={4} key= {category.id}> 
                        <Category category = {category} />
                        </Col>
                )) }

      </Row>
        
      {/* <div class="container">
        <div class="row text-center mb-3">
          <div class="col-md-12">
            <h2>Shop By Categories</h2>
            <p>We’ve got something for everyone</p>
            <hr />
          </div>
        </div>
        <div class="row">
          {/* // -- Swiper -- */}
          {/* <div class="swiper-container">
            <div class="swiper-wrapper">
                {/* {loading && 
                categories.map((category) => ( */}

                    {/* <div class="swiper-slide">
                <div class="row">
              
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                  <div class="col-md-3">
                        <div class="card">
                        
                        <div class="card-img">
                            <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                        </div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                            <button
                            type="button"
                            class="btn btn-outline-danger btn-block btn-sm"
                            >
                            Lets Judge it.
                            </button>
                        </div>
                        </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="row">
                  <div class="col-md-3">
                    <div class="card">
                      
                      <div class="card-img">
                        <img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" />
                      </div>
                      <div class="card-body">
                        <h5>Renault KWID</h5>
                        <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>

                        <button
                          type="button"
                          class="btn btn-outline-danger btn-block btn-sm"
                          >
                          Lets Judge it.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                          


            </div>
              Add Pagination 
            <div class="swiper-pagination"></div>
              Add Arrows 
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div> */}
        {/* </div> 
      </div>  */}
    </>
  );
}
export default Categories;

