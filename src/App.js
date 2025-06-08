
import './App.css';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 
 

 
 
 
 
 
 <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
         <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
     
     
      </Routes>
    </div>
  );
}

export default App;

