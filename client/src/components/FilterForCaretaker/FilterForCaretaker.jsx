import React from "react";
import dayrcareIcon from "../../assets/svg/daycare-icon.svg"
import hostingIcon from "../../assets/svg/hosting-icon.svg"
import homecareIcon from "../../assets/svg/home-care-icon.svg"
import feedingIcon from "../../assets/svg/feeding-icon.svg"
import walkIcon from "../../assets/svg/walkcaretaker-icon.svg"

import CaretakerFilterDropdown from "./CaretakerFilterDropdown";


const FilteForCaretaker = () => {
    return (

        <div className=" flex m-auto h-28 md:w-4/5 items-center   " >
        <div className="h-full flex p-1  justify-between items-center w-[85%] md:w-[75%] md:justify-evenly [&>button]:max-w-[20%] [&>button]:min-w-[15%] [&>button]:flex [&>button]:flex-col [&>button]:items-center [&>button]:justify-center [&_p]:text-xs [&_p]:text-center [&_p]:m-0 md:[&_p]:text-base [&_img]:size-8 md:[&_img]:size-12 ">

            <button>
                <img 
                src={dayrcareIcon}
                alt="guarderia-icon" 
                />
                <p>Guardería</p>
            </button>
            <button>
                <img src={hostingIcon}
                alt="hospedaje-icon" 
                />
                <p>Hospedaje</p>
            </button>
            <button>
                <img src={homecareIcon} 
                alt="cuidado-domiciliario-icon" 
                />
                <p className="line-clamp-1">Cuidado a domicilio</p>
            </button>
            <button>
                <img src={feedingIcon}
                alt="Alimentar-icon" 
                />
                <p>Alimentar</p>
            </button>
            <button>
                <img src={walkIcon}
                alt="paseo-icon" 
                />
                <p>Paseo</p>
            </button>
        
            
        </div>
        <CaretakerFilterDropdown/>
        
    </div>


    );
};
export default FilteForCaretaker