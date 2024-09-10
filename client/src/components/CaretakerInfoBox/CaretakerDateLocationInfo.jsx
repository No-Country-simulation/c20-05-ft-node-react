import { useEffect } from "react";
import CalendarComponent from "../../components/Calendar/Calendar";
import MapIframe from "../../components/Map/MapIframe";
import { getServicesForOptions } from "../../utils/functions/getServicesForOptions";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";
import { handlerChangeServiceValue, handlerServiceNameAndDate } from "../../utils/functions/handlerHireCareTakers";
import ButtonSubmit from "../../components/Global/ButtonSubmit.jsx";
import ErrorForms from "../ErrorsForms/ErrorForms.jsx";
import { useCaretakerProfileToHire } from "../../utils/hooks/useCaretakerProfileToHire.jsx";

const CaretakerDateLocationInfo = () => {
  const { serviceType, coordinates } = caretakerProfileMock
  const { servicesOptions, setServicesOptions, service, setService, errors, setErrors, dispatch, goToNextStep } = useCaretakerProfileToHire()

  useEffect(() => {
    setServicesOptions(getServicesForOptions(serviceType))
  }, [])

  return (
    <div className="flex flex-col [&>div]:w-full gap-5">
      <form onSubmit={() => handlerServiceNameAndDate(service, dispatch, goToNextStep)} className="flex flex-col gap-2  rounded-xl border-2 shadow-md px-3 py-6 overflow-hidden">
        <h5 className="text-lg font-bold">Servicio</h5>
        <div className="flex flex-col justify-center items-center gap-2">
          <select onChange={(e) => handlerChangeServiceValue(e, setErrors, setService)} name="service" id="service" className="w-[334px] border px-2 py-1 rounded-md text-sm shadow-md self-center ">
            <option value='none'>Seleccionar servicio...</option>
            {
              servicesOptions.map((service, index) => {
                return (<option key={index} value={service}>{service}</option>)
              })
            }
          </select>
          {
            errors && (<ErrorForms msgError={errors.serviceName} />)
          }
        </div>
        <div className="self-center">
          <div>
            <CalendarComponent section='hire' setService={setService} />
            {
              errors && (<ErrorForms msgError={errors.serviceDate} />)
            }
          </div>
          <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Contratar</ButtonSubmit>
        </div>
      </form>
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