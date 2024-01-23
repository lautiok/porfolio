import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Login } from './components/Login/Login';
import { Certificado } from './components/Certificados/Certificado';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porfolio" element={<Portfolio />} />
        <Route path='/aboutme' element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/certificates" element={<Certificado />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;