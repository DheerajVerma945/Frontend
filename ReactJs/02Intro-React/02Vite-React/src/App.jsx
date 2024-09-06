import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Heading from './Heading.jsx'
// import pi,{DoublePi,triplePi} from './Pi.jsx'
// import * as pi from './Pi.jsx'
// import ListItems from './Listitems.jsx'
import add,{multiply,subtract,divide} from './calculator'


//

  
//   // let varii = 0;
//   let [counter,setCounter] = useState(0);
  
//   const increment = ()=>{
//     if(counter <=19){
//       setCounter(++counter);
//       setCounter(++counter);
//       setCounter(++counter);
//       setCounter(++counter);
//       setCounter(++counter);
//       setCounter(++counter);

//     }
//   }
//   const decrement = ()=>{
//     if(counter >=1){
//       setCounter(--counter);
//     }
//   }
  // function increment(){
  //   varii++;
  //   console.log(varii);
  // }
  /* <h1>Hello World</h1>
        <h2>Counter :{counter}</h2>

      <button onClick={increment}> Increase the count </button>
      <br/>
      <button onClick={decrement} >Decrease the count </button> */  
function App() {
  return (
    <>
      <ul>
        <li>{add(1,2)}</li>
        <li>{multiply(2,3)}</li>
        <li>{subtract(7,2)}</li>
        <li>{divide(5,2)}</li>
      </ul>
    </>
  )
}

export default App
