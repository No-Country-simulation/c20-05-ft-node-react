import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import CalendarComponent from '../components/Calendar/Calendar'
import ProfileCreatedSuccessfully from '../components/ProfileCreatedSuccessfully/ProfileCreatedSuccessfully'
import UserInfo from '../views/Register/UserInfo'
import PetsFormContainer from '../views/Register/PetsFormContainer'
import Map from '../views/Home/Map/Map'
import CaretakerList from '../views/CaretakerList/CaretakerList'
import FilteForCaretaker from '../components/FilterForCaretaker/FilterForCaretaker'
import SelectDateBar from '../components/SelectDateBar/SelectDateBar'
import CaretakerFilterDropdown from '../components/FilterForCaretaker/CaretakerFilterDropdown'

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
        path:"/perfilcreadoconexito",
        element:<ProfileCreatedSuccessfully/>
    },
    {
        path:"/filterforcaretaker",
        element:<FilteForCaretaker/>
    },
    {
        path:"/fdd",
        element:<CaretakerFilterDropdown/>
    },
    {
        path:"/datebar",
        element:<SelectDateBar/>
    },
    {
        path: "*",
        element: <NotFound />
    },
]

export default routerPathComponents;