import React, { useState, useEffect } from 'react';
import './Location.css';

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        }, (error) => {
          console.error("Error getting location:", error);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div className="location-container">
      <h2>My Current Location</h2>
      {location ? (
        <div className="location-info">
          <p><strong>Latitude:</strong> {location.latitude}</p>
          <p><strong>Longitude:</strong> {location.longitude}</p>
          <a href={`https://maps.google.com?q=${location.latitude},${location.longitude}`} className="map-link">View on Map</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Location;
