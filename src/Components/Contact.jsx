import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 50.4501, // замените на ваши координаты
  lng: 30.5234, // замените на ваши координаты
};

export const Contact = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDD8W6ifHIOtMN9TBmXpY4P9cCnnl5XoRc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
