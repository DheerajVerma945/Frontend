import React from 'react'
import useTheme from '../Context/ThemeContext'

function ThemeToggler() {
    const {themeMode,lightTheme,darkTheme} = useTheme();
    const handleChange= ()=>{
        if(themeMode === 'dark'){
            lightTheme();
        }
        else{
            darkTheme();
        }
    }
  return (
    <div>
      <button onClick={handleChange}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggler
