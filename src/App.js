import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar';
import Producto from './components/ItemContainer/ItemContainer';
import Home from './pages/index';
import Cursos from './pages/cursos';
import Kiosco from './pages/kiosco';
import Equipamiento from './pages/equipamiento';
import Carrito from './pages/Carrito';
import Category from './pages/Categories';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/:category/' element={<Category />}/>              
          <Route exact path='/:category/:id' element={<Producto />}/>
          <Route exact path='/equip' element={<Equipamiento />} />
          <Route exact path='/cursos' element={<Cursos />} />
          <Route exact path='/kiosco' element={<Kiosco />} />
          <Route exact path='/cart' element={<Carrito />}/>
      </Routes>
    </Router>
  );
}

export default App;

