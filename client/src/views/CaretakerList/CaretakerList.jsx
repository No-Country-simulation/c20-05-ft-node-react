import { useState } from "react"
import { CARETAKER_ATTRIBUTES } from "../../assets/other-assets/constants/caretaker-resources"
import { mockCaretakers } from "../../assets/other-assets/mocks/mockCaretakerHome"
import CardCaretakerHome from "../../components/CardCaretaker/CardCaretakerHome"
import CaretakersMap from "../../components/Map/CaretakersMap"
import MapIcon from "../../assets/svg/map-icon.svg"

const CaretakerList = () => {
  const [showMap, setShowMap] = useState(false)

  const handleShowMap = () => setShowMap(!showMap)

  return (
    <main>
      <h1>CaretakerList</h1>
      <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4 sm:py-8 justify-items-center items-center z-10'>
        {mockCaretakers.map((caretaker, index) => (
          <CardCaretakerHome
            key={index}
            nameCaretaker={caretaker[CARETAKER_ATTRIBUTES.nameCaretaker]}
            photoCaretaker={caretaker[CARETAKER_ATTRIBUTES.photoCaretaker]}
            photoProfileCaretaker={caretaker[CARETAKER_ATTRIBUTES.photoProfile]}
            description={caretaker[CARETAKER_ATTRIBUTES.description]}
            distance={caretaker[CARETAKER_ATTRIBUTES.distance]}
            location={caretaker[CARETAKER_ATTRIBUTES.location]}
            rating={caretaker[CARETAKER_ATTRIBUTES.rating]}
          />
        ))}
        <button onClick={handleShowMap} className="flex gap-2 items-center fixed bottom-8 left-0 right-0 mx-auto bg-black text-white w-fit rounded-full font-semibold py-2 px-6">
          <img className="size-6" src={MapIcon} alt="mapa icono" />
          Ver mapa
        </button>
      </div>
      <div className={`${showMap ? '' : 'opacity-0 -z-[1px] pointer-events-none'}`}>
        <CaretakersMap caretakersList={mockCaretakers} />
      </div>
    </main>
  )
}

export default CaretakerList