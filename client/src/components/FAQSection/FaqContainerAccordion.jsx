import { FAQ } from "../../assets/other-assets/faq-resources";
import FaqAccordion from "./FaqAccordion";

const FaqContainerAccordion = () => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      {FAQ.map((faq, index) => (
        <FaqAccordion key={index} id={index} icon={faq.icon} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FaqContainerAccordion
