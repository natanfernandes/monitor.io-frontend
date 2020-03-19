import React from "react";
import { StoreProvider, createStore } from "easy-peasy";
import Grid from "@material-ui/core/Grid";
import HomePage from './screens/Home';
import Header from './components/Header';
import model from './model';
import "./App.css";

const store = createStore(model)

function App() {
  return (
    <StoreProvider store={store}>
      <div>
        <Grid container spacing={3}>
          <Header />
          <HomePage />
        </Grid>
      </div>
    </StoreProvider>
  );
}


export default App;
