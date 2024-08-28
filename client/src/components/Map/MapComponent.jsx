import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { reviewsData } from '../../assets/other-assets/mocks/mockReviews';
import CardReviewHome from '../CardReviewHome/CardReviewHome';
import { caretakersMapMock } from '../../assets/other-assets/mocks/caretakersMapMock'

const MapComponent = () => {
  // https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
  // https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
  // https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

  const customDivIcon = new L.DivIcon({
    html: '<div class="bg-black text-white text-base font-semibold size-fit py-2 px-4 rounded-full shadow-md">$400</div>',
    className: 'custom-div-icon', // Clase CSS para el contenedor
    iconSize: [30, 42], // Tamaño del ícono (puedes ajustarlo)
    iconAnchor: [15, 42], // Punto del ícono que apunta a la ubicación en el mapa
    popupAnchor: [0, -42], // Posición del popup en relación al ícono
  });

  function LocationMarker() {
    useMapEvents({
      click(e) {
        console.log('e.latlng', e.latlng)
      },
    })
  }

  return (
    <MapContainer center={[-34.614665845310036, -58.472440029009526]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      {
        caretakersMapMock.map((caretaker, index) => {
          return (
            <Marker key={index} position={caretaker.coords} icon={customDivIcon}>
              <Popup>
                <CardReviewHome review={reviewsData[index]} />
              </Popup>
            </Marker>
          )
        })
      }
      {/* <Marker position={[53.505, -0.05]}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
      <Marker position={[50.505, -0.01]}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default MapComponent