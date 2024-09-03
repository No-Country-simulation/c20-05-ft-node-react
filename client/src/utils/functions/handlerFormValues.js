export const handlerFormValues = (e, setForm) => {
  const { name, value } = e.target
  setForm(prevState => (
    {
      ...prevState,
      [name]: value
    })
  )
}