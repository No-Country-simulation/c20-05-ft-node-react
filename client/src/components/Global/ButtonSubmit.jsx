import { cloneElement } from "react"

const ButtonSubmit = ({ children, className, extraClassName = '', disabled }) => {
  const classDefault = `bg-btn text-white font-medium rounded-lg py-2 border-2 border-btn transition-colors ease-out duration-300 hover:bg-white hover:text-btn disabled:opacity-30 ${extraClassName}` 
  const classes = className ? `${classDefault} ${className}` :  classDefault
  return <button type='submit' className={classes} disabled={disabled}>{children}</button>
}

export default ButtonSubmit