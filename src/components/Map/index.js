import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, LayerGroup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

export default function CityMap() {
  const [positionsG1, setPositionsG1] = useState([]);
  const [positionsG2, setPositionsG2] = useState([]);
  const [positionsG3, setPositionsG3] = useState([]);
  const [positionsG4, setPositionsG4] = useState([]);
  const [showLayerGroup1, setShowLayerGroup1] = useState(false);
  const [showLayerGroup2, setShowLayerGroup2] = useState(false);
  const [showLayerGroup3, setShowLayerGroup3] = useState(false);
  const [showLayerGroup4, setShowLayerGroup4] = useState(false);
  const [mapRef, setMapRef] = useState(null);

  useEffect(() => {
    renderRandomMarkers();
  }, []);

  const iconG1 = new L.Icon({
    iconUrl: require("../../assets/icons/marker-g1.svg"),
    iconRetinaUrl: require("../../assets/icons/marker-g1.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
  });

  const iconG2 = new L.Icon({
    iconUrl: require("../../assets/icons/marker-g2.svg"),
    iconRetinaUrl: require("../../assets/icons/marker-g2.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
  });

  const iconG3 = new L.Icon({
    iconUrl: require("../../assets/icons/marker-g3.svg"),
    iconRetinaUrl: require("../../assets/icons/marker-g3.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
  });

  const iconG4 = new L.Icon({
    iconUrl: require("../../assets/icons/marker-g4.svg"),
    iconRetinaUrl: require("../../assets/icons/marker-g4.svg"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
  });

  const getIconMarker = user => {
    if (user.group === 1) {
      return iconG1;
    } else if (user.group === 2) {
      return iconG2;
    } else if (user.group === 3) {
      return iconG3;
    } else {
      return iconG4;
    }
  };

  const renderRandomMarkers = () => {
    let latMin = -5.779283;
    let latMax = -5.841105;
    let lonMin = -35.199209;
    let lonMax = -35.238331;
    for (let i = 0; i < 500; i++) {
      let rLat = Math.random() * (latMax - latMin) + latMin;
      let rLon = Math.random() * (lonMax - lonMin) + lonMin;
      let user = {
        position: [rLat, rLon],
        group: Math.floor(Math.random() * 4) + 1
      };
      if (user.group === 1) {
        setPositionsG1(positionsG1 => [...positionsG1, user]);
      } else if (user.group === 2) {
        setPositionsG2(positionsG2 => [...positionsG2, user]);
      } else if (user.group === 3) {
        setPositionsG3(positionsG3 => [...positionsG3, user]);
      } else {
        setPositionsG4(positionsG4 => [...positionsG4, user]);
      }
    }
  };

  const position = [-5.830984, -35.205123];

  return (
    <Map
      style={{ margin: 10 }}
      className="markercluster-map"
      center={position}
      zoom={10}
      ref={(ref) => setMapRef(ref)}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup>
       {showLayerGroup1 ?  
        <LayerGroup>
          {positionsG1.map(user => (
            <Marker position={user.position} icon={getIconMarker(user)} />
          ))}
        </LayerGroup>: null}
      </MarkerClusterGroup>
    </Map>
  );
}
