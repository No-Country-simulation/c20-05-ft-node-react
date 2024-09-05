import { useEffect, useState } from "react";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";
import { chekedSizeDog } from "../../utils/functions/sizePets";
import { filterClassImg } from "../../utils/functions/sizePets";
import { getPetBreedGenderPreference } from "../../utils/functions/getPetPreferenceGender";
import { getPetsCaretaker } from "../../utils/functions/getPetsCaretaker";
import catFace from '../../assets/svg/cat-face.svg'
import dogSizeS from '../../assets/svg/dogSize-s.svg'
import dogSizeM from '../../assets/svg/dogSize-m.svg'
import dogSizeL from '../../assets/svg/dogSize-l.svg'
import dogSizeXL from '../../assets/svg/dogSize-xl.svg'
import pawnprint from '../../assets/svg/pawprint-cat.svg'

const PetsPreferenceCaretaker = () => {
    const { description, preferensPets, petsCuidador } = caretakerProfileMock;

    const [preferencePet, setPreferencePet] = useState("")
    const [petsCaretaker, setPetsCaretaker] = useState("")


    //Montamos el componente y obetenemos dinamicamente los tipos de perros que gusta cuidar el usuario y ,tambien las mascotas del cuidador, las funciones siempre toman como tal preferencePets de los datos del cuidador, pueden venir vacio preference pero nunca null , porque siempre se espera un array
    useEffect(() => {
        setPreferencePet(getPetBreedGenderPreference(preferensPets))
        setPetsCaretaker(getPetsCaretaker(petsCuidador))
    }, [])

    return (
        <div className="h-max gap-5  md:[&>div]:w-[50%] flex flex-col md:flex-row " >
            <div className="flex flex-col gap-5 ">
                <h5 className="text-xl md:text-xl font-bold ">Conociéndome</h5>
                <p className="text-sm md:text-sm text-gray-700 bg-gray-100 p-3 rounded-lg shadow-sm overflow-hidden ">
                    {description}
                </p>
            </div>
            <div className="flex flex-col items-center justify-around gap-4 md:gap-2">
                <div className="flex flex-col gap-2 shadow-xl rounded-2xl px-4 pb-4 pt-1 w-full">
                    <h6 className="text-lg font-bold">Preferencias de cuidado</h6>
                    <h6 className="text-sm font-semibold">Puede cuidar en su casa</h6>
                    <div className="flex h-14 justify-evenly md:h-16 items-center [&>div]:flex [&>div]:flex-col [&_p]:text-xs md:[&_p]:text-sm gap-4 md:gap-5 [&>div]:items-center [&>div]:h-full  [&>div]:justify-end">
                        <div>
                            <img className={`${filterClassImg(chekedSizeDog(preferensPets), 1)} size-6 `} src={dogSizeS} alt="Dog Size S" />
                            <p>1 - 10kgs</p>

                        </div>
                        <div>
                            <img className={`${filterClassImg(chekedSizeDog(preferensPets), 11)} size-7 `} src={dogSizeM} alt="Dog Size M" />
                            <p>11kgs - 20kgs.</p>

                        </div>
                        <div>
                            <img className={`${filterClassImg(chekedSizeDog(preferensPets), 21)} size-8`} src={dogSizeL} alt="Dog Size L" />
                            <p>21 - 40kgs</p>

                        </div>
                        <div>
                            <img className={`${filterClassImg(chekedSizeDog(preferensPets), 40)} size-9`} src={dogSizeXL} alt="Dog Size XL" />
                            <p>+40 kgs.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center [&_img]:size-4">
                        <img src={catFace} alt="cat face" />
                        <h5 className="text-sm">Cuida <span className="font-bold">gatos</span></h5>
                    </div>
                    <div className="flex flex-col gap-2 [&_img]:size-4 [&>div]:flex [&>div]:gap-1 [&_h5]:text-sm [&_h5]:font-semibold [&_span]:font-normal">
                        <div>
                            <img src={pawnprint} alt="Huella" />
                            <h5>Preferencias : <span>{preferencePet.cat}</span></h5>
                        </div>
                        <div>
                            <img src={pawnprint} alt="Huella" />
                            <h5 >Preferencias : <span>{preferencePet.dog}</span></h5>
                        </div>
                    </div>

                </div>
                {
                    petsCaretaker && (
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 w-full">
                            <h4 className="text-sm font-semibold  text-gray-800">Mascotas del Paseador</h4>
                            <div className="flex flex-col gap-2 text-sm [&>p]:px-2 xl:[&>p]:w-1/2 ">
                                {petsCaretaker.dog > 0 && (
                                    <p className="text-gray-700 bg-gray-200 rounded-md">
                                        El paseador tiene {petsCaretaker.dog} {petsCaretaker.dog > 1 ? "perros" : "perro"}
                                    </p>
                                )}
                                {petsCaretaker.cat > 0 && (
                                    <p className="text-gray-700 bg-gray-200  rounded-md">
                                        El paseador tiene {petsCaretaker.cat} {petsCaretaker.cat > 1 ? "gatos" : "gato"}
                                    </p>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PetsPreferenceCaretaker