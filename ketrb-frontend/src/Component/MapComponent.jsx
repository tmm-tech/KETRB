// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapComponent = () => {
  // Coordinates for National Bank Building, Harambee Avenue, Nairobi
  const position = [-1.285280, 36.823650];

  return (
    <MapContainer center={position} zoom={15} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          National Bank Building<br />
          11th Floor, Harambee Avenue<br />
          Nairobi, Kenya
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
