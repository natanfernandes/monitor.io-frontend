import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";

export default function HeatMap(props) {
  const [map, setMap] = useState(null);
  const [mapZoom, setMapZoom] = useState(14);
  const [markerPos, setMarkerPos] = useState([0,0]);

  useEffect(() => {
    renderRandomMarkers();
    return () => {
      cleanData();
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

  const mapClick = e => {
    if(map.leafletElement.getZoom() <= 14){
      map.leafletElement.setZoom(14);
      setMapZoom(14);
    } else if (map.leafletElement.getZoom() > 14) {
      map.leafletElement.setZoom(map.leafletElement.getZoom());
      setMapZoom(map.leafletElement.getZoom());
    }
    const {lat, lng} = e.latlng;
    setMarkerPos([lat, lng])
    props.onClick([lat, lng]);
  };

  const position = [-5.830984, -35.205123];
  const returnDataArray = () => {
    let arr = [];
    grupos.map(grupo => {
      grupo.data.map(user => {
        if (grupo.id === 1 || grupo.id === 2) arr.push(user.position);
      });
    });
    return arr;
  };
  return (
    <Map
      ref={ref => {
        setMap(ref);
      }}
      style={{ margin: 10 }}
      center={position}
      zoom={mapZoom}
      onClick={mapClick}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={markerPos}></Marker>
      <HeatmapLayer
        // fitBoundsOnLoad
        // fitBoundsOnUpdate
        points={returnDataArray()}
        latitudeExtractor={m => m[0]}
        longitudeExtractor={m => m[1]}
        intensityExtractor={m => parseFloat(3)}
      />
    </Map>
  );
}
