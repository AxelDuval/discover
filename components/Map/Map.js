import React, { useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Script from "next/script";

const containerStyle = {
  width: '400px',
  height: '400px'
};

let center = {
  lat: -3.945,
  lng: -38.523
};

export default function Map (props) {
  // console.log(props.location)
const lat = props.lat;
const lng = props.lng;
console.log(lat, lng)
center = {
  lat,
  lng
}
  // center = props.location
   
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD-SfTESDv8RUOrHQdjzFxmv6wOUnzRhrk"
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
      zoom={20}
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
