var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomPosition1 = Math.floor(Math.random () * diceImages.length);
var randomPosition2 = Math.floor(Math.random () * diceImages.length);

document.querySelector(".dice .img1").setAttribute("src", diceImages[randomPosition1]);
document.querySelector(".dice .img2").setAttribute("src", diceImages[randomPosition2]);

if (randomPosition1 > randomPosition2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
if (randomPosition2 > randomPosition1) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
if (randomPosition1 === randomPosition2) {
  document.querySelector("h1").textContent = "Draw!";
}
