import Home from './components/Home';
import Contact from './components/Contact';
import Gourment from './components/Gourment';
import Groceries from './components/menus/groceries';
import Household from './components/menus/household';
import Offer from './components/Offer';
import PersonalCare from './components/menus/personalCare';
import PackagedFood from './components/menus/packagedFood';
import Beverages from './components/menus/beverages';
import Register from './components/Register';
import Login from './components/login';
import About from './components/About';
import Faq from './components/faq';
import Products from './components/Categor';



import {
  Route,
  BrowserRouter as Router,  
  Routes,
  Link
}
from 'react-router-dom';
// import Menus from './Menus';


function App() {
  return (
    <Router>
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* SIGN UP / LOGIN */}
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>} />
        {/* SIGN UP / LOGIN */}
        {/* NavBar Menu Item Links  */}
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/household" element={<Household />} /> 
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route path="/packagedFood" element={<PackagedFood />} />
        <Route path="/beverages" element={<Beverages />} />
        {/* NavBar Menu Item Links  */}

        <Route path="/Gourment" element={<Gourment />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/Contact" element={<Contact />} />
        {/* FOOTER LINKS */}
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/products" element={<Products/>} />
        {/* FOOTER LINKS */}

        {/* <Route path="/menus" element={<Menus />} /> */}

      </Routes>
    </>
    </Router>
  );
}

export default App;
