import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';

function App() {
  
  return(
    <div className>
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna/>} />
          <Route path="/kontaktiraj" element={<Kontakt/>} />
        </Routes>
      </Router >
    </div>
    );
}

export default App;
