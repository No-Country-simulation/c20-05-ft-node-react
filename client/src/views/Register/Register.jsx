import RegisterForm from "../../components/register-login/register/RegisterForm"
import RegisterLoginWelcome from "../../components/register-login/RegisterLoginWelcome"
const Register = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex max-md:flex-col gap-4">
        <RegisterLoginWelcome section='register' />
        <RegisterForm />
      </div>
    </main>
  )
}

export default Register