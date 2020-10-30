var bombe = []; //bombe
var numeriUtente = []; //numeri inseriti dall'Utente
var listaNumUtente = []; //lista dei numeri inseriti dall'Utente
var scores = 0; // punteggi

while(bombe.length < 16){
  var numRandom = Math.floor( Math.random() * 100) + 1;
  if (bombe.includes(numRandom, bombe) == false) {
      bombe.push(numRandom); }


}
console.log(bombe)
var boxMines = document.getElementsByClassName("box_mines")

for(var i = 0; i < boxMines.length; i++){
  boxMines[i].value = i;
  boxMines[i].addEventListener("click", function(event){
    var minesValue = parseInt(event.target.value)
     if (bombe.includes(minesValue, bombe)){
       event.target.style.backgroundImage = "url('img/bomb.png')";
     }else{
       event.target.style.backgroundImage = "url('img/soldier.png')";
     }


     if(bombe.includes(minesValue, bombe)){
       console.log("scores:"+scores);
       alert("Morto, il tuo punteggio è di: "+ scores);
       document.getElementById('punteggio').textContent = scores;

       }else {
         scores++;
        document.getElementById('punteggio').textContent = scores;
     }

  })

}
