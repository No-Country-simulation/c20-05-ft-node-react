import React from 'react';
import logoFacebook from '../../assets/svg/logos--facebook.svg'
import logoGmail from '../../assets/svg/logos--google-gmail.svg'
import logoWhatsapp from '../../assets/svg/logos--whatsapp-icon.svg'
import logoInstagram from '../../assets/svg/skill-icons--instagram.svg'


const Footer = () => {
    return (
        
        <footer className="w-full h-[65vh] flex flex-col items-center justify-evenly bg-gray-200 sm:flex-row sm:h-[50vh]">
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold mb-2 text-center sm:text-left">Navegación</p>
        <ul className="list-none p-0  flex flex-col text-center sm:text-left">
          <li className="my-2">
            <a href="#" className=" hover:underline">
              Inicio
            </a>
          </li>
          <li className="my-2">
            <a href="#" className=" hover:underline">
              Quiero ser cuidador
            </a>
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
        <li className="my-2 flex gap-2 justify-center sm:justify-start">
            <img className='size-6 hidden' src={logoGmail} alt="logoGmail" />
            <p>nombreDeApp@gmail.com</p>
        </li>
        <li className="my-2 flex gap-2 justify-center sm:justify-start">
            <img className='hidden' src={logoWhatsapp} alt="logoWpp" />
            <p>+54 9 11 23456789</p>
        </li>
    </ul>
</div>

      <div className="flex flex-col items-center mt-2 gap-2 sm:flex-row">

        <div className="flex gap-4 sm:flex-col">
          
          <button className="bg-transparent border-none">
            <img
              src={logoFacebook}
              className="w-8 h-8"
            />
          </button>
          <button className="bg-transparent border-none">
            <img
              src={logoInstagram}
              className="w-8 h-8"
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