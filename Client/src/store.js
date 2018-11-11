import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    itemsState: [
      {
        id: 1,
        level: 1,
        name: "testname",
        class: "testclass",
        base: "sword",
        rarity: "common",
        effects: [
          {
            id: 1,
            name: "testeffectnameOne",
            effect: "testeffectOne"
          },
          {
            id: 2,
            name: "testeffectnameTwo",
            effect: "testeffectTwo"
          },
          {
            id: 3,
            name: "testeffectnameThree",
            effect: "testeffectThree"
          }
        ],
        flavor: "testflavorOne"
      },
      {
        id: 2,
        level: 2,
        name: "testname",
        class: "testclass",
        base: "sword",
        rarity: "common",
        effects: [
          {
            id: 1,
            name: "testeffectnameOne",
            effect: "testeffectOne"
          },
          {
            id: 2,
            name: "testeffectnameTwo",
            effect: "testeffectTwo"
          },
          {
            id: 3,
            name: "testeffectnameThree",
            effect: "testeffectThree"
          }
        ],
        flavor: "testflavorOne"
      }
    ]
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
      searchObj.item.id = this.state.itemsState[length - 1].id + 1;
      return commit("UPDATE_ITEMS", searchObj);
    },
    clearItems({ commit }) {
      return commit("CLEAR_ITEMS");
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
