import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";

import "@maptiler/sdk/dist/maptiler-sdk.css";
import { set } from "date-fns";

const Map = ({coordinates}) => {
  const [coords, setCoords] = useState([72.5713621, 23.022505]);
  useEffect(() => {
    console.log(coordinates);
    if(coordinates.length === 0){
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setCoords([longitude, latitude]);
      });
    }else setCoords(coordinates);
  }, [coordinates]);

  const mapContainer = useRef(null);
  const map = useRef(null);

  const [zoom] = useState(14);
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    // if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: coords,
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat(coords)
      .addTo(map.current);
  }, [zoom, coords]);

  return (
    <div ref={mapContainer} className="map absolute w-full h-full rounded-lg" />
  );
};

export default Map;
