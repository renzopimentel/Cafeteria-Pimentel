import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Producto from './components/ItemContainer/ItemContainer';
import Carrito from './pages/Carrito';
import Category from './pages/Categories';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path='/:category/' element={<Category />}/>              
          <Route exact path="/:category/:id" element={<Producto />}/>
          <Route exact path='/carrito' element={<Carrito />}/>
      </Routes>
    </Router>
  );
}

export default App;

