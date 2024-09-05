import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";
import { useState } from "react";


const CarruselPhotosProfile = () => {
    const { photos } = caretakerProfileMock;
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const prevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.photosViews.length - 1 : prevIndex - 1));
    };
    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.photosViews.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="sm:h-auto  md:h-full flex justify-center md:m-2 relative items-center">
            <div className="relative h-96 md:max-h-[50dvh] w-full flex justify-center items-center">
                <img className="h-full md:h-full md:w-full object-cover rounded-xl shadow-md " src={photos.photosViews[currentPhotoIndex]} alt={`photo-${currentPhotoIndex}`} />
                <button
                    onClick={prevPhoto}
                    className="size-10 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white">
                    &#9664;
                </button>
                <button
                    onClick={nextPhoto}
                    className="size-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white">
                    &#9654;
                </button>
            </div>
        </div>
    )
}

export default CarruselPhotosProfile