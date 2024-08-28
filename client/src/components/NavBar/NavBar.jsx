
import icon2NavBar from '../../assets/images/mingcute--notification-fill.png'
import logo from '../../assets/images/IMAGOTIPO SERVIHOGAR.png'
import SlideBar from "./SlideBar";

const NavBar = () => {
  

    return (
        <nav className="max-w-full min-h-[65px] bg-orange-500 flex justify-between items-center px-2 box-border sm:min-h-[80px] sm:px-4">
        <div className="flex items-center gap-2 justify-self-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[40px] h-[45px] sm:w-[50px] sm:h-[65px]"
          />
          <span className="hidden w-px bg-gray-600 h-[40px] sm:h-[50px] sm:block"></span>
        </div>
        <div className=" flex gap-2 lg:gap-6">
          <button
            id="cuidadorBtn"
            className="border-none p-2 sm:p-3 rounded-md bg-gray-50 focus:bg-orange-300 focus:font-semibold focus:outline-none focus:ring-2 focus:ring-black hover:font-semibold"
          >
            Cuidador
          </button>
          <button
            id="dueñoBtn"
            className="border-none p-2 min-w-7 sm:p-3 rounded-md bg-gray-50 focus:bg-orange-300 focus:font-semibold focus:outline-none focus:ring-2 focus:ring-black hover:font-semibold"
          >
            Dueño
          </button>
        </div>
        <div className=" flex gap-2">
          <button className="hidden sm:block min-w-[70px] rounded-md bg-gray-50 p-2 border-2 border-orangered text-orangered hover:font-semibold ">
            Ayuda
          </button>
          <span className="hidden w-px bg-gray-600 h-[40px] sm:h-[50px] sm:block"></span>
          <button className="border-none bg-transparent">
            <img
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
