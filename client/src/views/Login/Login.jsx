import LoginForm from "../../components/register-login/login/LoginForm"
import RegisterLoginFooter from "../../components/register-login/RegisterLoginFooter"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"

const Login = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <RegisterLoginHeader section='login' />
        <div className="max-w-[600px] w-full mx-auto px-6">
          <LoginForm />
          <RegisterLoginFooter section='login' />
        </div>
      </div>
    </main>
  )
}

export default Login