// import '../public/assets/css'
import Contact from './components/Contact';
import Home from './components/Home';
// import Header from './components/Header';
// import Logo from './components/logo';
// import Slider from './components/Slider';
// import NavBar from './components/NavBar';
import Gourment from './components/Gourment';
// import TestNav from './componnts/TestNav';

import Groceries from './components/menus/groceries';
import Household from './components/menus/household';
import Offer from './components/Offer';
import PersonalCare from './components/menus/personalCare';
import PackagedFood from './components/menus/personalCare';
import Beverages from './components/menus/beverages';



import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link
}
from 'react-router-dom';


function App() {
  return (
    <Router>
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
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

      </Routes>
    </>
    </Router>
  );
}

export default App;
