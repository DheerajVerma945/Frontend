
import React, { useState } from 'react'
import Memo from './Memo'
import Interview from './Interview'
import UseMemo from './UseMemo'
// import cars from './practice'
// import Reducer from './Reducer'




/*
const [honda,tesla] = cars;
const {speedStats :{topSpeed:hondaTopSpeed}} = honda;
const {speedStats:{topSpeed:teslaTopSpeed}} = tesla;
const{colorsByPopularity:[hondaTopColor]} =  honda;
const{colorsByPopularity:[teslaTopColor]} =  tesla;
*/

/*
<table border={7}>
  <tr>
    <td>Brand</td>
    <td>Top Speed</td>
    <td>Color</td>
  </tr>

  <tr>
    <td>{tesla.model}</td>
    <td>{teslaTopSpeed}</td>
    <td>{teslaTopColor}</td>
  </tr>

  <tr>
    <td>{honda.model}</td>
    <td>{hondaTopSpeed}</td>
    <td>{hondaTopColor}</td>
  </tr>
</table>
*/

// <Reducer />

function App() {
  

  return (
   <>
      <Memo />


   </>
  )
}

export default App





























// let initialTime  = new Date().toLocaleTimeString();
//   const [currTime,setTime] = useState(initialTime);

//   setInterval(getTime,1000);

//   function  getTime(){
//     const updatedTime = new Date( ).toLocaleTimeString();
//     setTime(updatedTime);
//   }