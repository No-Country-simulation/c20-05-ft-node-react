import React from 'react'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Faq from '../components/FAQSection/Faq'
const routerPathComponents = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/faq",
        element: <Faq />
    },
    {
        path: "/register",
        element: <Home />
    },
    {
        path: "/login",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routerPathComponents