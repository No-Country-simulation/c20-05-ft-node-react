import InfoProfile from "../../components/ContainerInfoProfile/InfoProfile";
import CarruselPhotosProfile from "../../components/ContainerInfoProfile/CarruselPhotosProfile";
import PetsPreferenceCaretaker from "../../components/AboutCaretakerProfile/petsPreferenceCaretaker";
import CaretakerInfoBox from "../../components/CaretakerInfoBox/CaretakerInfoBox";
import CaretakerDateLocationInfo from "../../components/CaretakerInfoBox/CaretakerDateLocationInfo";

const DogCaretakerProfile = () => {

    return (
        <div className="h-max px-4 pt-4 pb-8 md:px-20">
            <section className="h-max flex flex-col pb-2 md:min-h-dvh [&_div]:flex md:[&>div]:h-[50%] gap-6 ">
                <div className="h-max gap-4 sm:h-dvh md:gap-4 flex-col-reverse md:flex-row md:[&>div]:w-[50%]  md:[&>div]:pb-2" >
                    <CarruselPhotosProfile />
                    <InfoProfile />
                </div>
                <PetsPreferenceCaretaker />
            </section>
            <section className="h-max flex flex-col md:flex-row pb-2 md:min-h-dvh [&>div]:flex md:[&>div]:w-[50%] gap-6 ">
                <CaretakerInfoBox />
                <CaretakerDateLocationInfo />
            </section >
        </div >
    );
};

export default DogCaretakerProfile;
