import CheckVerified from '../CheckVerified/CheckVerified';
import petsIcon from '../../assets/svg/pets.svg'
const CardReviewHome = ({ review }) => {
    const { caretakerName, caretakerPhoto, reviewDescription, userName, userPhoto, petName } = review;

    return (
        <div className="bg-white rounded-lg shadow-md p-2 flex flex-col w-80 h-52" >
            <div className='flex gap-2 mt-4 '>
                <div className='flex flex-col-reverse relative'>
                    <div className='absolute bottom-0 right-2'>
                        <CheckVerified />
                    </div>
                    <img
                        src={caretakerPhoto}
                        alt={`Foto de ${caretakerName}`}
                        className="rounded-full object-cover"
                        style={{ width: '62px', height: '62px' }}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-sm font-semibold text-gray-900 leading-5">{caretakerName}</h3>
                    <p className='text-sm text-gray-400'>Paseadora de perros</p>
                </div>
            </div>
            <div className='mt-5 h-full flex flex-col justify-between'>
                <p className="text-sm leading-4 text-left text-gray-900 line-clamp-3 ">{reviewDescription}</p>
                <div className="flex justify-end items-center">
                    <img
                        src={userPhoto}
                        alt={`Foto de ${userName}`}
                        className="object-cover rounded-full mr-1"
                        style={{ width: '34px', height: '34px' }}
                    />
                    <div className='flex text-xs font-light text-gray-700 gap-[2px]'>
                        <p>{userName}</p>
                        (<p>{petName}</p>
                        <img className='w-3' src={petsIcon} alt="mascotas Iconos" />)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardReviewHome;
