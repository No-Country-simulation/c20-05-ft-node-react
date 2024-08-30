import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Faq from '../components/FAQSection/Faq'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import ReduxTest from '../views/ReduxTest'
import ApiHandler from '../views/ApiHandler'
import CalendarComponent from '../components/Calendar/Calendar'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import PinValidationEmail from '../components/PinValidationEmail/PinValidationEmail'
import ProfileCreatedSuccessfully from '../components/ProfileCreatedSuccessfully/ProfileCreatedSuccessfully'
import UserInfo from '../views/Register/UserInfo'
import DogCaretakerProfile from '../views/DogCaretakerProfile/DogCaretakerProfile'

const routerPathComponents = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/profile",
        element: <DogCaretakerProfile />
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
        path: "/register/user-info",
        element: <UserInfo />
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
        path: "/navbar",
        element: <NavBar />
    },
    {
        path: "/pinValidationEmail",
        element: <PinValidationEmail />
    },
    {
        path: "/footer",
        element: <Footer />
    },
    {
        path: "/perfilcreadoconexito",
        element: <ProfileCreatedSuccessfully />
    },

    {
        path: "*",
        element: <NotFound />
    },
]

export default routerPathComponents;