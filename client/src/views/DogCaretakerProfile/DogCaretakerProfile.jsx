import { useState } from "react";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";
import DropdownContainer from "../../components/DropdownContainerPrices/ContainerPrices";
import ButtonSubmit from "../../components/Global/ButtonSubmit";

const DogCaretakerProfile = () => {
    const { first_Name, last_Name, location, reviews, serviceType, photos } = caretakerProfileMock;

    // Estado para el índice de la imagen actual del carrusel
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Función para ir a la imagen anterior
    const prevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.photosViews.length - 1 : prevIndex - 1));
    };

    // Función para ir a la imagen siguiente
    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.photosViews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="h-max px-4 md:px-20  py-4">
            {/*Info Base Cuidador */}
            <section className="h-max flex flex-col py-2 md:h-dvh [&_div]:flex md:[&>div]:h-[50%]">
                <div className="h-dvh gap-1 md:gap-0  flex-col-reverse md:flex-row items-center md:[&>div]:w-[50%] " >

                    {/* Carrusel de imágenes */}
                    <div className="h-full w-full border-2 rounded-xl shadow-md md:m-8 overflow-hidden relative items-center">
                        <img className="size-full object-cover" src={photos.photosViews[currentPhotoIndex]} alt={`photo-${currentPhotoIndex}`} />

                        {/* Botón para imagen anterior */}
                        <button
                            onClick={prevPhoto}
                            className="size-10 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white">
                            &#9664;
                        </button>

                        {/* Botón para imagen siguiente */}
                        <button
                            onClick={nextPhoto}
                            className="size-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white">
                            &#9654;
                        </button>
                    </div>

                    <div className="h-full w-full flex-col gap-4 md:gap-1 [&>div]:w-full [&>div]:h-max ">
                        <div className="gap-5 items-center ">
                            <div className="mb-4">
                                <img className="rounded-full size-24 object-cover" src={photos.profilePhoto} alt={first_Name} />
                            </div>
                            <div className="grow justify-between">
                                <div className="flex-col">
                                    <h4 className="text-xl">{first_Name} {last_Name}</h4>
                                    <div className="flex-col p-2 gap-1 ">
                                        <h4 className="text-lg">{location.city}, {location.country}</h4>
                                        <h5 className="cursor-pointer" onClick={() => alert("se abre el modal de", reviews)}>Reseñas</h5>
                                    </div>
                                </div>
                                <ButtonSubmit children={"Contactar"} className={"h-max px-2"}/>
                            </div>

                        </div>
                        <div id="containerDropdowns" className="flex-col items-center grow gap-1 bg-white overflow-y-scroll">
                            <h2 className="font-bold tracking-wider w-[90%]">Tarifas</h2>
                            <DropdownContainer serviceType={serviceType} />

                        </div>
                    </div>
                </div>

                <div className="h-dvh bg-yellow-800 [&>div]:flex-1" >
                </div>
            </section>
        </div>
    );
};

export default DogCaretakerProfile;
