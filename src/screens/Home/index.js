import React from "react";
import { useStoreState } from "easy-peasy";
import CityMap from "../../components/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
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

const data = [
  { name: "15/03", value: 400 },
  { name: "16/03", value: 4660 },
  { name: "17/03", value: 4260 },
  { name: "18/03", value: 6660 }
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
  const classes = useStyles();
  const grupos = useStoreState(state => state.grupos);
  console.log(grupos);

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
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<Visibility />}
                >
                  MOSTRAR NO MAPA
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
      <Grid container spacing={3} style={{ margin: 10 }}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={5}
            style={{ backgroundColor: "#6d6a6a", color: "white" }}
          >
            <ResponsiveContainer width="100%" aspect={2.0 / 1.0}>
              <LineChart
                data={data}
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
                data={data}
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
                data={data}
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
                data={data}
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
    </>
  );
}
