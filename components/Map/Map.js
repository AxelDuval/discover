import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: 'full',
  height: '400px'
};

let center = {
  lat: 49.3694627,
  lng: 1.2399207
};

export default function Map (props) {
const lat = props.lat;
const lng = props.lng;
console.log(lat, lng)
center = {
  lat,
  lng
}
   
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
   
    
      

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
      position={center}
      />
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
  };
  

        {/* <Script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-SfTESDv8RUOrHQdjzFxmv6wOUnzRhrk" /> */}
