import React from 'react'
import { useState, useEffect } from 'react'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'

const Header = () => {
    const [darkMode, setDarkMode] = useState('')
    
    useEffect(() => {
        const darkmode = window.localStorage.getItem("darkMode")
        setDarkMode(JSON.parse(darkmode))
    }, [])
    
    useEffect(() => {
        if (darkMode === true) {
            document.getElementById("root").classList.add("dark")
            
        } else {
            document.getElementById("root").classList.remove("dark")
        }
    }, [darkMode])
    
    
    
    
    
    
    
    
    const toggleDarkMode = () =>{

        setDarkMode((prev) => !prev);
        Window.localStorage.setItem("darkmode", !darkMode)
    }
    return (
    <header className='flex justify-between pt-8py-4'>
    <h1 className='text-4xl font-bold tracking-widest text-white'>Todo</h1>
    <button className='border-8' onClick={toggleDarkMode}>
    {!darkMode && <img src={moon} alt='moon'/>}
    {darkMode && <img src={sun} alt='sun'/>}
    </button>
    </header>
  )
}

export default Header