import RegisterForm from "../../components/register/RegisterForm"
import RegisterWelcome from "../../components/register/RegisterWelcome"
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