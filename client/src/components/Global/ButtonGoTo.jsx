import { Link } from 'react-router-dom'

const ButtonGoTo = ({ children, goToPath, className, extraClassName = '', disabled }) => {
  const classDefault = `w-full bg-btn text-white font-medium text-center rounded-lg py-2 border-2 border-btn transition-transform ease-out duration-300 hover:scale-90 hover:shadow-lg disabled:opacity-30 ${extraClassName}`
  const classes = className ? `${className}` : classDefault
  return <Link to={goToPath} className={classes} disabled={disabled}>{children}</Link>
}

export default ButtonGoTo