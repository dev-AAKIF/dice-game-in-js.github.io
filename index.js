// For Image 1
var num = Math.floor(Math.random()*6)+1;
var diceImage = "dice" + num + ".png";
var diceSourceImage = "assets/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceSourceImage);

// For Image 2
var num2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice" + num2 + ".png";
var diceSourceImage2 = "assets/" + diceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceSourceImage2);

if(num > num2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}
else if(num2 > num)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW !!!";
}