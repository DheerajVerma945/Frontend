
import { useState } from 'react'
import Card from "./Card"
import'./App.css'

function App() {

  return (
    <>
      <Card
        name="Samsung"
        src="#"
        price="$995"
        alt="No Internet Connection"
        details="Better than apple"
      />
      <Card
        name="Apple"
        src="#"
        price="$999"
        alt="Not available right now"
        details="Extra Smooth performance"
      />

      <Card
        name="OnePlus"
        src="#"
        price="$699"
        alt="Browsr not supported"
        details="Master Blaster"
      />
    </>
  )
}

export default App
