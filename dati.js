const distanzaInKm = document.querySelector ('input#km-distanza');

const etaDelPasseggero = document.querySelector ('input#eta');

const button = document.querySelector ('btn');

button.addEventListener('click', function() {
    console.log(etaDelPasseggero.value);
    console.log(distanzaInKm.value);
})

