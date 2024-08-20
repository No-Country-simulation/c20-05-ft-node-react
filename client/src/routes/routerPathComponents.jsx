import React from 'react'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
const routerPathComponents = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routerPathComponents