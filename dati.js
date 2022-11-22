const distanzaInKm = document.querySelector ('#km-distanza');

const etaDelPasseggero = document.querySelector ('#eta');

const button = document.querySelector ('.btn');

let prezzo = distanzaInKm * 0.2762;

let output;

button.addEventListener('click', function() {
    console.log(etaDelPasseggero.value);
    console.log(distanzaInKm.value);
    
    if ((etaDelPasseggero > 18) && (etaDelPasseggero < 65)){
        console.log(prezzo);
    } else if (etaDelPasseggero < 18)
        console.log()
})

