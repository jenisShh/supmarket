import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css"


function Immagess()  {
  useEffect(() => {
    getImmagess();
  }, []);

  const [immagess, setImmagess] = useState([]);
  const [loading, setLoading] = useState(false);
  const getImmagess = async () => {
    try {
      const response = await axios.get(
        "https://uat.ordering-boafresh.ekbana.net/api/v4/newhome",
        {
          headers: {
            "Api-key":
              "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            "Warehouse-Id": "1",
          },
        }
      );
      setImmagess(response.data.data[0].details);
      setLoading(true);
      console.log(immagess);
    } catch (err) {
      alert(err.message);
    }
  };

    return (
      <div>
        <Carousel fade interval={1000} >
        {loading &&
        immagess.map((immage) => (
          <Carousel.Item >
          <img className="d-block w-100" src={immage.images}  />
         
          </Carousel.Item>
        ))}
        </Carousel> 
      </div>
    );
};
export default Immagess;
