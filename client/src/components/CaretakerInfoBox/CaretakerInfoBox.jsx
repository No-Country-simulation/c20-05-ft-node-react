import checkIcon from "../../assets/svg/check.svg"
import wrongIcon from "../../assets/svg/wrong.svg"
import avatar from "../../assets/svg/avatar.svg"
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile"

const CaretakerInfoBox = () => {

    const { skillCuidadorAdicionales, hogarCuidadorInformacion, personasQueVivenConCuidador } = caretakerProfileMock

    return (
        <div className="flex-col [&>div]:w-full gap-10">
            <div className="flex flex-col gap-4 rounded-xl border-2 shadow-md p-3">
                <h4 className="text-lg font-bold">Habilidades adicionales</h4>
                <div className="flex flex-col gap-8 h-full">
                    <ul className="h-full flex flex-col gap-2">
                        {
                            skillCuidadorAdicionales.map((skill, index) => {
                                return (
                                    <li className="flex flex-row items-center" key={index} >
                                        <img className="size-6" src={checkIcon} alt="check icon" />
                                        <h4 className="text-sm font-medium">{skill.descriptionSkill}</h4></li>
                                )
                            })

                        }
                    </ul>
                </div>

            </div>
            <div className="flex flex-col gap-8 ">
                <div className="rounded-xl border-2 shadow-md p-3 " >
                    <h4 className="text-lg font-bold mb-4">Sobre su Hogar</h4>
                    <ul className="h-full flex flex-col gap-2">
                        {
                            hogarCuidadorInformacion.map((info, index) => {
                                return (
                                    <li className="flex flex-row items-center gap-1" key={index}>
                                        <img className={`${info.existe ? "size-6" : "size-[24px]"}`} src={info.existe ? checkIcon : wrongIcon} alt="info icon" />
                                        <h5 className="text-sm font-medium">{info.caracteristicaHome}</h5>
                                    </li>)

                            })
                        }
                    </ul>
                </div>
                <div>
                    <div className="flex flex-col gap-4 h-full  rounded-xl border-2 shadow-md p-3">
                        <h5 className="text-lg font-bold">Personas que viven con el Cuidador</h5>
                        <ul className="h-full flex flex-col gap-2">
                            {
                                personasQueVivenConCuidador.map((persona, index) => {
                                    return (
                                        <li className="flex flex-row items-center " key={index} >
                                            <img className="size-3 mx-1" src={avatar} alt="avatar" />
                                            <h4 className="text-sm font-medium">{persona.nombre},&nbsp;</h4>
                                            <h4 className="text-sm font-medium">{persona.age} años </h4>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaretakerInfoBox