import React from 'react'
import { useState } from 'react';

function KontaktForma(props) {
    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [upit, setUpit] = useState('');

    function handleIme(e) {
        setIme(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleUpit(e) {
        setUpit(e.target.value);
    }

    return (
        <div>
            <form className="form">
                <h3> {props.tekst}</h3>
                <div className="element">
                    <label>Unesite ime: </label>
                    <input type="text" className="form-control" value={ime} onChange={handleIme}></input>
                </div>
                <div className="element">
                    <label>Unesite email: </label>
                    <input type="email" className="form-control" value={email} onChange={handleEmail}></input>
                </div>
                <div className="element">
                    <label>Unesite upit: </label>
                    <input type="text" className="form-control" value={upit} onChange={handleUpit}></input>
                </div>
                <button className="btn btn-success btn-sm" type="submit" onClick={() => props.kontaktiraj(ime,email)} value={email} onChange={handleEmail}>Posalji</button>
            </form>
        </div>
    );
}

export default KontaktForma
