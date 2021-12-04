import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import { FaPhoneAlt } from "../../node_modules/react-icons/fa";
import axios from "axios";

function Logo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://uat.ordering-boafresh.ekbana.net/api/v4/product",
        {
          headers: {
            "Api-key":
              "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            "Warehouse-Id": "1",
          },
        }
      );
      setPosts(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div>
      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i aria-hidden="true">
                  {" "}
                  <FaPhoneAlt />{" "}
                </i>
                Order online or call us : (+0123) 234 567
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left">
            <h1>
              <a href="/">super Market</a>
            </h1>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
