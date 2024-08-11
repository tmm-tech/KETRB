import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';
const MapComponent = () => {
  const position = [ -1.28333, 36.81667 ]; // Coordinates for National Bank Building

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>National Bank Building, Nairobi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
