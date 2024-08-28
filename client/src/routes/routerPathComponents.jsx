import React from 'react'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import NavBar from '../components/NavBar/navbar'
import Footer from '../components/Footer/Footer'
import PinValidationEmail from '../components/PinValidationEmail/PinValidationEmail'

const routerPathComponents = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/navbar",
        element: <NavBar />
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path:"/pinValidationEmail",
        element:<PinValidationEmail/>
    },
    {
        path:"/footer",
        element:<Footer/>
    }
]

export default routerPathComponents;