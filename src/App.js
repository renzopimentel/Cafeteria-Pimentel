import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Item from './components/Item/Item';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Kiosco from './pages/kiosco';
import Equipamiento from './pages/equipamiento';
import Cursos from './pages/cursos';

function App() {
  return (
    <BrowserRouter>
      
      <Announcement />
      <Navbar />
      <Item />
    </BrowserRouter>
  );
}

export default App;

