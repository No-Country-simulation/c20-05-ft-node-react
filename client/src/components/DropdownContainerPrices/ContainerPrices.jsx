import { useState } from "react";
import DropdownPrices from "../DropdownPrices/DropdownPrices";

const DropdownContainer = ({ serviceType }) => {
    const [openDropdowns, setOpenDropdowns] = useState([]);

    // Alternar estado del dropdown
    const toggleDropdown = (index) => {
        setOpenDropdowns(prevState => {
            const newOpenDropdowns = [...prevState];

            if (newOpenDropdowns.includes(index)) {
                // Cerrar dropdown si está abierto
                return newOpenDropdowns.filter(i => i !== index);
            } else {
                // Abrir dropdown y cerrar los anteriores si hay más de 2
                if (newOpenDropdowns.length >= 2) {
                    return newOpenDropdowns.slice(1).concat(index);
                } else {
                    return [...newOpenDropdowns, index];
                }
            }
        });
    };

    return (
        <div className="w-[90%] flex flex-col gap-1 relative">
            {serviceType.map((service, index) => (
                <DropdownPrices
                    key={index}
                    service={service}
                    isOpen={openDropdowns.includes(index)}
                    onToggle={() => toggleDropdown(index)}
                />
            ))}
        </div>
    );
};

export default DropdownContainer;
