import { TEXT_CONTENT } from "../../assets/other-assets/constants/register-login-text-content"

const RegisterLoginHeader = ({ section = 'register' }) => {
  const { header } = TEXT_CONTENT[section]

  return (
    <div className="flex justify-center py-4 border-b-[1px] border-gray-200 font-medium">
      <h1>{header}</h1>
    </div>
  )
}

export default RegisterLoginHeader