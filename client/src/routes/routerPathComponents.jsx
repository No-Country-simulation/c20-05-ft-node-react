import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import CalendarComponent from '../components/Calendar/Calendar'
import UserInfo from '../views/Register/UserInfo'
import PetsFormContainer from '../views/Register/PetsFormContainer'
import CaretakerList from '../views/CaretakerList/CaretakerList'
import DogCaretakerProfile from '../views/DogCaretakerProfile/DogCaretakerProfile'
import HireCareTaker from '../views/HireCareTaker/HireCareTaker.jsx'

const routerPathComponents = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/profile/:id",
    element: <DogCaretakerProfile />
  },
  {
    path: "/profile/:id/hire",
    element: <HireCareTaker />
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
    path: "/search-caretakers",
    element: <CaretakerList />
  },
  {
    path: "*",
    element: <NotFound />
  },
]

export default routerPathComponents;