import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';
import NavBar from './komponente/NavBar';

function App() {

  const dobitnici = [
    { ime: 'Luka Veljovic', email: 'lukaraska@gmail.com'},
    { ime: 'Petar Petrovic', email: 'petarp@gmail.com'},
    { ime: 'Tadija Tadic', email: 'tadijat@gmail.com'},
  ];
  
  return(
    <div className>
      <Router>
        <NavBar  dobitnici={dobitnici}/>
        <Routes>
          <Route path="/" element={<Pocetna/>} />
          <Route path="/kontaktiraj" element={<Kontakt/>} />
        </Routes>
      </Router >
    </div>
    );
}

export default App;
