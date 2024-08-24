import React, { useState, useEffect } from 'react';
import CardReviewHome from '../CardReviewHome/CardReviewHome';
import { reviewsData } from '../../assets/other-assets/mockReviews';

const ReviewsHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);


    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(handleNext, 3000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <div className="h-screen flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100">
                <div className="relative flex flex-col items-center w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex-1 flex items-center justify-center p-8">
                        <div className="text-center max-w-xs md:max-w-lg">
                            <h1 className="text-2xl font-bold mb-4 md:text-2xl">¡La combinación perfecta para tu peludo amigo! 🐾</h1>
                            <p className="text-lg  leading-relaxed">
                                Muchos dueños de mascotas han confiado en nosotros para encontrar al cuidador ideal para sus perritos.
                                <br />
                                <br />
                                5 estrellas para nuestros cuidadores, puedes estar seguro de que tu compañero está en las mejores manos.
                                <br />
                                <br />
                                ¡Descubre por qué somos la opción preferida para el cuidado de tu mascota!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100">
                <div className="relative flex flex-col items-center w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                        {reviewsData.map((review, index) => (
                            <div
                                key={index}
                                className={`absolute transition-transform duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-20 scale-100' : 'opacity-60 z-10 scale-90'
                                    }`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                }}
                            >
                                <CardReviewHome review={review} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-16 flex space-x-2">
                        {reviewsData.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                                aria-label={`Review ${index + 1} ${index === currentIndex ? 'current' : ''}`}
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-4 flex space-x-4">
                        <button
                            className="text-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
                            onClick={() => {
                                setIsPaused(true);
                                handlePrev();
                            }}
                            onMouseLeave={() => setIsPaused(false)}
                            aria-label="Previous review"
                        >
                            Anterior
                        </button>
                        <button
                            className="text-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
                            onClick={() => {
                                setIsPaused(true);
                                handleNext();
                            }}
                            onMouseLeave={() => setIsPaused(false)}
                            aria-label="Next review"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsHome;
