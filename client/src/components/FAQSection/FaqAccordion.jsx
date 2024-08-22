import { FAQ } from "../../assets/other-assets/faq-resources";

const FaqAccordion = () => {
  return (
    <div className="flex-1">
      {FAQ.map((faq, index) => (
        <details key={index} className="bg-gray-400 flex gap-4 p-4">
          <summary className="text-xl text-white">{faq.icon} {faq.question}</summary>
          <p className="text-sm text-white p-2">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqAccordion
