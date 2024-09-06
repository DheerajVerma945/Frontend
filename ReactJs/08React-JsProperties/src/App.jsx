
import React ,{ useState }  from 'react'
import Login from './Login'
import Register from './Register';

let userRegistered = true;




function App() {

  return (
    <>
      {
         userRegistered ? <Login /> : <Register />
      }
    </>
  )
}
// class App extends React.Component{
//   render(){
//      return (
//         <h1>Hello World</h1>
//      )
//   }
// }

export default App
