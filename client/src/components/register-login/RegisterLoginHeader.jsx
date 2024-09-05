import { Link } from "react-router-dom"
import { TEXT_CONTENT } from "../../assets/other-assets/constants/register-login-text-content"
import chevronIcon from "../../assets/svg/chevron-icon.svg"

const RegisterLoginHeader = ({ section = 'register', goToPath = null }) => {
  const { header } = TEXT_CONTENT[section]

  return (
    <div className="relative flex justify-center py-4 border-b-[1px] border-gray-200 font-medium">
      {
        goToPath && (
          <Link to={goToPath} className="absolute top-4 left-4 [&>img]:hover:-translate-x-1">
            <img src={chevronIcon} alt="volver" className="size-6 rotate-90 transition-transform duration-300 ease-out" />
          </Link>
        )
      }
      <h1>{header}</h1>
    </div>
  )
}

export default RegisterLoginHeader