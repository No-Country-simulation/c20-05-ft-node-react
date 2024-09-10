import filterIcon from "../../assets/svg/filter-icon.svg"
import React, { useState } from "react";


const CaretakerFilterDropdown = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    
    const toggleSorting = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" w-[14%] h-2/4 md:w-[25%] flex md:justify-center items-center ">

            

            <div className="w-full md:w-4/5  xl:w-3/5 h-full relative">

                <button 
                className="h-full  p-1 flex justify-center items-center w-full gap-2 sm:border border-black rounded-lg"
                onClick={toggleSorting}
                >
                    <span className="text-center font-semibold text-sm hidden md:block">Ordenar por</span>
                    
                    <img 
                        src={filterIcon}  
                        alt="Filter icon"
                        className="size-7"
                        
                    />
                </button>

                <div id="dropDown" className={`transition-all duration-500 ${isOpen ? 'block' : 'hidden'} 
                absolute rounded-xl border border-black  shadow-md  bg-gray-100   w-36 right-0   2xl:w-48 [&_div]:border-b [&_div]:p-2 [&_div]:flex [&_div]:justify-between [&_div]:px-2  
                [&_div:last-child]:justify-center  [&_div:last-child]:border-b-0 [&_div:last-child]:rounded-b-xl`}>

                    <div>
                        <label>Reseña</label>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <label>Ubicacion</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Años de exp</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Precios</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Politicas</label>
                        <input type="checkbox"/>
                    </div>
                    <div className="bg-blue-500">
                        <button className="w-full  text-white ">
                            Aplicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaretakerFilterDropdown;