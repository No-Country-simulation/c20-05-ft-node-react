import { Link } from "react-router-dom"

const RegisterLoginWelcome = ({ section = 'register' }) => {
  if (section === 'login') return (
    <div className="flex flex-col flex-1 gap-2 max-md:text-center max-md:items-center">
      <h1 className="text-2xl font-semibold">¡Bienvenido nuevamente a nombreDeApp!</h1>
      <p>Para continuar, por favor iniciá sesión</p>
      <span className="flex gap-2">
        ¿Todavía no tenés una cuenta?
        <Link to="/register" className="text-blue-600 underline">Registrate</Link>
      </span>
    </div>
  )

  return (
    <div className="flex flex-col flex-1 gap-2 max-md:text-center max-md:items-center">
      <h1 className="text-2xl font-semibold">¡Bienvenido a nombreDeApp!</h1>
      <p>Para continuar, por favor completa el siguiente formulario y registrate</p>
      <span className="flex gap-2">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="text-blue-600 underline">Iniciá sesión</Link>
      </span>
    </div>
  )
}

export default RegisterLoginWelcome