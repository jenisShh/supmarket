// import '../public/assets/css'
import Contact from './components/Contact';
import Home from './components/Home';
// import Header from './components/Header';
// import Logo from './components/logo';
// import Slider from './components/Slider';
// import NavBar from './components/NavBar';
import Gourment from './components/Gourment';

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link
}
from 'react-router-dom';
import Footer from './components/Footer';
import Brands from './components/Brands';

function App() {
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gourment" element={<Gourment />} />
        <Route path="/Gourment" element={<Gourment />} />

      </Routes>
      <Brands />
      <Footer />
    </>
    </Router>
   

  );
}

export default App;
