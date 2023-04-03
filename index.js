var randomNumber1  = Math.floor(Math.random() * 6) + 1;

var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomImageSource  = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

var randomnNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomnNumber2)
{
  document.querySelectorAll("h1").innerHTML = "Player 1 Wins!";
}
else if
{
  document.querySelectorAll("h1").innerHTML = "Player 2 Wins!";
}
else
{
  document.querySelectorAll("h1").innerHTML = "Draw!";
}
