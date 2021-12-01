import React, {useEffect, useState} from "react";
import axios from "axios";
// import pic1 from "../assets/images/11.jpg";
// import pic2 from "../assets/images/22.jpg";
// import pic3 from "../assets/images/44.jpg";
// import Immage from "./Immage";
import { Carousel } from "react-bootstrap";

 const Immagess = () => {
  useEffect(() => {
    getImmagess ()
  }, [])

  const[immagess, setImmagess] = useState([]);
  const[loading, setLoading] = useState(false);
  const getImmagess = async ()=> {

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
    ) 
    setImmagess(response.data.data[0].details);
    setLoading(true);
    console.log(immagess)
  } catch (err) {
    alert(err.message);
  }
}


const Immage = ({immage}) => {
  return (
      <>
          {/* <Carousel fade> */}
      <Carousel.Item >
        <img className="d-block w-100" src={`${immage.images}`} alt="" />
        <Carousel.Caption textalign="center">
          <h1>
            BUY RICE PROUCTS ARE <br /> NOW ON LINE WITH US
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={500}>
        <img className="d-block w-100" src={`${immage.images}`} alt="" />

        <Carousel.Caption>
          <h1>
            WHOLE SPICES PRODUCTS <br /> ARE NOW ON LINE WITH US
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}>
        <img className="d-block w-100" src={`${immage.images}`} alt="" />

        <Carousel.Caption>
          <h1>
            WHOLE SPICES PRODUCTS <br /> ARE NOW ON LINE WITH US
          </h1>
        </Carousel.Caption>
      </Carousel.Item> */}
    {/* </Carousel> */}
      </>
  )
}



return (
  <>
  <Carousel>


  {loading &&
  immagess.map((immage) => {
    <Carousel.Item interval={1000} key={immage.id} >
      <Immage immage = {immage} />
    </Carousel.Item>
      })}
    </Carousel>
      
    </>
  );
}
export default Immagess;
