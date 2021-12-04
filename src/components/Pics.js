import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css"


function Pics()  {
  useEffect(() => {
    getPics();
  }, []);

  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPics = async () => {
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
      setPics(response.data.data[5].details);
      setLoading(true);
      console.log(pics);
    } catch (err) {
      alert(err.message);
    }
  };

  // const Immage = ({ pic }) => {
    return (
      <div>
        <Carousel >
        {loading && 
        pics.map((pic) => (
          <Carousel.Item >
          <img className="d-block w-100" src={pic.images}  />
         
          </Carousel.Item>
        ))}
        </Carousel> 
      </div>
    );

  // return (
  //   <>
  //     {/* <Carousel> */}

  //     {loading &&
  //       picss.map((pic) => {
  //         <Carousel.Item interval={1000} key={pic.id}>
  //           <Immage pic={pic} />
  //         </Carousel.Item>;
  //       })}
  //     {/* </Carousel> */}
  //   </>
  // );
};
export default Pics;


{/* <Carousel>
<Carousel.Item>
    <img
    className="d-block w-100"
    src={fslide}
    alt="Third slide"
    />
</Carousel.Item>
</Carousel> */}