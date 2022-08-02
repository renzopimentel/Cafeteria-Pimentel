import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar';
import Kiosco from './pages/kiosco';
import Home from './pages/index';
import Cursos from './pages/cursos';
import Equipamientos from './pages/equipamiento';
import Producto from './components/ItemContainer/ItemContainer';
import Carrito from './pages/Carrito';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/cursos" element={<Cursos />}/>
          <Route exact path="/equipamientos" element={<Equipamientos />}/>
          <Route exact path="/kiosco" element={<Kiosco />}/>
          <Route exact path="/producto/:id" element={<Producto />}/>
          <Route exact path='/carrito' element={<Carrito />}/>
          <Route exact path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;

