import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';

function App() {
  
  return(
    <div className>
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna/ >} />
        </Routes>
      </Router >
    </div>
    );
}

export default App;
