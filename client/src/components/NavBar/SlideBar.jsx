import icon1NavBar from '../../assets/images/iconamoon--profile-fill.png'
import React, { useState } from "react";
import { NAV_ITEMS } from '../../assets/other-assets/nav-items';


const SlideBar = () =>{

    const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const handleToggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
   }

    return(
        <>
        <div className="flex items-center">
            <button id="btn-perfil" className="border-none bg-transparent" onClick={handleToggleProfileMenu}>
              <img
                src={icon1NavBar}
                alt="profile-icon"
              />
            </button>
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

