import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GroupIcon from "@material-ui/icons/Group";
import Home from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    if(props.location.pathname === '/'){
      setValue(2)
    } else if(props.location.pathname === '/risk-area'){
      setValue(3)
    } else {
      setValue(0)
    }
  })
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        sm={12}
      >
        <img src={require("../../assets/images/coronavirus.png")} width="50" />
        <h1 style={{ fontFamily: "Arvo", color: "white", marginLeft: 10 }}>
          {" "}
          Monitor.io
        </h1>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        sm={12}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{
            backgroundColor: "transparent",
            margin: 15,
            fontFamily: "Arvo"
          }}
        >
          <BottomNavigationAction
            label="Grupos de Risco"
            component={Link}
            to="/risk-groups"
            style={{ textAlign: "center" }}
            icon={<GroupIcon style={{ fontSize: 40 }} />}
          />
          } />
          <BottomNavigationAction
            label="Página Principal"
            component={Link}
            to="/"
            style={{ textAlign: "center" }}
            icon={<Home style={{ fontSize: 40 }} />}
          />
          <BottomNavigationAction
            label="Lugares de Risco"
            component={Link}
            to="/risk-area"
            style={{ textAlign: "center" }}
            icon={<LocationOnIcon style={{ fontSize: 40 }} />}
          />
          } />
        </BottomNavigation>
      </Grid>
    </>
  );
}
export default withRouter(Header);