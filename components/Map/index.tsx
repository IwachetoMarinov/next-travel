"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface IProps {
  data: {
    lat: number;
    lng: number;
  };
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMapComponent = ({ data }: IProps) => {
  const center = {
    lat: data?.lat || 37.7749,
    lng: data?.lng || -122.4194,
  };

  console.log("GoogleMapComponent", center);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
