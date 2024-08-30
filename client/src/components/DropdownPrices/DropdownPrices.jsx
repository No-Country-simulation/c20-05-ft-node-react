const DropdownPrices = ({ service, isOpen, onToggle }) => {
    return (
        <div className="relative flex flex-col rounded-lg shadow-md border bg-white text-black text-[11px] pt-1">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-2 rounded-2xl focus:outline-none"
            >
                <p>{service.careType}</p>
                <div className="flex items-center">
                    <p>${service.price}</p>
                    <svg
                        className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="py-1 px-2 flex flex-col w-full [&>div]:w-full [&>div]:justify-between ">
                    <div>
                        <p className="text-[10px]">Precio adicional por hora:</p>
                        <p className="text-[10px]">${service.priceAdditionalHour} </p>
                    </div>
                    <div>
                        <p className="text-[10px]">Precio adicional por mascota: </p>
                        <p className="text-[10px]"> ${service.petAdditional}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownPrices;
