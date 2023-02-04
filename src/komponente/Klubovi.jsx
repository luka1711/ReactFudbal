import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Klub from './Klub';

function Klubovi() {

  const [klubovi, setKlubovi] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/klub').then(res => {
            console.log('Rez: ' + JSON.stringify(res))
            setKlubovi(res.data.data)
        });
    }, []);


    const sviKlubovi = klubovi.map(klub=> (
        <Klub klub={klub} key={klub.id} />
    ))

    return (
        <div className="row row-cols-1 row-cols-sm-3 g-4">
            {sviKlubovi}
        </div>
    );
}

export default Klubovi
