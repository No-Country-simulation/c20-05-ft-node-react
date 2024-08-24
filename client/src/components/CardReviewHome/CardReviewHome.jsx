import React from 'react';
import FaStar from '../../assets/svg/star.svg';

const CardReviewHome = ({ review }) => {
    const { caretakerName, caretakerPhoto, reviewDescription, rating, userName, userPhoto } = review;

    // Función para renderizar estrellas con Tailwind CSS
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <img
                key={index}
                src={FaStar}
                alt={`Star ${index + 1}`}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                style={{ filter: index < rating ? 'grayscale(0)' : 'grayscale(100%)' }}
            />
        ));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm: mb-4 max-w-sm mx-4 h-60">
            {/* Foto del cuidador */}
            <div className="flex-shrink-0 flex justify- items-center gap-2">
                <img
                    src={caretakerPhoto}
                    alt={`Foto de ${caretakerName}`}
                    className="object-cover rounded-full shadow-md"
                    style={{ width: '100px', height: '100px' }} // Tamaño más pequeño
                />
                <h3 className="text-lg font-semibold text-gray-800">{caretakerName}</h3>
            </div>

            {/* Información de la reseña */}
            <div className="sm:ml-4 flex-grow">
                <p className="text-sm text-gray-600 mt-1">{reviewDescription}</p>

                {/* Valoración y usuario */}
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Valoración en estrellas */}
                        <div className="flex">
                            {renderStars(rating)}
                        </div>
                    </div>

                    {/* Usuario que dejó la reseña */}
                    <div className="flex items-center">
                        <img
                            src={userPhoto}
                            alt={`Foto de ${userName}`}
                            className="object-cover rounded-full border-2 border-gray-300 mr-1"
                            style={{ width: '40px', height: '40px' }} // Imagen de usuario más pequeña
                        />
                        <span className="text-xs font-medium text-gray-700">{userName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardReviewHome;
