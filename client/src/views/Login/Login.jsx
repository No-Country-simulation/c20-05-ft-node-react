import LoginForm from "../../components/register-login/login/LoginForm"
import RegisterLoginWelcome from "../../components/register-login/RegisterLoginWelcome"

const Login = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex max-md:flex-col gap-4">
        <RegisterLoginWelcome section="login"/>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login