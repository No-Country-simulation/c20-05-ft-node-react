import starTrue from '../../assets/svg/starTrue.svg'
import starFalse from '../../assets/svg/starFalse.svg'
import { ratingToStars } from '../../utils/functions/ratingToStars'
import useNavigateHelper from '../../utils/hooks/useNavigateHelper'
import { useSelector } from 'react-redux'
import { PATHS } from '../../routes/routes'


const CardCaretakerHome = ({ idCaretaker, photoCaretaker, photoProfileCaretaker, nameCaretaker, description, location, distance, rating }) => {
      const { currentUser } = useSelector((state) => state.user)
    const { navigateTo } = useNavigateHelper()
    return (
        <div className='w-72 h-[346px] rounded-xl shadow-xl p-[10px]  hover:scale-[1.01] transition-transform duration-500 overflow-hidden cursor-pointer'
            onClick={() => {
                currentUser
                ? navigateTo(`/profile/${idCaretaker}`)
                : navigateTo("/register")
            }}>
            <div>
                <img className='w-[266px] h-[201px] rounded-md object-cover' src={photoCaretaker} alt="" />
            </div>
            <div className='flex flex-col gap-1 mt-1'>
                <div className='flex gap-1'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <img
                            key={index}
                            src={index < ratingToStars(rating) ? starTrue : starFalse}
                            alt='rating'
                            className='size-4'
                        />
                    ))}
                </div>
                <p className='text-[13px] font-semibold '>{location}</p>
                <p className='text-[12px] font-light '>{distance}</p>
                <div className='flex items-center gap-1'>
                    <img className='rounded-full object-cover size-10' src={photoProfileCaretaker} alt={nameCaretaker} />
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs text-gray-400 line-clamp-2'>{description}</p>
                        <p className='text-[10px] text-gray-400 font-bold'>{nameCaretaker}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardCaretakerHome