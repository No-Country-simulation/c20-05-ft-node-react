import { useState } from "react";
import { FILTERS_HOME } from "../../assets/other-assets/filters-resources";
import filterIcon from "../../assets/images/filters-icon.png";

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <button onClick={() => setShowFilters(!showFilters)} className="flex gap-2 items-center sm:hidden border-2 py-2 px-4 rounded-lg">
        <img src={filterIcon} alt="mostrar filtros" className="w-5" />
        <span>Filtros</span>
      </button>
      <div className={`${showFilters ? '' : 'max-sm:hidden'} max-sm:absolute my-2 bg-white flex max-sm:flex-col gap-10 justify-center items-center max-sm:border rounded-lg p-6 max-sm:w-fit`}>
        {
          FILTERS_HOME.map((filter) => (
            <div key={filter.id} className="flex flex-col items-center cursor-pointer hover:opacity-35 transition-opacity duration-300 ease-out">
              <div className="p-2 rounded-full">
                <img src={`src/assets/images/${filter.icon}-icon.png`} alt={filter.name} className="w-10" />
              </div>
              <p className="text-sm">{filter.name}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Filters