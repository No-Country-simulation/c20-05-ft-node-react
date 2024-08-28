import { useState, useEffect } from 'react';
import CardReviewHome from '../CardReviewHome/CardReviewHome';
import { loadReviews } from '../../utils/functions/validations/loadReviews';
import { loadMoreReviews } from '../../utils/functions/shorMoreReviews';
import { getMarginClasses } from '../../utils/functions/marginClasesByContainerReviews';
import { reviewsData } from '../../assets/other-assets/mocks/mockReviews'; // Mock para mostrar Componente hasta tener diseño y datos

const ReviewsHome = () => {
    const [dataReviews, setDataReviews] = useState([]);
    const [errorReviews, setErrorReviews] = useState(null);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        // Handler de llamada a la API para obtener reseñas
        loadReviews(setDataReviews, setErrorReviews);
    }, []);

    const reviewsToShow = reviewsData.slice(startIndex, startIndex + 6);

    return (
        <div className="h-max p-2 pb-8 sm:h-screen sm:py-16 sm:px-16 relative" id='reviews'>
            <div className='bg-gray-light h-full rounded-2xl flex flex-wrap justify-center items-center gap-8 p-4 mx-4 sm:mx-0 lg:p-0 overflow-hidden overflow-y-scroll sm:cursor-pointer md:cursor-auto scrollbar-hide'>
                {reviewsToShow.map((review, index) => {
                    const marginClasses = getMarginClasses(index);
                    return (
                        <div className={`flex-shrink-0 ${marginClasses}`} key={index}>
                            <CardReviewHome review={review} />
                        </div>
                    );
                })}
            </div>
            {reviewsData.length > startIndex + 6 && (
                <div className="flex justify-center absolute bottom-1 right-1">
                    <button
                        onClick={() => loadMoreReviews(setStartIndex)}
                        className="p-2 text-xs font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <a href="#reviews">
                            Cargar más reseñas {'>>'}
                        </a>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewsHome;
