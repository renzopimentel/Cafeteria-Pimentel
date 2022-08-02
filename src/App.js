import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar';
import Kiosco from './pages/kiosco';

function App() {
  return (
    <BrowserRouter>
      <Announcement />
      <Navbar />
      <Kiosco />
    </BrowserRouter>
  );
}

export default App;

