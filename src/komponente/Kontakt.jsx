import React from 'react'

function Kontakt()
 {
    function kontaktiraj(ime, email) {
        alert(ime+', Vaš upit je uspešno poslat. Odgovor će Vam biti prosleđen na '+ email)
    }

    return (
        <div>
            <KontaktForma tekst='Pošalji upit' kontaktiraj={kontaktiraj} />
        </div>
    );
}

export default Kontakt
