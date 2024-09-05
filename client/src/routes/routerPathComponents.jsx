import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import CalendarComponent from '../components/Calendar/Calendar'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import PinValidationEmail from '../components/PinValidationEmail/PinValidationEmail'
import ProfileCreatedSuccessfully from '../components/ProfileCreatedSuccessfully/ProfileCreatedSuccessfully'
import UserInfo from '../views/Register/UserInfo'
import PetsFormContainer from '../views/Register/PetsFormContainer'
import Map from '../views/Home/Map/Map'
import CaretakerList from '../views/CaretakerList/CaretakerList'
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
        path: "/register",
        element: <Register />
    },
    {
        path: "/register/user-info",
        element: <UserInfo />
    },
    {
        path: "/register/pets-form",
        element: <PetsFormContainer />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/map",
        element: <Map />
    },
    {
        path: "/search-caretakers",
        element: <CaretakerList />
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