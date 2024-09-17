// import icon1NavBar from '../../assets/images/iconamoon--profile-fill.png'
import { useState } from "react";
import { NAV_ITEMS } from '../../assets/other-assets/nav-items';
import { PATHS } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutCurrentUser } from '../../state/store/slices/users/users-slice';
import logout from '../../assets/svg/logout-icon.svg'

const SlideBar = () =>{
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleToggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  }
  
  const handleLogOut = () => dispatch(logOutCurrentUser())

    return(
        <>
        <div className="flex items-center">
          {
            currentUser !== null
              ? (
                <div className="flex gap-2 items-center">
                  {/* <div id="btn-perfil" className="border-none bg-cyan-600  rounded-full">
                    <img
                      className="size-7"
                      src={icon1NavBar}
                      alt="profile-icon"
                    />
                  </div> */}
                  <span>{currentUser?.first_name}</span>
                  <button onClick={handleLogOut}><img className="size-6" src={logout} alt="cerrar sesión" /></button>
                </div>
              ) : (
                <Link to={PATHS.login} className="hidden font-semibold text-cyan-800 sm:block min-w-[70px] rounded-md p-2 hover:font-bold">
                  Iniciar Sesión
                </Link>
              )
          }
        </div>
        <div
              id="overlay"
              className={`fixed top-0 left-0 bg-[#00000033] w-full h-full z-[5] cursor-pointer ${profileMenuVisible ? "block" : "hidden"}`}
              onClick={handleToggleProfileMenu}
            ></div>
            <div
              id="profile-menu"
              className={`fixed top-0 right-0 w-2/4 h-full bg-white p-4 z-10 ${profileMenuVisible ? "block" : "hidden"}`}
            >
              <ul className="list-none p-0 m-0 [&_li]:text-black [&_li]:block [&_li]:p-2 [&_li]:rounded-[4px] [&_li]:mb-4 ">

            {
                NAV_ITEMS.map((item, index) => ( 
                    <li key={index} className="hover:bg-gray-500"><a href={item.link}>{item.name}</a></li>
                ))

            }

              </ul>
            </div>
            </>
    );
}

export default SlideBar

