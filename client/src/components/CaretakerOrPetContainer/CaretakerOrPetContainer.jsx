import CardCaretakerHome from '../CardCaretaker/CardCaretakerHome';
import { CARETAKER_ATTRIBUTES } from '../../assets/other-assets/constants/caretaker-resources';
import axiosInstace from '../../utils/functions/axiosInstance'
import { API_PATHS } from '../../routes/routes'
import { API_REQUEST_MSGS } from '../../assets/other-assets/api-request-msgs'
import { handlerApiRequest } from '../../utils/functions/handlerApiRequest'
import { useEffect, useState } from 'react';

const CaretakerOrPetContainer = () => {
  const [caretaker, setCaretaker] = useState([])

  useEffect(() => {
    const fetchCaretakers = async () => {
      const res = await handlerApiRequest(axiosInstace.get(API_PATHS.caretakers), API_REQUEST_MSGS.test)

      console.log('res', res)

      const { data } = res

      console.log('data', data)
      setCaretaker(data)
    }

    fetchCaretakers()
  }, [])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4 sm:py-8 justify-items-center items-center'>
            {caretaker.map((caretaker, index) => (
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
            ))}
        </div>
    );
}

export default CaretakerOrPetContainer;
