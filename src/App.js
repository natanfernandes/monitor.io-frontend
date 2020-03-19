import React, { useState, useEffect } from "react";
import { StoreProvider, createStore, useStoreActions } from "easy-peasy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomePage from "./screens/Home";
import RiskArea from "./screens/RiskArea";
import Header from "./components/Header";
import model from "./model";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Grid container spacing={3}>
          <Header />
          <Switch>
            <Route exact path="/risk-area" component={RiskArea} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Grid>
      </Router>
    </StoreProvider>
  );
}

export default App;
