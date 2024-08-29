const FaqAccordion = ({ id, icon, question, answer }) => {
  return (
    <div className="flex gap-4">
      <div className="w-full h-max overflow-hidden shadow-md rounded-lg">
        <input id={`accordion-checkbox-${id}`} type="checkbox" className="hidden ml-4 [&+label+div]:checked:block [&+label+div]:checked:translate-y-0 [&+label+div]:checked:h-fit [&+label+div]:checked:bg-white [&+label>img]:checked:rotate-180 [&+label]:checked:rounded-b-none [&+label]:checked:bg-white [&+label]:checked:pb-0" />
        <label htmlFor={`accordion-checkbox-${id}`} className="relative bg-neutral-50 flex gap-2 items-center rounded-lg p-4 z-10 cursor-pointer">
          <h4 className="flex items-center gap-2 w-full text-lg md:text-xl font-medium"><span className="text-sm">{icon}</span> {question}</h4>
          <img src="src/assets/svg/chevron-icon.svg" alt="ver info" className="size-6 transition-transform ease-out duration-300" />
        </label>
        <div className='-translate-y-28 h-0 bg-neutral-100 px-4 rounded-b-lg transition-transform ease-out duration-300'>
          <p className="text-sm md:text-base py-4 px-2">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion
