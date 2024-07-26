// src/MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// Function to fetch geocoding data using axios
const geocodeAddress = async (address) => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        format: 'json',
        q: address,
      }
    });
    const data = response.data;
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }
    throw new Error('Address not found');
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    throw error;
  }
};

const MapComponent = () => {
  // Default to Ondo coordinates
  const [position, setPosition] = useState([7.100005, 4.841694]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch coordinates for the new address
    geocodeAddress('Aiyegbaju Street, behind Iroko market, Igbara Oke, Ondo State')
      .then(coords => {
        setPosition([coords.lat, coords.lon]);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={position} zoom={15} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Aiyegbaju Street, behind Iroko market, Igbara Oke, Ondo State
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
