
import icon2NavBar from '../../assets/images/mingcute--notification-fill.png'
import logo from '../../assets/images/logo-solo-nocountry.png'
import SlideBar from "./SlideBar";

const NavBar = () => {
  

    return (
        <nav className="max-w-full min-h-[65px] bg-orange-500 flex justify-between items-center px-2 box-border  sm:min-h-[80px] sm:px-4 shadow-lg ">
        <div className="flex items-center gap-2 justify-self-center">
          <a href="">
          <img
            src={logo}
            alt="Logo"
            className="size-14 sm:size-20"
          />
          </a>
          <span className="hidden w-px bg-black h-[40px] sm:h-[50px] sm:block"></span>
        </div>
        <div className=" flex gap-2 lg:gap-6">
          <button
            id="cuidadorBtn"
            className="relative text-white font-semi-bold  border-none p-2 sm:p-3 rounded-md bg-transparent hover:font-semibold focus:outline-none focus:font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 focus:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Cuidador
          </button>
          <button
            id="dueñoBtn"
            className="relative text-white font-semi-bold border-none p-2 sm:p-3 rounded-md bg-transparent hover:font-semibold focus:outline-none focus:font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 focus:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Dueño
          </button>
        </div>
        <div className=" flex gap-4">

          <button className="hidden text-white sm:block min-w-[70px] rounded-md p-2 hover:font-semibold ">
            Ayuda
          </button>
          <span className="hidden w-px bg-black h-[40px] sm:h-[50px] sm:block"></span>
          <button className="border-none bg-transparent">
            <img
              className="size-7"
              src={icon2NavBar}
              alt="notifications-icon"
            />
          </button>
          
            
            <SlideBar />
            
    
        </div>
      </nav>
    );
};

export default NavBar;
