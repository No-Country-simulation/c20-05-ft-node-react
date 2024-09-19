import arrowBack from '../../assets/svg/chevron-icon.svg'

const FaqAccordion = ({ id, icon, question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="flex gap-4 text">
      <div className="w-full h-max overflow-hidden shadow-md rounded-lg">
        <input
          id={`accordion-checkbox-${id}`}
          type="checkbox"
          className="hidden ml-4 [&+label+div]:checked:block [&+label+div]:checked:translate-y-0 [&+label+div]:checked:h-fit [&+label+div]:checked:bg-white [&+label>img]:checked:rotate-180 [&+label]:checked:rounded-b-none [&+label]:checked:bg-white [&+label]:checked:pb-0"
          checked={isOpen}
          onChange={() => toggleAccordion(id)}
        />
        <label htmlFor={`accordion-checkbox-${id}`} className="relative bg-gray-50 flex gap-2 items-center rounded-lg p-4 z-10 cursor-pointer">
          <h4 className="flex items-center gap-2 w-full text-xs md:text-sm font-medium"><span className="text-xs">{icon}</span> {question}</h4>
          <img src={arrowBack} alt="ver info" className="size-4 transition-transform ease-out duration-300" />
        </label>
        <div className={`${isOpen ? "translate-y-0 h-fit" : "-translate-y-28 h-0"} bg-neutral-100 px-4 rounded-b-lg transition-transform ease-out duration-300`}>
          <p className="text-xs md:text-sm py-4 px-2">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion;
