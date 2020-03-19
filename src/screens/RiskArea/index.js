import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import HeatMap from "../../components/HeatMap";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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

export default function RiskArea() {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={8}>
        <HeatMap />
      </Grid>
    </>
  );
}
