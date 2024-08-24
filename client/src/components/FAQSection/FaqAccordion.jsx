const FaqAccordion = ({ id, icon, question, answer }) => {
  return (
    <div className="bg-gray-400 flex gap-4 p-4">
      <div className="h-max overflow-hidden">
        <input id={`accordion-checkbox-${id}`} type="checkbox" className="hidden ml-4 [&+label+div>p]:checked:translate-y-0 [&+label+div>p]:checked:h-fit [&+label>img]:checked:rotate-0" />
        <label htmlFor={`accordion-checkbox-${id}`} className="relative bg-gray-500 flex gap-2 items-center z-10">
          <img src="src/assets/svg/chevron-icon.svg" alt="ver info" className="size-6 -rotate-90 invert transition-transform ease-out duration-300" />
          <h4 className="text-xl text-white">{icon} {question}</h4>
        </label>
        <div>
          <p className="h-0 -translate-y-28 text-sm text-white p-2 transition-transform ease-out duration-300">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion
