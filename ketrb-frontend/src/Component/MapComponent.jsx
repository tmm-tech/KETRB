import React from "react";
import { MapContainer,TileLayer,Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../Asset/icons/marker-icon.png";
import "./MapComponent.css";

// Define the icon for the marker
const markerIcon = new L.Icon({
  iconUrl: iconUrl, // Reference the imported icon directly
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const position = [1.28868, 36.82543]; // Coordinates for National Bank Building

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%"}}
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
