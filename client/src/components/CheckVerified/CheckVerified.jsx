import verifiedIcon from '../../assets/svg/verified.svg'
import tickVerifiedIcon from '../../assets/svg/tick-verified.svg'
const CheckVerified = () => {
    return (
        <div>
            <div className='flex justify-center items-center w-max relative'>
                <img src={tickVerifiedIcon} alt="tick-verified" className='z-10 relative top-1/2 left-1/2' />
                <img src={verifiedIcon} alt="container-tick" />
            </div>
        </div>
    )
}

export default CheckVerified