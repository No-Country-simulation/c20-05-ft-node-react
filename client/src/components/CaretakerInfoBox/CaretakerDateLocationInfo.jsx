import { useEffect, useState } from "react";
import CalendarComponent from "../../components/Calendar/Calendar";
import MapIframe from "../../components/Map/MapIframe";
import { getServicesForOptions } from "../../utils/functions/getServicesForOptions";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";

const CaretakerDateLocationInfo = () => {

    const { serviceType, coordinates } = caretakerProfileMock
    const [servicesOptions, setServicesOptions] = useState([])

    useEffect(() => {
        setServicesOptions(getServicesForOptions(serviceType))
    }, [])
    return (
        <div className="flex flex-col [&>div]:w-full gap-5">
            <div className="flex flex-col gap-2  rounded-xl border-2 shadow-md px-3 py-6 overflow-hidden">
                <h5 className="text-lg font-bold">Servicio</h5>
                <select name="service" id="service" className="w-[334px] border px-2 py-1 rounded-md text-sm shadow-md self-center ">
                    {
                        servicesOptions.map((service, index) => {
                            return (<option key={index} value={service}>{service}</option>)
                        })
                    }
                </select>
                <div className="self-center ">
                    <CalendarComponent />
                </div>
            </div>
            <div className="grow flex flex-col gap-5 rounded-xl border-2 shadow-md p-3 overflow-hidden">
                <h5 className="text-lg font-bold">Ubicacion</h5>
                <div className="size-[350px] self-center">
                    <MapIframe coordinates={coordinates} />
                </div>
            </div>

        </div>
    )
}

export default CaretakerDateLocationInfo