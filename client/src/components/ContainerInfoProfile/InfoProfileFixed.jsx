import { useState, useEffect } from "react";
import { caretakerProfileMock } from "../../assets/other-assets/mocks/mockForProfile";
import ButtonSubmit from "../../components/Global/ButtonSubmit";
import ContainerReviews from "../CardReviewHome/ContainerReviewProfile";

const InfoProfileFixed = () => {
  const { first_Name, last_Name, location, reviews, serviceType, photos } =
    caretakerProfileMock;
  const [openReviews, setOpenReviews] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const profileElement = document.getElementById("caretakerProfile");

      if (offset > profileElement.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="caretakerProfile"
      className={`bg-red-400 flex h-24 p-2 pr-2 md:h-24 justify-between shadow-lg ${
        isSticky ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      <div className="flex gap-1 md:gap-4">
        <div className="w-auto flex justify-center items-center">
          <img
            src={photos.profilePhoto}
            alt={first_Name}
            className="rounded-full size-16 object-cover md:size-20"
          />
        </div>
        <div className="w-auto py-1 flex flex-col justify-center [&_p]:m-0 [&_p]:text-sm sm:[&_p]:text-base">
          <p className="font-semibold md:font-bold">
            {first_Name} {last_Name}
          </p>
          <p>
            {location.city}, {location.country}
          </p>
          <button
            className="cursor-pointer w-20 rounded-md mt-1 bg-blue-500 text-white text-sm md:text-base md:w-full"
            onClick={() => setOpenReviews(true)}
          >
            Reseñas
          </button>
          {openReviews && (
            <ContainerReviews
              reviews={reviews}
              onClose={() => setOpenReviews(false)}
            />
          )}
        </div>
      </div>
      <div className="flex justify-end items-center">
        <ButtonSubmit children={"Contactar"} extraClassName={"w-24 px-2 md:w-40"} />
      </div>
    </div>
  );
};
export default InfoProfileFixed;