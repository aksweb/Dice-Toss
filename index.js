var randomNumber1= Math.random();
var randomNumber1= Math.floor(randomNumber1*6 +1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource= "images/"+randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2=Math.floor(Math.random()*6 +1);
var image2=document.querySelectorAll("img")[1];
var randomDiceImage2= "dice"+ randomNumber2+".png";
var randomImageSource2= "images/"+randomDiceImage2;

image2.setAttribute("src",randomImageSource2 )
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wons";
}
else if (randomNumber2==randomNumber1) {
    document.querySelector("h1").innerHTML="DRAW";
}
