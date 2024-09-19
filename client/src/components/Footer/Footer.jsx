import React from 'react';
import logoFacebook from '../../assets/svg/facebook-svgrepo-com.svg'
import logoGmail from '../../assets/svg/mail-svgrepo-com.svg'
import logoWhatsapp from '../../assets/svg/whatsapp-svgrepo-com.svg'
import logoInstagram from '../../assets/svg/instagram-svgrepo-com.svg'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="w-full h-[65vh] text-sm flex flex-col items-center justify-evenly bg-cyan-950 sm:flex-row sm:h-[50vh] text-slate-300">
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold mb-2 text-center sm:text-left">Navegación</p>
        <ul className="list-none p-0  flex flex-col text-center sm:text-left">
          <li className="my-2">
            <a href="#" className=" hover:underline">
              Inicio
            </a>
          </li>
          <li className="my-2">
            <Link to="/register" className=" hover:underline">
              Quiero ser cuidador
            </Link>
          </li>

        </ul>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-lg font-bold mb-2 text-center sm:text-left">Terminos legales</p>
        <ul className="list-none p-0 flex flex-col text-center sm:text-left">
          <li className="my-2">
            <a href="#" className=" hover:underline">
              Terminos y condiciones
            </a>
          </li>
          <li className="my-2">
            <a href="#" className=" hover:underline">
              Politicas y privacidad
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col text-center sm:text-left">
        <p className="text-lg font-bold mb-2">Informacion de contacto</p>
        <ul className="list-none p-0 flex flex-col">
          <li className="my-2 flex gap-2 justify-center items-center sm:justify-start">
            <img className='size-7 invert  ' src={logoGmail} alt="logoGmail" />
            <p>nombreDeApp@gmail.com</p>
          </li>
          <li className="my-2 flex items-center gap-2 justify-center sm:justify-start">
            <img className='size-7 invert' src={logoWhatsapp} alt="logoWpp" />
            <p>+54 9 11 23456789</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-2 gap-2 sm:flex-row">

        <div className="flex gap-4 sm:flex-col">

          <button className="bg-transparent border-none">
            <img
              src={logoFacebook}
              className="w-8 h-8 invert"
            />
          </button>
          <button className="bg-transparent border-none">
            <img
              src={logoInstagram}
              className="w-8 h-8 invert"
            />
          </button>


        </div>

        <div className="hidden sm:flex sm:flex-col gap-6 [&_p]:text-base">
          <p>nombreDeApp</p>
          <p>@nombreDeApp</p>
        </div>
      </div>
    </footer>

  );
};
export default Footer;