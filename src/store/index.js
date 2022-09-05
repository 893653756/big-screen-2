import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    systemIndex: 0,
    dayData: {},
    countData: {},
    countSystemData: [],
    system_special: {}, // 特色应用数据
    system_pv: [], // 排行
  },
  mutations: {
    setBgScreenData(
      state,
      { dayData, countData, countSystemData, system_special, system_pv }
    ) {
      state.dayData = dayData;
      state.countData = countData;
      state.countSystemData = countSystemData;
      state.system_special = system_special;
      state.system_pv = system_pv;
    },
    setSystemIndex(state, systemIndex) {
      state.systemIndex = systemIndex;
    },
  },

  getters: {
    systemIndex: (state) => {
      return state.systemIndex;
    },
    leftOneData: (state) => {
      let { day_in_num = 0, day_sync_num = 0 } = state.dayData;
      return { day_in_num, day_sync_num };
    },
    letTwoData: (state) => {
      let { day_system_List = [] } = state.dayData;
      return day_system_List;
    },
    letThreeData(state) {
      let { error_log = [] } = state.dayData;
      return error_log;
    },
    centerData: (state) => {
      return state.countData;
    },
    // 系统变换右侧数据
    countSystemData: (state) => {
      return state.countSystemData;
    },
    // 特色应用数据
    systemSpecialData: (state) => {
      return state.system_special;
    },
    rankData: (state) => {
      return state.system_pv;
    },
  },
});
