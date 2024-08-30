const ErrorForms = ({ msgError }) => <span className={`${!msgError ? 'hidden' : ''} text-text-error`}>{msgError}</span>
export default ErrorForms