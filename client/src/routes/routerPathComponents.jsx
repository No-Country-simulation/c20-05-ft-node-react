import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Faq from '../components/FAQSection/Faq'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import ReduxTest from '../views/ReduxTest'
import ApiHandler from '../views/ApiHandler'
import CalendarComponent from '../components/Calendar/Calendar'
import Map from '../views/Home/Map/Map'

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
        path: "/apiHandler",
        element: <ApiHandler />
    },
    {
        path: "/map",
        element: <Map />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routerPathComponents