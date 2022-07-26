import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Announcement from './components/Announcement/Announcement';
import Register from './pages/Register';
import Cart from './components/pages/Carrito';
import Kiosco from './components/pages/kiosco';

function App() {
  return (
    <Router>
      <Kiosco />
    </Router>
  );
}

export default App;

