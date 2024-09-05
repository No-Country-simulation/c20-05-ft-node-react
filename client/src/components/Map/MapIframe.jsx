import { BASE_URL_GOOGLE_MAPS } from "../../assets/other-assets/constants/map-resources";

const MapIframe = ({ coordinates }) => {

    const googleMapsUrl = `${BASE_URL_GOOGLE_MAPS}${coordinates}&z=15&output=embed`;

    return (
        <div className='size-full' >
            <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

export default MapIframe;
