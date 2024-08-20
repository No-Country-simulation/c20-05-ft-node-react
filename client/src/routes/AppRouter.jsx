import React from 'react'
import { Routes } from 'react-router-dom'
import renderRoutes from '../utils/functions/renderRoutes'
import routerPathComponents from './routerPathComponents'

const AppRouter = () => {
    return (
        <Routes>
            {
                renderRoutes(
                    routerPathComponents
                )
            }
        </Routes>
    )
}

export default AppRouter