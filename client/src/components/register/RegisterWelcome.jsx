import { Link } from "react-router-dom"

const RegisterWelcome = () => {
  return (
    <div className="flex flex-col flex-1 gap-2 max-md:text-center max-md:items-center">
      <h1 className="text-2xl font-semibold">¡Bienvenido a nombreDeApp!</h1>
      <p>Para continuar, por favor completa el siguiente formulario y registrate</p>
      <span className="flex gap-2">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="text-blue-600 underline">Iniciar sesión</Link>
      </span>
    </div>
  )
}

export default RegisterWelcome