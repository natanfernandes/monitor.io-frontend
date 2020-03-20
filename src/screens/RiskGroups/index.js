import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import RiskGroupMap from "../../components/RiskGroupMap";
import { forwardRef } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Send from "@material-ui/icons/Send";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import Location from "@material-ui/icons/LocationOn";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function RiskGroups() {
  const usuariosDeRisco = useStoreState(state => state.usuariosDeRisco);
  const setMapRisk = useStoreActions(actions => actions.setMapRisk);
  const [state, setState] = useState({
    columns: [
      { title: "Nome", field: "name" },
      { title: "Grupo", field: "group" },
      { title: "Endereço", field: "address" }
    ]
  });
  const [openSnackSuccess, setOpenSnackSuccess] = useState(false);
  const [userMessage, setUserMessage] = useState(null);
  const [openModalMensagem, setOpenModalMensagem] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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
    setOpenSnackSuccess(true);
  };

  const modalEnviarMensagem = () => {
    return (
      <div>
        <Dialog
          open={openModalMensagem}
          onClose={handleCloseModalMensagem}
          disableBackdropClick
          maxWidth={"sm"}
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enviar mensagem</DialogTitle>
          <DialogContent>
            <p>Mensagem para : {userMessage ? userMessage.name : null}</p>
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
            Mensagem enviada com sucesso!
          </Alert>
        </Snackbar>
      <Grid item xs={12} sm={12} style={{ margin: 10, color: "white" }}>
        <h2>Grupos de risco</h2>
        <p>
          Os usuários de grupos de risco são mais vulneráveis e suscetíveis a
          terem sintomas mais fortes, por isso tem uma aba exclusiva para que
          possam ser tratados de maneira mais eficaz.
        </p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RiskGroupMap />
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
            style={{ padding: 10 }}
          >
            <h3 style={{ textAlign: "justify" }}>
              Lista de usuários em grupos de risco
            </h3>
            <p style={{ textAlign: "justify" }}>
              Os grupos de risco são compostos por :
              <span style={{ color: "#FFCE00" }}>
                Idosos, Diabéticos, Hipertensos, Quem tem insuficiência renal
                crônica, Quem tem doença respiratória crônica, Quem tem doença
                cardiovascular
              </span>
            </p>
          </Grid>
          <Grid justify="center" alignItems="center" style={{ padding: 10 }}>
            <MaterialTable
              title="Lista de usuários"
              icons={tableIcons}
              columns={state.columns}
              data={usuariosDeRisco.data}
              actions={[
                {
                  icon: () => <Location />,
                  tooltip: "Ver no mapa",
                  onClick: (event, rowData) => {
                    // Do save operation
                    setMapRisk({ center: rowData.position, zoom: 16 });
                  }
                },
                {
                  icon: () => <Send />,
                  tooltip: "Mandar mensagem",
                  onClick: (event, rowData) => {
                    // Do save operation
                    handleClickOpenModalMensagem();
                    setUserMessage(rowData);
                  }
                }
              ]}
            />
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
