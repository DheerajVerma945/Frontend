const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const bgColorElement = document.querySelector("body");


const colors = ["white","blue","green","yellow","orange","indigo","red","pink"];

let intervalId;

const startDisco = () => {
    cond = true;
    intervalId = setInterval(() => {
        let idx = Math.floor(Math.random() * colors.length);
        
        bgColorElement.style.backgroundColor = colors[idx];
    }, 100); 
    

    start.disabled = true;
    stop.disabled = false;
}

const stopDisco = ()=>{
    clearInterval(intervalId);
    stop.disabled = true;
    start.disabled =false;
}

start.addEventListener("click",startDisco);
stop.addEventListener("click",stopDisco);