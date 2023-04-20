import React from "react";
import "../style/location.css";
const Location = () => {
  return (
    <div className="location">
      <h1>121 Einstein Loop North, The Bronx, Bronx, NY, USA</h1>
      <div className="location-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.3343153002443!2d-73.82509812493417!3d40.864536928264876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28cbc17f4a0c3%3A0x9ae0f1e804a817d!2s121%20Einstein%20Loop%20N%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2seg!4v1681959383259!5m2!1sen!2seg"
          width="100%"
          height="450"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
