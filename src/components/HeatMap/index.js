import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import L from "leaflet";

export default function CityMap() {
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
    for (let i = 0; i < 1500; i++) {
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
  
  const position = [-5.830984, -35.205123];
    const returnDataArray = () => {
        let arr = []
        grupos.map(grupo => {
            grupo.data.map(user =>{
                if(grupo.id === 1 || grupo.id === 2 )
                    arr.push(user.position)
            })
        })
        console.log(arr)
        return arr
    }
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
      <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={returnDataArray()}
            latitudeExtractor={m => m[0]}
            longitudeExtractor={m => m[1]}
            intensityExtractor={m => parseFloat(3)} />
    </Map>
  );
}
