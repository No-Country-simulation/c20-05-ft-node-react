import { Link } from "react-router-dom"
import EditIcon from "./EditIcon"

const ConfirmService = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>2. Confirmar servicio</h2>
      <div className="w-fit flex flex-col gap-6 [&>div>div>h3]:text-base md:[&>div>div>h3]:text-lg [&>div>h3]:font-medium">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-4">
            <h3>Fechas</h3>
            <Link to="/profile/23/hire">
              <EditIcon />
            </Link>
          </div>
          <span className="text-sm">15 al 18 de sep</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-4">
            <h3>Servicios</h3>
            <Link to="/profile/23/hire">
              <EditIcon />
            </Link>
          </div>
          <span className="text-sm">Hospedaje</span>
        </div>
      </div>
    </section>
  )
}

export default ConfirmService