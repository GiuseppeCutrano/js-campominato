// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var bombe = []; //bombe
var numeriUtente = []; //numeri inseriti dall'Utente
var listaNumUtente = []; //lista dei numeri inseriti dall'Utente
var scores = 0; // punteggio





 while(bombe.length < 16){
   var numRandom = Math.floor( Math.random() * 100) + 1;
   if (bombe.includes(numRandom, bombe) == false) {
       bombe.push(numRandom); }


 }
 console.log(bombe)

var dead = false;
 while (dead == false && scores < 84) {
       console.log("Numero scelto: " + numeriUtente);
       numeriUtente = parseInt(prompt("Scegli un numero da 1 a 100."));
       if (numeriUtente > 0 && numeriUtente < 101 && !isNaN(numeriUtente)) {
         
         // valuto la possibilità che il numero inserito era stato già precedentemente introdotto
         if (listaNumUtente.includes(numeriUtente) == true) {
           alert("Errore! Numero già inserito.");
           // valuto la possibilità che l utente trovi la mina
         } else if (bombe.includes(numeriUtente) == true) {
           alert("Hai perso");
           dead = true;
           listaNumUtente.push(numeriUtente);
         } else {
           alert("Sei ancora vivo!");
           listaNumUtente.push(numeriUtente);
           scores++;
         }
       }else {
         alert('Il valore inserito è errato. Riprova.');
       }
     }
     console.log('Numeri scelti: ' + numeriUtente);
