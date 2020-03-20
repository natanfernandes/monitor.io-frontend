import { action } from "easy-peasy";
export default {
  grupos: [
    {
      id: 1,
      visible: true,
      name: "GRUPO 1",
      description: "CASOS CONFIRMADOS",
      qtd: 0,
      data: []
    },
    {
      id: 2,
      visible: true,
      name: "GRUPO 2",
      description: "APRESENTAM TODOS SINTOMAS",
      qtd: 0,
      data: []
    },
    {
      id: 3,
      visible: true,
      name: "GRUPO 3",
      description: "APRESENTAM ALGUNS SINTOMAS",
      qtd: 0,
      data: []
    },
    {
      id: 4,
      visible: true,
      name: "GRUPO 4",
      description: "SEM SINTOMAS",
      qtd: 0,
      data: []
    }
  ],
  usuariosDeRisco: {
    data: [],
    qtd: 0
  },
  mapRisk: {
    center: [-5.830984, -35.205123],
    zoomLevel: 13
  },
  mapCluster : true,
  //actions
  setGroupVisible: action((state, id) => {
    state.grupos.map(grupo => {
      if (grupo.id === id) {
        grupo.visible = !grupo.visible;
      }
      return grupo;
    });
  }),
  setMapCluster: action((state) => {
    state.mapCluster = !state.mapCluster
  }),
  addDataToGroup: action((state, user) => {
    state.grupos.map(grupo => {
      if (grupo.id === user.group) {
        grupo.data.push(user);
        grupo.qtd = grupo.qtd + 1;
      }
      return grupo;
    });
  }),
  addDataToGroupRisk: action((state, user) => {
    state.usuariosDeRisco.data.push(user);
    state.usuariosDeRisco.qtd += 1;
  }),
  setMapRisk: action((state, obj) => {
    state.mapRisk.center = obj.center;
    if (obj.zoom !== state.mapRisk.zoomLevel) {
      state.mapRisk.zoomLevel = obj.zoom;
    }
  }),

  cleanData: action(state => {
    state.grupos.map(grupo => {
      grupo.data = [];
      grupo.qtd = 0;
      return grupo;
    });
  })
};
