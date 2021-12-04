import Home from "./components/Home";
import Contact from "./components/Contact";
import Offer from "./components/Offer";
import Register from "./forms/Registerr";
import Login from "./forms/Login";
import About from "./components/About";
import Faq from "./components/faq";
import Products from "./components/Products";
import Momos from "./components/menus/Momos";
import Noodles from "./components/menus/Noodles";
import Chillies from "./components/menus/Chillies";
import Sandwiches from "./components/menus/Sandwiches";
import Healthychoices from "./components/menus/Healthychoices";
import Rices from "./components/menus/Rices";
import Pizzas from "./components/menus/Pizzas";
import Pizzas1 from "./components/menus/Pizzas1";
import Pizzas2 from "./components/menus/Pizzas2";
import Allitems from "./components/menus/Allitems";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* SIGN UP / LOGIN */}
          <Route path="registerr" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* SIGN UP / LOGIN */}

          {/* NavBar Menu Item Links  */}
          <Route path="/allitems" element={<Allitems />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/pizzas1" element={<Pizzas1 />} />
          <Route path="/pizzas2" element={<Pizzas2 />} />
          <Route path="/Momos" element={<Momos />} />
          <Route path="/noodles" element={<Noodles />} />
          <Route path="/chillies" element={<Chillies />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/healthychoices" element={<Healthychoices />} />
          <Route path="/rices" element={<Rices />} />
          {/* NavBar Menu Item Links  */}

          <Route path="/offer" element={<Offer />} />
          <Route path="/Contact" element={<Contact />} />
          {/* FOOTER LINKS */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/products" element={<Products />} />
          {/* FOOTER LINKS */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
