import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { reviewsData } from '../../assets/other-assets/mocks/mockReviews';
import CardReviewHome from '../CardReviewHome/CardReviewHome';
import { caretakersMapMock } from '../../assets/other-assets/mocks/caretakersMapMock'
import { useState } from 'react';
import getCoordsByAddress from '../../utils/functions/getCoordsByAddress';
import getAddressByCoords from '../../utils/functions/getAddresssByCoords';

const TestMap = () => {
  const [newLocation, setNewLocation] = useState(null);
  const [type, setType] = useState('')

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

  const handleClickSearch = async () => {
    const [latitud, longitud] = type.replace(/ /g, '').split(',')
    const getAddress = await getAddressByCoords({ lat: latitud, lon: longitud })
    console.log('getAddress', getAddress)
    const { country, city, road, house_number } = getAddress
    // console.log('type', type)
    const { lat, lon } = await getCoordsByAddress(`${country}, ${city}, ${road}, ${house_number}`)
    console.log('lat', lat)
    console.log('lon', lon)
    setNewLocation([lat, lon])
  }

  return (
    <>
    <div className='flex justify-center w-fit gap-2 absolute top-10 left-0 right-0 mx-auto shadow-md z-30 h-fit'>
      <input className='w-[300px] border-gray-900 border-2 rounded-lg px-2' type="text" onChange={(e) => setType(e.target.value)} value={type} placeholder='lat, lon' />
      <button className='bg-black text-white p-2 rounded-lg' onClick={handleClickSearch}>Buscar</button>
    </div>
      <MapContainer className='z-10 relative' center={[-34.614665845310036, -58.472440029009526]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
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
        {
          newLocation && (
            <Marker position={newLocation}>
            </Marker>
          )
        }
      </MapContainer>
    </>
  );
}

export default TestMap