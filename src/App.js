import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <Router>
        <Navbar/>
        <ItemListContainer />
      </Router>
  );
}

export default App;

