import CardCaretakerHome from '../CardCaretaker/CardCaretakerHome';
import { CARETAKER_ATTRIBUTES } from '../../assets/other-assets/constants/caretaker-resources';
import { mockCaretakers } from '../../assets/other-assets/mocks/mockCaretakerHome';

const CaretakerOrPetContainer = () => {
    return (
        <div className='h-max flex gap-8 flex-wrap items-center justify-center px-6 py-4 sm:px-24 sm:py-8'>
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
