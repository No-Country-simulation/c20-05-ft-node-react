import { useState } from "react";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";// importacion que debes copiar Marcos
import DropdownContainer from "../../components/DropdownContainerPrices/ContainerPrices";
import ContainerReviews from "../CardReviewHome/ContainerReviewProfile";

const InfoProfile = ({ setShowMsgModal }) => {
    const { first_Name, last_Name, reviews, serviceType, photos } = caretakerProfileMock; // copiar esto Marcos para pasarselo a tu componente navbar y tambien su importacion
    const [openReviews, setOpenReviews] = useState(false)

    return (
        <div className="h-full w-full md:max-h-[50vh] md:size-full flex-col gap-4 md:gap-1 [&>div]:w-full [&>div]:h-max justify-center items-center overflow-hidden">
            <div className="gap-5  items-center ">
                <div className="mb-4">
                    <img className="rounded-full size-24 object-cover" src={photos.profilePhoto} alt={first_Name} />
                </div>
                <div className="grow justify-between">
                    <div className="flex-col">
                        <h4 className="text-xl">{first_Name} {last_Name}</h4>
                        <div className="flex-col p-2 gap-1 ">
                            <h4 className="text-lg">Recoleta, Buenos Aires</h4>
                            <div className="flex gap-4">
                              <button className="w-fit px-4 cursor-pointer py-1 rounded-md bg-blue-500 text-white" onClick={() => setShowMsgModal(true)}>Contactar</button>
                              <button className="cursor-pointer py-1 rounded-md underline" onClick={() => setOpenReviews(true)}>Reseñas</button>
                              {
                                  openReviews && <ContainerReviews reviews={reviews} onClose={() => setOpenReviews(false)} />
                              }
                            </div>
                        </div>
                    </div>
                    {/* <ButtonSubmit children={"Contactar"} extraClassName={"h-max px-2"} /> */}
                </div>

            </div>
            <div id="containerDropdowns" className="flex-col  grow gap-1 pr-3 overflow-y-scroll ">
                <h2 className="font-bold tracking-wider ">Tarifas</h2>
                <DropdownContainer serviceType={serviceType} />

            </div>
        </div>
    )
}

export default InfoProfile;