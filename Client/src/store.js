import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // State can only be modified by mutations
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    userRole: "",
    searchState: {
      partyLevel: 0,
      none: 0,
      common: 0,
      uncommon: 0,
      rare: 0,
      vRare: 0,
      legendary: 0,
      artifact: 0
    },
    monsterState: {
      minion: 0,
      elite: 0,
      champ: 0,
      boss: 0
    },
    itemsState: []
  },
  mutations: {
    UPDATE_SEARCH(state, searchObj) {
      state.searchState = searchObj;
    },
    UPDATE_MONSTERS(state, monsterObj) {
      state.monsterState = monsterObj;
    },
    UPDATE_ITEMS(state, item) {
      state.itemsState.push(item);
    },
    CLEAR_ITEMS(state) {
      state.itemsState = [];
    },
    SET_TOKEN(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    SET_USER(state, user) {
      state.user = user;
      user ? (state.userRole = user.role) : (state.userRole = "");
    }
  },
  actions: {
    updateMonster({ commit }, monsterObj) {
      return commit("UPDATE_MONSTERS", monsterObj);
    },
    updateSearch({ commit }, searchObj) {
      return commit("UPDATE_SEARCH", searchObj);
    },
    updateItems({ commit }, searchObj) {
      console.log(searchObj);
      return commit("UPDATE_ITEMS", searchObj);
    },
    clearItems({ commit }) {
      return commit("CLEAR_ITEMS");
    },
    setToken({ commit }, token) {
      return commit("SET_TOKEN", token);
    },
    setUser({ commit }, user) {
      return commit("SET_USER", user);
    }
  },
  getters: {
    rolledDrops: state => {
      var dropsArray = [];
      var searchArray = state.searchState.entries;
      for (var [key, val] in searchArray) {
        if (val > 0) {
          dropsArray.push([key, state.searchState.partyLevel]);
        }
      }
      return dropsArray;
    }
  }
});
