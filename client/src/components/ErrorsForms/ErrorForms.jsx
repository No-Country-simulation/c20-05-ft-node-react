const ErrorForms = ({ msgError }) => <span className={`${!msgError ? 'hidden' : ''} text-red-500`}>{msgError}</span>
export default ErrorForms