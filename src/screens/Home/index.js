import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import CityMap from "../../components/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data3 = [
  { name: "15/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "16/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "17/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "18/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "19/03", value: Math.floor(Math.random() * (500 - 0) + 10) }
];

const data4 = [
  { name: "15/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "16/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "17/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "18/03", value: Math.floor(Math.random() * (500 - 0) + 10) },
  { name: "19/03", value: Math.floor(Math.random() * (500 - 0) + 10) }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperGroup1: {
    textAlign: "center",
    padding: 0,
    color: theme.palette.text.primary,
    backgroundColor: "#FF415B",
    margin: 10
  },
  paperGroup2: {
    textAlign: "center",
    padding: 0,
    color: theme.palette.text.primary,
    backgroundColor: "#FFCE00",
    margin: 10
  },
  paperGroup3: {
    textAlign: "center",
    padding: 0,
    color: theme.palette.text.primary,
    backgroundColor: "#4949E7",
    margin: 10
  },
  paperGroup4: {
    textAlign: "center",
    padding: 0,
    color: theme.palette.text.primary,
    backgroundColor: "#69E781",
    margin: 10
  }
}));

export default function Home() {
  useEffect(() => {
    genGroupOneData();
    genGroupTwoData();
  }, []);
  const classes = useStyles();
  const [cluster, setCluster] = useState(true);

  const handleChangeCluster = () => {
    setCluster(!cluster);
    setMapCluster()
  };
  // data group one
  const [dataGroupOne, setDataGroupOne] = useState([]);
  const [dataPredGroupOne, setDataPredGroupOne] = useState([]);
  // data group Two
  const [dataGroupTwo, setDataGroupTwo] = useState([]);
  const [dataPredGroupTwo, setDataPredGroupTwo] = useState([]);
  // data group Three
  const [dataGroupThree, setDataGroupThree] = useState([]);
  // data group Four
  const [dataGroupFour, setDataGroupFour] = useState([]);

  const grupos = useStoreState(state => state.grupos);
  const setGroupVisible = useStoreActions(actions => actions.setGroupVisible);
 const setMapCluster = useStoreActions(actions => actions.setMapCluster);
  const genGroupOneData = () => {
    const data = [
      { name: "15/03", value: 10 },
      { name: "16/03", value: 12 },
      { name: "17/03", value: 16 },
      { name: "18/03", value: 19 },
      { name: "19/03", value: 22 }
      // { name: "20/03", value: 20 },
      // { name: "21/03", value: 20 },
    ];
    // formula para prever 5 dias a frente
    // formula = qtd casos atuais + (qtd do dia*qtd aumentou do dia passado)/qtd dias (5)
    let qtdAtual = 20;

    const dataPred = [
      { name: "20/03", value: 0 },
      { name: "21/03", value: 0 },
      { name: "22/03", value: 0 },
      { name: "23/03", value: 0 },
      { name: "24/03", value: 0 }
      // { name: "25/03", value: 0},
      // { name: "26/03", value: 0},
    ];
    data.map((element, i) => {
      console.log(i);
      let lastValue = 0;
      let dif = 0;
      let value = 0;
      if (i === 0) {
        lastValue = 1;
        dif = 1;
        value = Math.floor(qtdAtual + (data[0].value * dif) / 5);
      } else {
        lastValue = data[i - 1].value;
        dif = element.value - lastValue;
        value = Math.floor(qtdAtual + (dataPred[i - 1].value * dif) / 5);
      }
      dataPred[i].value = value;
    });

    setDataGroupOne(data);
    setDataPredGroupOne(dataPred);
  };
  const genGroupTwoData = () => {
    const data = [
      { name: "15/03", value: 30 },
      { name: "16/03", value: 45 },
      { name: "17/03", value: 63 },
      { name: "18/03", value: 68 },
      { name: "19/03", value: 79 }
      // { name: "20/03", value: 81 },
      // { name: "21/03", value: 83 },
    ];
    // formula para prever 5 dias a frente
    // formula = qtd casos atuais + (qtd do dia*qtd aumentou do dia passado)/qtd dias (5)
    let qtdAtual = 79;

    let dataPred = [
      { name: "20/03", value: 0 },
      { name: "21/03", value: 0 },
      { name: "22/03", value: 0 },
      { name: "23/03", value: 0 },
      { name: "24/03", value: 0 }
      // { name: "25/03", value: 0 },
      // { name: "26/03", value: 0 }
    ];
    data.map((element, i) => {
      console.log(i);
      let lastValue = 0;
      let dif = 0;
      let value = 0;
      if (i === 0) {
        lastValue = 1;
        dif = 1;
        value = Math.floor(qtdAtual + (data[0].value * dif) / 5);
      } else {
        lastValue = data[i - 1].value;
        dif = element.value - lastValue;
        value = Math.floor(qtdAtual + (dataPred[i - 1].value * dif) / 5);
      }
      dataPred[i].value = value;
    });

    setDataGroupTwo(data);
    setDataPredGroupTwo(dataPred);
  };

  const identifyGroupClassName = grupo => {
    if (grupo.id === 1) {
      return classes.paperGroup1;
    } else if (grupo.id === 2) {
      return classes.paperGroup2;
    } else if (grupo.id === 3) {
      return classes.paperGroup3;
    } else {
      return classes.paperGroup4;
    }
  };
  return (
    <>
      <Grid item xs={12} sm={8}>
        <CityMap />
        <FormGroup row style={{margin:10,color:'white'}}>
          <FormControlLabel
            control={
              <Switch
                checked={cluster}
                onChange={handleChangeCluster}
                name="checkedB"
                color="secondary"
              />
            }
            label="Juntar pontos próximos no mapa?"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={4}>
        {grupos.map(grupo => (
          <Paper elevation={5} className={identifyGroupClassName(grupo)}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ padding: 0 }}
            >
              <h3>{grupo.name}</h3>
            </Grid>
            <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <p style={{ margin: 0 }}>{grupo.description}</p>
                <h1 style={{ margin: 0 }}>{grupo.qtd}</h1>
              </Grid>
              <Grid
                container
                xs={12}
                sm={12}
                direction="row"
                justify="center"
                alignItems="center"
                style={{ margin: 5 }}
              >
                {grupo.visible ? (
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<VisibilityOff />}
                    onClick={() => setGroupVisible(grupo.id)}
                  >
                    RETIRAR DO MAPA
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<Visibility />}
                    onClick={() => setGroupVisible(grupo.id)}
                  >
                    MOSTRAR NO MAPA
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
      <Grid container spacing={3} style={{ margin: 10 }}>
        <Grid item xs={12} sm={12}>
          <h1 style={{ color: "white" }}>Gráficos dos dados atuais</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={dataGroupOne}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="CASOS CONFIRMADOS"
                  dataKey="value"
                  stroke="#FF415B"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={dataGroupTwo}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="APRESENTAM TODOS SINTOMAS"
                  dataKey="value"
                  stroke="#FFCE00"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ margin: 10 }}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={data3}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="APRESENTAM ALGUNS SINTOMAS"
                  dataKey="value"
                  stroke="#4949E7"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={data4}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="SEM SINTOMAS"
                  dataKey="value"
                  stroke="#69E781"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ margin: 10 }}>
        <Grid item xs={12} sm={12}>
          <h1 style={{ color: "white" }}>Predições</h1>
          <p style={{ color: "white" }}>
            A partir dos dados dias anteriores e baseado na curva de crescimento
            apresentado pelo COVID-19, são feitas as previsões de crescimentos
            para 5 dias a frente para cada grupo
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={dataPredGroupOne}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="PREDIÇÃO PARA O GRUPO 1 - CASOS CONFIRMADOS"
                  dataKey="value"
                  stroke="#FF415B"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={dataPredGroupTwo}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Line
                  type="monotone"
                  name="PREDIÇÃO PARA O GRUPO 2 - APRESENTAM TODOS SINTOMAS"
                  dataKey="value"
                  stroke="#FFCE00"
                  strokeWidth="4"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
