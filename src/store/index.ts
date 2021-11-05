import { Timelog } from "@/interfaces";
import { createStore } from "vuex";

interface State {
  timelogs: Timelog[];
}

export default createStore<State>({
  state: {
    timelogs: [],
  },
  getters: {
    lastTimelog(state) {
      return state.timelogs[state.timelogs.length - 1];
    },
  },
  mutations: {
    addTimelog(state, payload: Timelog) {
      payload.datetime = Date.now();

      if (state.timelogs.length) {
        const lastTimelog = state.timelogs[state.timelogs.length - 1];
        payload.time = payload.datetime - lastTimelog.datetime;
      } else {
        payload.time = 0;
      }

      state.timelogs = [...state.timelogs, payload];
    },
  },
  actions: {},
  modules: {},
});
