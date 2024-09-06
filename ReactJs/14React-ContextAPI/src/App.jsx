import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import ThemeToggler from './Components/ThemeToggler';
import UseRef from './UseRef';


function App() {
  const[themeMode,setThemeMode] = useState("light");
  const darkTheme = ()=>{
    setThemeMode("dark");
  }
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  useEffect ( ()=>{
    const dabba = document.querySelector('html');
    dabba.classList.remove("dark","light");
    dabba.classList.add(themeMode);
  },[themeMode])

  return (
    <div className='main h-full w-full bg-blue-500'>
    <ThemeProvider value={
      {themeMode,darkTheme,lightTheme}
    }>
    <>
      <Login />
      <ThemeToggler />
    </>
    
    </ThemeProvider>
    <UseRef />
    </div>
  )
}

export default App
