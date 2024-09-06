import React from "react";

let greeting ;
let colorStyle ={
  color:"",
}

const  date = new Date();
const time = date.getHours();

if(time >=0 && time <12){
  greeting = "Good morning";
  colorStyle.color = "red";
}
else if(time >=12 && time < 6){
  greeting = "Good afternoon";
  colorStyle.color = "green";
}
else{
  greeting="Good night";
  colorStyle.color = "blue";
}
function Heading(){
    return(
        <h1 style={colorStyle}>{greeting}</h1>
    )
  }

  export default Heading

  