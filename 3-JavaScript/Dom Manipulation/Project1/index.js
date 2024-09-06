var random1 = Math.random() * 6;
random1 = Math.ceil(random1);

var ranImage = "./images/dice" + random1 + ".png" ;

var random2 = Math.random() * 6;
random2 = Math.ceil(random2);

var ranImage2 = "./images/dice" + random2 + ".png" ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ranImage);


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",ranImage2);

if(random1 == random2){
    document.querySelector("h1").innerHTML = "Draw !";
}
else if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else{
    document.querySelector("h1").innerHTML = "  Player 2 wins !";
}