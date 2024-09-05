import ReviewProfile from './ReviewsProfile';
import { handleCloseModalClick } from '../../utils/functions/handleCLoseModals';
import wrong from '../../assets/svg/wrong.svg';

const ContainerReviews = ({ reviews, onClose }) => {

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={(event) => handleCloseModalClick(event, onClose)}
        >
            <div className="bg-white flex flex-col w-full max-w-2xl rounded-lg shadow-lg relative p-6">
                <button
                    className="size-6 absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}

                >
                    <img src={wrong} alt="salir" />
                </button>

                <h3 className="text-xl font-semibold mb-4 ">Reseñas de los Usuarios</h3>

                <div id="containerDropdowns" className="max-h-96 divide-y-[1px] divide-gray-300 overflow-auto flex flex-col pr-2">
                    {reviews.map((review, index) => (
                        <ReviewProfile
                            key={index}
                            rating={review.rating}
                            comment={review.comment}
                            reviewer={review.reviewer}
                            date={review.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContainerReviews;
