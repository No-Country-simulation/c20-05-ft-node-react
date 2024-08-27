import React from 'react'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Faq from '../components/FAQSection/Faq'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import ReduxTest from '../views/ReduxTest'
import CalendarComponent from '../components/Calendar/Calendar'
const routerPathComponents = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/calendar",
        element: <CalendarComponent />
    },
    {
        path: "/faq",
        element: <Faq />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/redux",
        element: <ReduxTest />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routerPathComponents