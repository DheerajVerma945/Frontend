import { useState } from 'react'
import Header from './Components/Header.jsx'
import './App.css'
import emojipedia from './emojipedia.js'
import Card from './Components/Card.jsx'



function App() {
  return (
    <>
      <Header />
      <dl className='dictionary'>
        {emojipedia.map(
          emojii =>
          (
            <Card
              key={emojii.id}
              symbol={emojii.emoji}
              name={emojii.name}
              desc={emojii.meaning}
            />
          )
        )}
      </dl>
    </>
  )
}

export default App
