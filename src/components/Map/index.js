import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

export default function CityMap(props) {
   useEffect(() => {
    renderRandomMarkers();
     return () => {
       cleanData()
    };
  }, []);

  const renderRandomMarkers = () => {
    let latMin = -5.779283;
    let latMax = -5.841105;
    let lonMin = -35.199209;
    let lonMax = -35.238331;
    for (let i = 0; i < 1000; i++) {
      let rLat = Math.random() * (latMax - latMin) + latMin;
      let rLon = Math.random() * (lonMax - lonMin) + lonMin;
      let user = {
        position: [rLat, rLon],
        group: Math.floor(Math.random() * 4) + 1
      };
      addDataToGroup(user);
    }
  };
  const cleanData = useStoreActions(actions => actions.cleanData);
  const addDataToGroup = useStoreActions(actions => actions.addDataToGroup);
  const grupos = useStoreState(state => state.grupos);

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
// const createClusterCustomIcon = function (cluster) {
//   console.log(cluster)
//   return L.divIcon({
//     html: `<div>${cluster.getChildCount()}</div>`,
//     className: 'marker-cluster-custom',
//     iconSize: L.point(40, 40, true),
//   });
// }

  const position = [-5.830984, -35.205123];

  return (
    <Map
      style={{ margin: 10 }}
      className="markercluster-map"
      center={position}
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup >
       {grupos.map(grupo => {
         if(grupo.visible && grupo.data.length !== 0){
          return grupo.data.map(user => 
            <Marker position={user.position} icon={getIconMarker(user)} />
          )
         }
         return null
       }) }
      </MarkerClusterGroup>
    </Map>
  );
}
