import React from 'react'
import {Outlet} from "react-router-dom"
import { Footer, Header } from './index'
import { ThemeProvider } from '../context/ThemeContext';


function AppLayout() {
    return (
        <ThemeProvider>
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default AppLayout
