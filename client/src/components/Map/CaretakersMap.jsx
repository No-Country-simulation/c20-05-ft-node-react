import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

const CaretakersMap = ({ caretakersList }) => {
  const customDivIcon = (price) =>  new L.DivIcon({
    html: `<div class="bg-btn text-white text-base font-semibold size-fit py-2 px-4 rounded-full shadow-md">$${price}</div>`,
    className: 'custom-div-icon', // Clase CSS para el contenedor
    iconSize: [30, 42], // Tamaño del ícono (puedes ajustarlo)
    iconAnchor: [15, 42], // Punto del ícono que apunta a la ubicación en el mapa
    popupAnchor: [0, -42], // Posición del popup en relación al ícono
  })

  return (
    <MapContainer className='z-10 fixed top-0 left-0' center={[-34.614665845310036, -58.472440029009526]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {
        caretakersList.map((caretaker, index) => {
          return (
            <Marker key={index} position={caretaker.coords} icon={customDivIcon(caretaker.price)}>
              <Popup>
                <div className='relative w-[300px] mx-auto'>
                  <div className='relative'>
                    <img className='w-full h-[180px] object-cover rounded-lg' src={caretaker.photoCaretaker} alt={caretaker.name} />
                    <img className='absolute bottom-2 right-2 size-[40px] ring-2 ring-white object-cover rounded-full' src={caretaker.photoProfileCaretaker} alt={caretaker.name} />
                  </div>
                  <div className='flex flex-col gap-2 p-2'>
                    <div className='flex justify-between font-medium text-base'>
                      <h4>{caretaker.nameCaretaker}</h4>
                      <span className='font-bold'>${caretaker.price}</span>
                    </div>
                    <span className='line-clamp-2'>{caretaker.description}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })
      }
    </MapContainer>
  )
}

export default CaretakersMap