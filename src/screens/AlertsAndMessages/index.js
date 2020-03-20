import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Person from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Forum from "@material-ui/icons/Forum";
import CallMade from "@material-ui/icons/CallMade";
import CallReceived from "@material-ui/icons/CallReceived";
import Warning from "@material-ui/icons/Warning";
import Announcement from "@material-ui/icons/Announcement";
import NewReleases from "@material-ui/icons/NewReleases";
import Send from "@material-ui/icons/Send";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    color: "white"
  },
  formControl: {
    marginBottom: 15,
    minWidth: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const alertData = [
  {
    title: "Alerta ao Grupo 1",
    message: "corpo do alerta"
  },
  {
    title: "Alerta aos usuários da área X",
    message: "corpo do alerta"
  },
  {
    title: "Alerta Geral",
    message: "corpo do alerta"
  }
];
const messageData = [
  {
    user: "Usuario X do Grupo 1",
    message: "corpo da mensagem"
  },
  {
    user: "Agente de Saúde X",
    message: "corpo da mensagem"
  },
  {
    user: "Hospital X",
    message: "corpo da mensagem"
  }
];

const usersMsg = () => {
  let arrUsers = [];
  for (let i = 0; i < 100; i++) {
    let obj = {
      name: "Usuário " + i
    };
    arrUsers.push(obj);
  }
  return arrUsers;
};

const names = [
  "USUÁRIOS DO GRUPO 1",
  "USUÁRIOS DO GRUPO 2",
  "USUÁRIOS DO GRUPO 3",
  "USUÁRIOS DO GRUPO 4",
  "GRUPOS DE RISCO",
  "USUÁRIOS DE ÁREAS DE RISCO",
  "USUÁRIOS DE UM CEP ESPECÍFICO"
];
export default function AlertsAndMessages() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openModalMensagem, setOpenModalMensagem] = useState(false);
  const [openSnackSuccess, setOpenSnackSuccess] = useState(false);
  const [personName, setPersonName] = React.useState([]);
  const [snackSuccessMessage, setSnackSuccessMessage] = useState("");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendAlert = () => {
    setOpen(false);
    setSnackSuccessMessage("Alerta enviado com sucesso!");
    setOpenSnackSuccess(true);
  };

  const handleCloseSnackSuccess = () => {
    setOpenSnackSuccess(false);
  };

  const handleCloseModalMensagem = () => {
    setOpenModalMensagem(false);
  };
  const handleClickOpenModalMensagem = () => {
    setOpenModalMensagem(true);
  };
  const sendMensagem = () => {
    setOpenModalMensagem(false);
    setSnackSuccessMessage("Mensagem enviada com sucesso!");
    setOpenSnackSuccess(true);
  };
  const modalEnviarAlerta = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          disableBackdropClick
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enviar alerta</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para enviar um alerta escolha um o destinatário e escreve a
              mensagem a ser exibida no alerta!
            </DialogContentText>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">
                Destinatário do alerta
              </InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {names.map(name => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {personName[0] === "USUÁRIOS DE UM CEP ESPECÍFICO" ? (
              <TextField
                autoFocus
                margin="dense"
                id="alert-msg"
                label="CEP"
                type="text"
                fullWidth
              />
            ) : null}
            <TextField
              autoFocus
              margin="dense"
              id="alert-msg"
              label="Mensagem do alerta"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={sendAlert} color="primary">
              Enviar alerta
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const modalEnviarMensagem = () => {
    return (
      <div>
        <Dialog
          open={openModalMensagem}
          onClose={handleCloseModalMensagem}
          disableBackdropClick
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enviar mensagem</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para enviar uma mensagem escolha um o destinatário e escreva a
              mensagem a ser enviada!
            </DialogContentText>
            <Autocomplete
              id="combo-box-demo"
              options={usersMsg()}
              getOptionLabel={option => option.name}
              style={{ width: "100%" }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Usuários disponíveis"
                  variant="outlined"
                />
              )}
            />
            <TextField
              autoFocus
              margin="dense"
              id="alert-msg"
              label="Mensagem"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModalMensagem} color="secondary">
              Cancelar
            </Button>
            <Button onClick={sendMensagem} color="primary">
              Enviar mensagem
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  return (
    <>
      <Grid item xs={12} sm={6}>
        {modalEnviarAlerta()}
        {modalEnviarMensagem()}
        <Snackbar
          open={openSnackSuccess}
          autoHideDuration={5000}
          onClose={handleCloseSnackSuccess}
        >
          <Alert
            onClose={handleCloseSnackSuccess}
            severity="success"
            style={{ fontSize: 20 }}
          >
            {snackSuccessMessage}
          </Alert>
        </Snackbar>
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
              onClick={handleClickOpen}
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
              {alertData.map(alert => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Warning />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="body2"
                          style={{
                            color: "#FFFFFF",
                            fontSize: 19,
                            fontWeight: "bold"
                          }}
                        >
                          {alert.title}
                        </Typography>
                      }
                      secondary={
                        <Typography type="body2" style={{ color: "#FFFFFF" }}>
                          {alert.message}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider />
                </>
              ))}
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
            style={{ padding: 10 }}
          >
            <Button
              variant="contained"
              color="default"
              startIcon={<Send />}
              onClick={handleClickOpenModalMensagem}
            >
              ENVIAR MENSAGEM
            </Button>
          </Grid>
        </Paper>
        <Grid container direction="row" style={{ margin: 10 }}>
          <Grid
            item
            justify="center"
            alignItems="center"
            style={{ paddingRight: 10, margin: 0 }}
            xs={6}
            sm={6}
          >
            <Paper
              elevation={5}
              style={{
                backgroundColor: "#6d6a6a",
                color: "white",
                margin: 0,
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
                <CallMade></CallMade>
                <h3 style={{ textAlign: "justify" }}>Mensagens enviadas</h3>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ padding: 10 }}
              >
                <List className={classes.root}>
                  {messageData.map(message => (
                    <>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <Person />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              type="body2"
                              style={{
                                color: "#FFFFFF",
                                fontSize: 19,
                                fontWeight: "bold"
                              }}
                            >
                              {message.user}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              type="body2"
                              style={{ color: "#FFFFFF" }}
                            >
                              {message.message}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Grid>
            </Paper>
          </Grid>

          <Grid item style={{ paddingRight: 20, margin: 0 }} xs={6} sm={6}>
            <Paper
              elevation={5}
              style={{
                backgroundColor: "#6d6a6a",
                color: "white",
                margin: 0,
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
                <CallReceived></CallReceived>
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
                  {messageData.map(message => (
                    <>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <Person />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              type="body2"
                              style={{
                                color: "#FFFFFF",
                                fontSize: 19,
                                fontWeight: "bold"
                              }}
                            >
                              {message.user}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              type="body2"
                              style={{ color: "#FFFFFF" }}
                            >
                              {message.message}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
