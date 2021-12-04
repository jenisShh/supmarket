import React, { useState, useEffect } from "react";
import axios from "axios";
import npoffer from "../assets/images/offer.png";
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"
import { Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import 'nodebootstrap/dist/css/bootstrap.min.css'
// import { NavLink } from "react-router-dom";

const NewProducts = () => {
  useEffect(() => {
    getNewProducts();
  }, []);

  const [newproducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartt, setCartt] = useState([]);

  const addToCartt = (newproduct => {
    setCartt([...cartt, newproduct]);
    console.log(('we are in add to cart'))

  })

  const getNewProducts = async () => {
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
      setNewProducts(res.data.data[2].sectionDetails.products);
      setLoading(true);
      console.log(newproducts);
    } catch (err) {
      alert(err.message);
    }
  };

  const NewProduct = ({ newproduct }) => {
    return (
      <>
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              <img src={npoffer} alt=" " className="img-responsive" />
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <a href="/Allitems">
                      <img
                        title=" "
                        alt=" "
                        src={`${newproduct.images[0].imageName}`}
                      />
                    </a>
                    <p>{`${newproduct.categoryTitle}`}</p>
                    <p>{`${newproduct.title}`}</p>
                    <p>NRS {`${newproduct.unitPrice[0].sellingPrice}`}</p>
                    <div className="stars">
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star gray-star"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h4>
                      {/* {`${newproduct.unitPrice.sellingPrice}`} <span>$55.00</span> */}
                    </h4>
                  </div>
                   <Button className = "button d-flex justify-content-center" type = "submit" onClick = {() => addToCartt(newproduct)} > 
                     Add to cart
                    </Button>   
                  <div className="snipcart-details top_brand_home_details">
{/*             
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"  
                          className="button"
                          // 
                          /> */}
                      
                   
                    {/* <form action method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"  
                          className="button"
                          // 
                          />
                      </fieldset>
                    </form> */}
                          {/*   onClick = {() => addToCartt(newproduct)} */}
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div className="clearfix"> </div>
      </>
    );
  };

  return (
    <>
      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <header> 
          <Button type = "submit" className = "d-flex justify-content-center"> 
                     Go To Cart ({cartt.length})
                    </Button> 
          </header>
          {loading &&
            newproducts.map((newproduct) => (
              <div className="col-md-3 top_brand_left-1" key={newproduct.id}>
                <div className="agile_top_brands_grids">
                  <NewProduct newproduct={newproduct} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );


};

export default NewProducts;
