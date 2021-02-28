var randomnumber1=Math.random();
randomnumber1=1+Math.floor(randomnumber1*6);
var randomnumber2=Math.random();
randomnumber2=1+Math.floor(randomnumber2*6);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomnumber2 + ".png");

if(randomnumber1>randomnumber2)
document.querySelector("h1").textContent="Player 1 Wins!";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").textContent="Player 2 Wins!";
else
document.querySelector("h1").textContent="Its a Draw!";
