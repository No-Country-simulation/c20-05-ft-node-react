import { Link } from 'react-router-dom'

const ButtonGoTo = ({ children, goToPath, className, extraClassName = '', disabled }) => {
  const classDefault = `block w-full bg-btn text-white font-medium text-center rounded-lg py-2 border-2 border-btn transition-transform ease-out duration-300 hover:scale-90 hover:shadow-lg disabled:opacity-30 ${extraClassName}`
  const classes = className ? `${className}` : classDefault
  return (
    !disabled
      ? <Link to={goToPath} className={classes}>{children}</Link>
      : <button className={classes} disabled>{children}</button>
  )
}

export default ButtonGoTo