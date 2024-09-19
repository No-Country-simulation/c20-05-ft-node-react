import CardCaretakerHome from '../CardCaretaker/CardCaretakerHome';
import { CARETAKER_ATTRIBUTES } from '../../assets/other-assets/constants/caretaker-resources';
// import axiosInstace from '../../utils/functions/axiosInstance'
// import { API_PATHS } from '../../routes/routes'
// import { API_REQUEST_MSGS } from '../../assets/other-assets/api-request-msgs'
// import { handlerApiRequest } from '../../utils/functions/handlerApiRequest'
// import { useEffect, useState } from 'react';
import { mockCaretakers } from '../../assets/other-assets/mocks/mockCaretakerHome';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/routes';


const CaretakerOrPetContainer = () => {
  // const [caretaker, setCaretaker] = useState([])

  // useEffect(() => {
  //   const fetchCaretakers = async () => {
  //     const res = await handlerApiRequest(axiosInstace.get(API_PATHS.caretakers), API_REQUEST_MSGS.test)

  //     console.log('res', res)

  //     const { data } = res

  //     console.log('data', data)
  //     setCaretaker(data)
  //   }

  //   fetchCaretakers()
  // }, [])

    return (
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4 sm:py-8 justify-items-center items-center'>
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
          </div>
            <Link to={PATHS.searchCaretakers} className='w-fit bg-btn py-2 px-4 text-white rounded-lg font-medium hover:bg-white hover:text-btn border-2 border-btn transition duration-300 ease-out mb-4'>Ver más</Link>
            {/* {caretaker.map((caretaker, index) => (
                <CardCaretakerHome
                    key={index}
                    idCaretaker={caretaker._id}
                    nameCaretaker={`${caretaker.first_name} ${caretaker.last_name}`}
                    photoCaretaker={caretaker[CARETAKER_ATTRIBUTES.photoCaretaker]}
                    photoProfileCaretaker={caretaker.profilePicture}
                    description={caretaker[CARETAKER_ATTRIBUTES.description]}
                    distance={caretaker[CARETAKER_ATTRIBUTES.distance]}
                    location={caretaker.city}
                    rating={caretaker[CARETAKER_ATTRIBUTES.rating]}
                />
            ))} */}
        </div>
    );
}

export default CaretakerOrPetContainer;
