import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Person from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Forum from "@material-ui/icons/Forum";
import Warning from "@material-ui/icons/Warning";
import Announcement from "@material-ui/icons/Announcement";
import NewReleases from "@material-ui/icons/NewReleases";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    color: "white"
  }
}));

export default function AlertsAndMessages() {
  const [clickedPoint, setClickedPoint] = useState("Nenhum ponto clicado!");
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6}>
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
            style={{ padding: 10, margin: 0, paddingBottom: 0 }}
          >
            <Announcement></Announcement>
            <h3 style={{ textAlign: "justify" }}>Alertas</h3>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10, marginTop: 0, paddingTop: 0 }}
          >
            <p style={{ textAlign: "justify" }}>
              Aqui é possível enviar alertas para grupos específicos, usuários
              de CEP's e áreas específicas que possam ser zona de risco!
            </p>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <Button
              variant="contained"
              color="default"
              startIcon={<NewReleases />}
            >
              ENVIAR ALERTA
            </Button>
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
            <h3 style={{ textAlign: "justify" }}>Últimos alertas enviados</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Warning />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Alerta ao Grupo 1"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Warning />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Alerta ao Bairro X"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Warning />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Alerta Geral"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
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
            style={{ padding: 10, marginTop: 0, paddingBottom: 0 }}
          >
            <Forum></Forum>
            <h3 style={{ textAlign: "justify" }}>Mensagens</h3>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10, marginTop: 0, paddingTop: 0 }}
          >
            <p style={{ textAlign: "justify" }}>
              Aqui é possível enviar mensagens para usuários específicos,
              unidades de saúde e agentes de saúde!
            </p>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10}}
          >
            <Button
              variant="contained"
              color="default"
              startIcon={<Send />}
            >
              ENVIAR MENSAGEM
            </Button>
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
            <h3 style={{ textAlign: "justify" }}>Mensagens recebidas</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Usuário 1"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Usuário 2"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Usuário 3"
                  secondary="Corpo da mensagem"
                />
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
