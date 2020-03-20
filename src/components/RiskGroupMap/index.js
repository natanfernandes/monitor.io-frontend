import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function RiskGroupMap(props) {
  const cleanData = useStoreActions(actions => actions.cleanData);
  const addDataToGroupRisk = useStoreActions(
    actions => actions.addDataToGroupRisk
  );
  const usuariosDeRisco = useStoreState(state => state.usuariosDeRisco);
  const mapRisk = useStoreState(state => state.mapRisk);
  useEffect(() => {
    renderRandomMarkers();
    return () => {
      cleanData();
    };
  }, []);

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const renderRandomMarkers = () => {
    let latMin = -5.779283;
    let latMax = -5.841105;
    let lonMin = -35.199209;
    let lonMax = -35.238331;
    for (let i = 0; i < 70; i++) {
      let rLat = Math.random() * (latMax - latMin) + latMin;
      let rLon = Math.random() * (lonMax - lonMin) + lonMin;
      let user = {
        position: [rLat, rLon],
        name: makeid(8),
        address: makeid(5),
        idade: Math.floor(Math.random() * 70) + 10,
        group: getGroup(Math.floor(Math.random() * 6) + 1)
      };
      addDataToGroupRisk(user);
    }
  };
  const getGroup = number => {
    if (number === 1) {
      return "Idoso";
    } else if (number === 2) {
      return "Diabético";
    } else if (number === 3) {
      return "Hipertenso";
    } else if (number === 4) {
      return "Insuficiência renal crônica";
    } else if (number === 5) {
      return "Doença respiratória crônica";
    } else {
      return "Doença cardiovascular";
    }
  };
  const iconG1 = new L.Icon({
    iconUrl: require("../../assets/icons/marker-risk.svg"),
    iconRetinaUrl: require("../../assets/icons/marker-risk.svg"),
    iconAnchor: null,
    popupAnchor: [1,-25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
  });

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
      center={mapRisk.center}
      zoom={mapRisk.zoomLevel}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {usuariosDeRisco.data.map(user => (
        <Marker position={user.position} icon={iconG1}>
          <Popup>
            <p style={{ fontSize: 20 }}>Nome : {user.name}</p>
            <p style={{ fontSize: 20 }}>Idade : {user.idade}</p>
            <p style={{ fontSize: 20 }}>Grupo : {user.group}</p>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}
