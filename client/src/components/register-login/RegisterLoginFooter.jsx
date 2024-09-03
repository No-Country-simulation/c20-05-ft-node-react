import { Link } from 'react-router-dom'
import { TEXT_CONTENT } from '../../assets/other-assets/constants/register-login-text-content'

const RegisterLoginFooter = ({ section = 'register' }) => {
  const { question, linkText, linkPath } = TEXT_CONTENT[section]

  return (
    <div className="flex justify-center mt-8">
      <span className='flex gap-2 items-center'>
        {question}
        <Link to={linkPath} className="text-blue-600 font-medium underline">{linkText}</Link>
      </span>
    </div>
  )
}

export default RegisterLoginFooter