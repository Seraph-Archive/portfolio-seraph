import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home, Projects} from './pages'
import Navbar from './components/navbar/navbar';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
        </>
      </div>
      
    </Router>
  );
}

export default App;
