const ButtonSubmit = ({ children, className, extraClassName = '', disabled }) => {
  const classDefault = `w-full bg-btn text-white font-medium rounded-lg py-2 border-[1px] border-btn transition-colors ease-out duration-300 hover:bg-white hover:text-btn disabled:opacity-30 ${extraClassName}` 
  const classes = className ? `${className}` : classDefault
  return <button type='submit' className={classes} disabled={disabled}>{children}</button>
}

export default ButtonSubmit