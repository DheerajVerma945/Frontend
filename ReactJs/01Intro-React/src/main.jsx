import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherElement = "Thanks";
const reactElement = React.createElement('a',{
    href:"https://www.google.com",target:"_blank"
},"Click to visit Google", anotherElement)
createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
