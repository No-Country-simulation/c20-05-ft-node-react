import React from 'react';
import logoFacebook from '../../assets/svg/logos--facebook.svg'
import logoGmail from '../../assets/svg/logos--google-gmail.svg'
import logoWhatsapp from '../../assets/svg/logos--whatsapp-icon.svg'
import logoInstagram from '../../assets/svg/skill-icons--instagram.svg'


const Footer = () => {
    return (
        <footer className="w-full h-[70vh] flex flex-col items-center justify-evenly bg-gray-200 sm:flex-row sm:h-[50vh]">
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold">Lorem, ipsum.</p>
        <ul className="list-none p-0">
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-lg font-bold">Lorem, ipsum.</p>
        <ul className="list-none p-0">
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-lg font-bold">Lorem, ipsum.</p>
        <ul className="list-none p-0">
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-blue-600 hover:underline">
              Lorem, ipsum.
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-2 gap-2 sm:flex-row">

        <div className="flex gap-4 sm:flex-col">
          <button className="bg-transparent border-none">
            <img
              src={logoWhatsapp}
              className="w-8 h-8"
            />
          </button>
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
          <button className="bg-transparent border-none">
            <img
              src={logoGmail}
              className="w-8 h-8"
            />
          </button>
          
        </div>

        <div className="hidden sm:flex sm:flex-col gap-6 [&_p]:text-base">
          <p>+54 9 1123456789</p>
          <p>nombreDeApp</p>
          <p>@nombreDeApp</p>
          <p>nombreDeApp@gmail.com</p>
        </div>
      </div>
    </footer>

    );
};
export default Footer;