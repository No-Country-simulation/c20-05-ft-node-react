import { Link } from 'react-router-dom'
import { TEXT_CONTENT } from '../../assets/other-assets/constants/register-login-text-content'
import ThirdPartyButton from './ThirdPartyButton'
import GoogleIcon from '../../assets/svg/google-icon.svg'

const RegisterLoginFooter = ({ section = 'register' }) => {
  const { question, linkText, linkPath, linkTextThirdParty } = TEXT_CONTENT[section]

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className='w-full flex flex-col items-center gap-4 mb-6'>
        <div className='w-full relative text-center before:absolute before:my-auto before:top-1.5 before:bottom-0 before:left-0 before:w-1/2 before:h-[2px] before:bg-gray-light after:absolute after:my-auto after:top-1.5 after:bottom-0 after:w-1/2 after:h-[2px] after:bg-gray-light'>
          <span className='relative bg-white p-2 text-xl'>o</span>
        </div>
        <ThirdPartyButton iconSrc={GoogleIcon} text={linkTextThirdParty} providerName='Google' />
      </div>
      <span className='flex gap-2 items-center'>
        {question}
        <Link to={linkPath} className="text-blue-600 font-medium underline">{linkText}</Link>
      </span>
    </div>
  )
}

export default RegisterLoginFooter