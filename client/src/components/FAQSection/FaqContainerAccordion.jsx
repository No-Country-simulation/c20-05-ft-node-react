import { useState } from "react";
import { FAQ } from "../../assets/other-assets/faq-resources";
import FaqAccordion from "./FaqAccordion";
import { openToggleAccordion } from "../../utils/functions/openToggleAccordion";
const FaqContainerAccordion = () => {

  const [openAccordions, setOpenAccordions] = useState([]);

  return (
    <div className="flex flex-col gap-4 flex-1">
      {FAQ.map((faq, index) => (
        <FaqAccordion
          key={index}
          id={index}
          icon={faq.icon}
          question={faq.question}
          answer={faq.answer}
          isOpen={openAccordions.includes(index)}
          toggleAccordion={(id) => openToggleAccordion(id, setOpenAccordions)}
        />
      ))}
    </div>
  );
};

export default FaqContainerAccordion;
