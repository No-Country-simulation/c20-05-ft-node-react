import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"
import UserInfoForm from "../../components/UserInfo/UserInfoForm"

const UserInfo = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <RegisterLoginHeader section='register' />
        <div className="max-w-[600px] w-full mx-auto px-6">
          <UserInfoForm />
        </div>
      </div>
    </main>
  )
}

export default UserInfo