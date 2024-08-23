import { FAQ } from "../../assets/other-assets/faq-resources";

const FaqAccordion = () => {
  return (
    <div className="flex-1">
      {FAQ.map((faq, index) => (
        <div key={index} className="bg-gray-400 flex gap-4 p-4">
          <div className="h-max overflow-hidden">
            <input id={`accordion-checkbox-${index}`} type="checkbox" className="hidden ml-4 [&+label+div>p]:checked:translate-y-0 [&+label+div>p]:checked:h-fit [&+label>img]:checked:rotate-180" />
            <label htmlFor={`accordion-checkbox-${index}`} className="relative bg-gray-500 flex gap-2 items-center z-10">
              <img src="src/assets/svg/chevron-icon.svg" alt="ver info" className="size-6 invert transition-transform ease-out duration-300" /> 
              <h4 className="text-xl text-white">{faq.icon} {faq.question}</h4>
            </label>
            <div>
              <p className="h-0 -translate-y-28 text-sm text-white p-2 transition-transform ease-out duration-300">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
