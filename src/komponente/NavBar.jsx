import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({dobitnici}) {
    const [email, setEmail] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function proveri(e) {
        var element = dobitnici.filter(function (d) {
            return d.email == email;
        })
        if (element.length !== 0) {
            alert('Čestitamo osvojili ste karte!');
        }
        else {
            alert('Više sreće drugi put! Nastavite da nas pratite!')
        }
    }

    return (
        <div>
           <nav className="navbar navbar-expand-xl navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <b>Pocetna</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                            aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/kontaktiraj"> <b>Kontakt</b> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                            aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="element">
                        <label id="tekst-pretrage">Unesite Vaš email kako biste proverili da li ste osvojili karte za utakmicu: </label>
                        <input type="text" className="form-control" value={email} onChange={handleEmail}></input>
                        <button type="button" onClick={proveri} className="btn btn-success btn-sm" value={email}>Proveri</button>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default NavBar
