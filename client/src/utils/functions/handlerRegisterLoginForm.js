export const handlerRegisterLoginForm = (e, setForm) => {
  console.log('e.target.name', e.target.name)
  setForm(prevState => (
    {
      ...prevState,
      [e.target.name]: e.target.value
    })
  )
}