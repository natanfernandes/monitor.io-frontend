import React, { useState, useEffect } from "react";
import HeatMap from "../../components/HeatMap";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Info from "@material-ui/icons/Info";
import Location from "@material-ui/icons/LocationOn";
import { getAddressInfo } from './services';

export default function RiskArea() {
  const [clickedPoint, setClickedPoint] = useState('Nenhum ponto clicado!')
  const [clickedPointLatLng, setClickedPointLatLng] = useState(null)
  const mapClick = async (latlng) => {
    setClickedPoint('Carregando informações sobre o local...')
    console.log(latlng)
    setClickedPointLatLng(latlng)
    const response = await getAddressInfo(latlng[0],latlng[1])
    setClickedPoint(response.display_name)
    console.log(response)
  }
  return (
    <>
      <Grid item xs={12} sm={8}>
        <HeatMap onClick={mapClick} />
      </Grid>
       <Grid item xs={12} sm={4}>
         <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white", margin:10, padding:0 }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ padding: 10 }}
            >
            <Info></Info>
            <h3 style={{textAlign:'justify'}}>
            
            Mapa de calor baseado nos <span style={{color:'#FF415B'}}>GRUPO 1</span> e <span style={{color:'#FFCE00'}}>GRUPO 2</span>,
            para obter endereço de alguma area, basta clicar!</h3>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{padding:10}}
            >
            <Location></Location>
            <p style={{textAlign:'justify'}}>
              {clickedPoint}
            </p>
            </Grid>
          </Paper>
      </Grid>
    </>
  );
}
