import React from 'react'
import { Route } from 'react-router-dom'

const renderRoutes = (routesArray) => {
    return routesArray.map((routeObject, index) => {
        return (
            <Route
                key={index}
                path={routeObject.path}
                element={routeObject.element
                }>
            </Route>
        )
    }
    )
}

export default renderRoutes