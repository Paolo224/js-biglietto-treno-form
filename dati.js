const nome = document.querySelector ('#nome');

const cognome = document.querySelector ('#cognome');

const citta = document.querySelector ('#citta');

const distanzaInKm = document.querySelector ('#km-distanza');

const etaDelPasseggero = document.querySelector ('#eta');

const button = document.querySelector ('.btn');

let prezzoFinale;

button.addEventListener('click', function() {
    let prezzo = distanzaInKm.value * 0.2762;
    let prezzoAnziani = prezzo * 33.3 /100;
    let prezzoMinorenni = prezzo * 12.5 / 100;
    console.log(etaDelPasseggero.value);
    console.log(distanzaInKm.value);
    
    if ((etaDelPasseggero.value > 18) && (etaDelPasseggero.value < 65)){
        prezzoFinale = prezzo;
        document.getElementById('sconto').innerHTML = '0€';
    } else if (etaDelPasseggero.value < 18){
        prezzoFinale = (prezzo - prezzoMinorenni);
        document.getElementById('sconto').innerHTML = '17,5%';
    } else {
        prezzoFinale = (prezzo - prezzoAnziani);
        document.getElementById('sconto').innerHTML = '33,3%';
    }

    const iva = prezzoFinale * 22 / 100;

    document.getElementById('iva').innerHTML = iva.toFixed(2) + '€';
    document.getElementById('output').innerHTML = prezzoFinale.toFixed(2) + "€";

    let totaleDaPagare = ( prezzoFinale + iva);
    
    document.getElementById('totale').innerHTML = totaleDaPagare.toFixed(2) + '€';
})

