const ThirdPartyButton = ({ iconSrc, text, providerName }) => {
  return (
    <button className='flex gap-2 items-center font-semibold mt-4 hover:scale-105 transition-transform ease-out duration-300'>
      <img src={iconSrc} alt={`${text} ${providerName}`} className='size-7' />
      <span>{text} {providerName}</span>
    </button>
  )
}

export default ThirdPartyButton