import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const luckyNumber = 7;
// const firstname = "Dheeraj";
// const lastName = "Verma";
// const currDate = new Date();
// const displayFood =()=>{
//   document.querySelector("ul").classList.remove("hide");
// }

// const customStyle = {
//   color:"green",
//   fontSize:"2rem",
//   border:"2px solid black",
//   backgroundColor:"aqua",
//   padding:"1rem",
//   borderRadius:"1rem"
// };
// customStyle.color = "blue";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <>
//     <h1 className='header' style={customStyle} contentEditable='false' spellCheck='true'> Name : {firstname} {lastName}</h1>
//     <button id='header2' onClick={displayFood}> My favourite food  & Lucky Number</button>
    // <ul className="hide">
    //   <li>Lucky number {Math.floor(Math.random()*10)}</li>
    //   <li>Bhindi</li>
    //   <li>Rajma</li>
    //   <li>Mushroom</li>
    // </ul>

//     <hr/>
//     <br/>
//     <p>Created by {firstname}</p>
//     <p>Copyright {currDate.getFullYear()}</p>
//     </>
//     </StrictMode>
  
// )


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <>

//       <h1 style={colorStyle}> {greeting} </h1>
//     </>
//     </StrictMode>

// )




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>

)