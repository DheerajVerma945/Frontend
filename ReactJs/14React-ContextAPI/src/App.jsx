import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import ThemeToggler from './Components/ThemeToggler';


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
    <ThemeProvider value={
      {themeMode,darkTheme,lightTheme}
    }>
    <>
      <Login />
      <ThemeToggler />
    </>
    
    </ThemeProvider>
  )
}

export default App
