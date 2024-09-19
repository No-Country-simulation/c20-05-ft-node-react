const VisualTabs = ({ section = 'userInfo' }) => {
  const isUserInfoSection = section === 'userInfo'
  const isPetsSection = section === 'petsForm'
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-12 justify-center md:text-lg'>
        <h3 className={isUserInfoSection ? 'font-medium text-primary' : ''}>Datos personales</h3>
        <h3 className={isPetsSection ? 'font-medium text-primary' : ''}>Mascotas</h3>
      </div>
    </div>
  )
}

export default VisualTabs