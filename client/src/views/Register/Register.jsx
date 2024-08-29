import RegisterForm from "../../components/register-login/register/RegisterForm"
import RegisterLoginFooter from "../../components/register-login/RegisterLoginFooter"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"

const Register = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <RegisterLoginHeader section='register' />
        <div className="max-w-[600px] w-full mx-auto px-6">
          <RegisterForm />
          <RegisterLoginFooter section='register' />
        </div>
      </div>
    </main>
  )
}

export default Register