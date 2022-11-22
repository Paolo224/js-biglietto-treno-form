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
    } else if (etaDelPasseggero.value < 18){
        prezzoFinale = (prezzo - prezzoMinorenni);
    } else {
        prezzoFinale = (prezzo - prezzoAnziani);
    }

    document.getElementById('output').innerHTML = prezzoFinale.toFixed(2);
})

