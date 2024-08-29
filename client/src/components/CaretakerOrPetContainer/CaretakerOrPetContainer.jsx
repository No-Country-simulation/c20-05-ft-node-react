import CardCaretakerHome from '../CardCaretaker/CardCaretakerHome';
import { CARETAKER_ATTRIBUTES } from '../../assets/other-assets/constants/caretaker-resources';
import { mockCaretakers } from '../../assets/other-assets/mocks/mockCaretakerHome';

const CaretakerOrPetContainer = () => {
    return (
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
    );
}

export default CaretakerOrPetContainer;
