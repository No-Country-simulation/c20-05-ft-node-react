export const handleChange = (e, setForm) => {
  setForm(prevState => (
    {
      ...prevState,
      [e.target.name]: e.target.value
    })
  )
}