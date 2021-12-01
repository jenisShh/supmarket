import React, {useState, useEffect} from "react";
import axios from "axios";
import npoffer from "../assets/images/offer.png";
// import np14 from "../assets/images/14.png";
// import np15 from "../assets/images/15.png";
// import np16 from "../assets/images/16.png";
// import np17 from "../assets/images/17.png";

const NewProducts = () => {

  useEffect(() => {
    getNewProducts() 
  }, [])

  const[newproducts, setNewProducts] = useState([]);
  const[loading, setLoading] = useState(false)

  const getNewProducts = async() => {
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
      console.log(newproducts)
    } catch (err) {
      alert(err.message);
    }
  }




  const NewProduct = ({newproduct}) => {

    return(
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
                      <a href="products.html">
                        <img title=" " alt=" " src={`${newproduct.images[0].imageName}`} />
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
                    <div className="snipcart-details top_brand_home_details">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Fortune Sunflower Oil"
                            />
                          <input
                            type="hidden"
                            name="amount"
                            value="35.99"
                            />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                            />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                            />
                          <input type="hidden" name="return" value=" " />
                          <input
                            type="hidden"
                            name="cancel_return"
                            value=" "
                            />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                            />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        
        <div className="clearfix"> </div>
      </>
    )
 }

 return (
  <>
      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          {loading &&
          newproducts.map((newproduct) => (
            <div className="col-md-3 top_brand_left-1"  key = {newproduct.id}>
              <div className="agile_top_brands_grids">
                <NewProduct newproduct = {newproduct}/>
              </div>
            </div>
        ))}
     </div>
    </div>


</>
);
}

export default NewProducts;
