
function handleclick(){
    var key = this.innerHTML;
    makeSound(key);
    animate(key);
}

var arr = document.querySelectorAll(".drum");
var i =0;
for(i;i<arr.length;i++){
    arr[i].addEventListener("click",handleclick);
} 

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animate(event.key);
});


function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;

        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        case 'j':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert(key + " is not available.  Try again!")
            break;
    }
}
function animate(key){
    var curr = document.querySelector("." + key);
    curr.classList.add("pressed");
    setTimeout(function(){
     curr.classList.remove("pressed");
    },100);
}

