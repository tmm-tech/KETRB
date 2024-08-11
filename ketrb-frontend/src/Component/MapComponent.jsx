import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import icon from "../Asset/icons/marker-icon.png";
import L from 'leaflet';
// Define the icon for the marker
const markerIcon = new L.Icon({
  iconUrl: {icon}, 
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
});

const MapComponent = () => {
  const position = [-1.28333, 36.81667]; // Coordinates for National Bank Building

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>National Bank Building, Nairobi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
