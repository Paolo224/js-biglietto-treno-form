const distanzaInKm = document.querySelector ('#km-distanza');

const etaDelPasseggero = document.querySelector ('#eta');

const button = document.querySelector ('.btn');

let prezzoMinorenni;

let prezzoAnziani;

let prezzo;

let prezzoFinale;

button.addEventListener('click', function() {
    prezzo = distanzaInKm.value * 0.2762;
    prezzoAnziani = prezzo * 33.3 /100;
    prezzoMinorenni = prezzo * 12.5 / 100;
    console.log(etaDelPasseggero.value);
    console.log(distanzaInKm.value);
    
    if ((etaDelPasseggero.value > 18) && (etaDelPasseggero.value < 65)){
        prezzoFinale = prezzo;
    } else if (etaDelPasseggero.value < 18){
        prezzoFinale = (prezzo - prezzoMinorenni);
    } else {
        prezzoFinale = (prezzo - prezzoAnziani);
    }

    document.getElementById('output').innerHTML = prezzoFinale;
})

