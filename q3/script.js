//Create an application that generates an array of 5 random numbers 1-10.
//The user should then guess a number
//the app will tell them how many time that number exists within the array.
let randNumber = [];
let howManyNumbers = 5;
let userNumber;
let count;

function generateNumber() {
  for (i = 0; i < howManyNumbers; i++) {
    randNumber[i] = Math.floor(Math.random() * 10 + 1);
  }
}
function isItAMatch() {
  for (i = 0; i < howManyNumbers; i++) {
    if (randNumber[i] == userNumber) {
      count = count + 1;
    } else {
      //no action needed
    }
  }
}
function showResult() {
  if (count == 1) {
    document.getElementById("resultArea").innerHTML =
      "The number &quot;" + userNumber + "&quot; came up " + count + "x time!";
  } else if (count > 1) {
    document.getElementById("resultArea").innerHTML =
      "The number &quot;" + userNumber + "&quot; came up " + count + "x times!";
  } else {
    document.getElementById("resultArea").innerHTML =
      "Oh no!! You didn't get a single match for the number &quot;" +
      userNumber +
      "&quot; ";
  }
  document.getElementById("resultArea").innerHTML +=
    "<br> <br>Here are all the numbers the app chose: " + randNumber.toString();
}
function guessNumber() {
  count = 0;
  userNumber = parseInt(prompt("Guess a number between 1 and 10"));
  if (userNumber <= 10 && userNumber >= 1) {
    generateNumber();
    isItAMatch();
    showResult();
  } else {
    alert("You have to enter a number between 1 and 10");
  }
}
