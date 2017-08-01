var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

var wins;
var losses;
var guessedLetters=[];

function chooseLetter(letters){
  return letters[Math.floor(Math.random() * letters.length)];
}

function updateTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;
  number--;
  guessesLeft.innerHTML = number;
}

function checkTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;

  if(number < 1){

  }
}



document.onkeyup = function(event) {

  updateTimer();

  var answer = chooseLetter(letters);
  var guess = String.fromCharCode(event.keyCode).toLowerCase();

  for (var i = 0; i < guessedLetters.length; i++){
    if (guess != guessedLetters[i]){
      guessedLetters.push(" " + guess);
      document.getElementById('guessedLetters').innerHTML = guessedLetters;
    }
  }

  checkTimer();
};
