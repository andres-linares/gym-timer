import { Timelog } from "@/interfaces";
import { createStore } from "vuex";

interface State {
  timelogs: Timelog[];
}

export default createStore<State>({
  state: {
    timelogs: [],
  },
  mutations: {
    addTimelog(state, payload: Timelog) {
      state.timelogs = [...state.timelogs, payload];
    },
  },
  actions: {},
  modules: {},
});
