const ErrorForms = ({ msgError }) => <span className={`${!msgError ? 'hidden' : ''} text-text-error text-sm`}>{msgError}</span>
export default ErrorForms