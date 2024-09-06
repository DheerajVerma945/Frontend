let gameArr = [];
let arr = ["red","blue","green","yellow"];
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomColor = arr[randomNumber];
    gameArr.push(randomColor);

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + randomColor + ".mp3");
    audio.play();
}
nextSequence();


