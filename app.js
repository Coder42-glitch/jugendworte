console.log("Hallo");

// Konstanten
const wordEL = document.querySelector(".word");
const oldWords = document.querySelector(".old-words");

// Variablen
let words = [];
let currentWord = "";
let previousWords = [];

// einlesen der Woerter aus der Datei words.txt
fetch("./words.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
    console.log(words);
  });

// Wort setzen
function buttonPressed() {
  if(currentWord){
    previousWords.push(currentWord);
    console.log(previousWords);
    oldWords.innerHTML=previousWords.join(", ");
  }

  currentWord = getRandomWord();
  console.log(currentWord);
  wordEL.innerHTML = currentWord;
}

// erzeuge ein Zufallszahl
function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

// ermittle ein Wort
function getRandomWord() {
  return words[getRandomNumber(words.length)];
}
