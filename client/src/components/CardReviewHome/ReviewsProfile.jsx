import { formatDate } from "../../utils/functions/formatDate";
import StarRating from "./StarsRating";


const ReviewProfile = ({ rating, comment, reviewer, date, avatar }) => {

    return (
        <div className=" border-gray-300 py-4 flex items-start space-x-2">
            <img
                src={avatar || 'https://via.placeholder.com/50'}
                alt={reviewer}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between py">
                    <h4 className="font-semibold text-lg">{reviewer}</h4>
                    <span className="text-sm text-gray-500">{formatDate(date, "es-ES")}</span>
                </div>

                <StarRating rating={rating} />

                <p className="text-gray-700 text-sm mt-2">{comment}</p>
            </div>
        </div>
    );
};

export default ReviewProfile;

