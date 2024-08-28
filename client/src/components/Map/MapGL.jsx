import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapGL = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: "100%",
    height: "100vh"
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
};

export default MapGL