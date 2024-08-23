import RegisterForm from "./RegisterForm"
import RegisterWelcome from "./RegisterWelcome"

const Register = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex max-md:flex-col gap-4">
        <RegisterWelcome />
        <RegisterForm />
      </div>
    </main>
  )
}

export default Register