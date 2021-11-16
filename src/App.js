// import '../public/assets/css'
import Contact from './components/Contact';
import Header from './components/Header';
// import Home from './components/Home';
import Logo from './components/logo';
import NavBar from './components/NavBar';
import Gourment from './components/Gourment';
import Slider from './components/Slider';
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
      <Header />
      <Logo />
      <NavBar />

      <Slider />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gourment" element={<Gourment />} />
        <Route path="/Gourment" element={<Gourment />} />

      </Routes>
    </>
    </Router>

  );
}

export default App;
