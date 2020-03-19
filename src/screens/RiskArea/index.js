import React, { useState, useEffect } from "react";
import HeatMap from "../../components/HeatMap";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Info from "@material-ui/icons/Info";
import Location from "@material-ui/icons/LocationOn";
import { getAddressInfo } from "./services";

export default function RiskArea() {
  const [clickedPoint, setClickedPoint] = useState("Nenhum ponto clicado!");
  const mapClick = async latlng => {
    setClickedPoint("Carregando informações sobre o local...");
    console.log(latlng);
    const response = await getAddressInfo(latlng[0], latlng[1]);
    setClickedPoint(response.display_name);
    console.log(response);
  };
  return (
    <>
      <Grid item xs={12} sm={8}>
        <HeatMap onClick={mapClick} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper
          elevation={5}
          style={{
            backgroundColor: "#6d6a6a",
            color: "white",
            margin: 10,
            padding: 0
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Info></Info>
            <h3 style={{ textAlign: "justify" }}>
              Mapa de calor baseado nos{" "}
              <span style={{ color: "#FF415B" }}>GRUPO 1</span> e{" "}
              <span style={{ color: "#FFCE00" }}>GRUPO 2</span>, para obter
              endereço de alguma area, basta clicar!
            </h3>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Location></Location>
            <p style={{ textAlign: "justify" }}>{clickedPoint}</p>
          </Grid>
        </Paper>
        <Paper
          elevation={5}
          style={{
            backgroundColor: "#6d6a6a",
            color: "white",
            margin: 10,
            padding: 0
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <h3 style={{ textAlign: "justify" }}>Escala de cores do mapa</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Grid xs={2} sm={2}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "red",
                  borderRadius: 50,
                  margin: 10
                }}
              ></div>
            </Grid>
            <Grid xs={10} sm={10}>
              <p>Representa mais de 500 casos na Área</p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Grid xs={2} sm={2}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#ff9000",
                  borderRadius: 50,
                  margin: 10
                }}
              ></div>
            </Grid>
            <Grid xs={10} sm={10}>
              <p>Representa entre 150 e 500 casos na Área</p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Grid xs={2} sm={2}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "yellow",
                  borderRadius: 50,
                  margin: 10
                }}
              ></div>
            </Grid>
            <Grid xs={10} sm={10}>
              <p>Representa entre 30 e 150 casos na Área</p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Grid xs={2} sm={2}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "green",
                  borderRadius: 50,
                  margin: 10
                }}
              ></div>
            </Grid>
            <Grid xs={10} sm={10}>
              <p>Representa menso de 30 casos na Área</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
