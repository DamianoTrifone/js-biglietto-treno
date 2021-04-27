// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Chiedere il numero di km
var km = prompt("Inserisci il numero di km del tuo viaggio");
console.log(km);

// Chiedere l'età del passeggero
var età = parseInt(prompt("Adesso inserisci la tua età"));
console.log(età);

// Calcolare il prezzo del biglietto
var prezzo = 0.021 * km;
console.log(prezzo);

// Sconto età
var prezzo_sconto

if(età < 18) {
  prezzo_sconto = (prezzo - 20 / 100);
  console.log(prezzo_sconto);
}

if(età > 65) {
    prezzo_sconto = (prezzo - 40 / 100);
    console.log(prezzo_sconto);
  }
// Arrotondamento prezzo

// Output prezzo finale