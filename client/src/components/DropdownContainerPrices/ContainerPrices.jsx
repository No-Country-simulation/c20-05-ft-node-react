import { useState } from "react";
import DropdownPrices from "../DropdownPrices/DropdownPrices";
import { manageDropdowns } from "../../utils/functions/manageDropdowns";

const DropdownContainer = ({ serviceType }) => {
    const [openDropdowns, setOpenDropdowns] = useState([]);
    
    return (
        <div className="flex flex-col gap-1 relative">
            {serviceType.map((service, index) => (
                <DropdownPrices
                    key={index}
                    service={service}
                    isOpen={openDropdowns.includes(index)}
                    onToggle={() => manageDropdowns(index, setOpenDropdowns)}
                />
            ))}
        </div>
    );
};

export default DropdownContainer;
