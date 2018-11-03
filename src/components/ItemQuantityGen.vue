<template>
  <div class="quantity-card">
    <form @submit.prevent="generateItemTypes" class="quantity-search">
      <div>
        <label>Party Level</label>
        <input v-model="quantityList.partyLevel" type="number" step="1">
      </div>
      <div>
        <label>Minions</label>
        <input v-model="monsterList.minion" type="number" step="1">
      </div>
      <div>
        <label>Elites</label>
        <input v-model="monsterList.elite" type="number" step="1">
      </div>
      <div>
        <label>Champions</label>
        <input v-model="monsterList.champ" type="number" step="1">
      </div>
      <div>
        <label>Bosses</label>
        <input v-model="monsterList.boss" type="number" step="1">
      </div>
      <input type="submit" value="Get Number of Drops">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantityList: this.createFreshQuantityList(),
      monsterList: this.createFreshMonsterList()
    };
  },
  methods: {
    createFreshQuantityList() {
      console.log("new quan list");
      return {
        partyLevel: 0,
        none: 0,
        common: 0,
        uncommon: 0,
        rare: 0,
        vRare: 0,
        legendary: 0,
        artifact: 0
      };
    },
    createFreshMonsterList() {
      return {
        minion: 0,
        elite: 0,
        champ: 0,
        boss: 0
      };
    },
    generateItemTypes() {
      console.log("gen called");
      var rarityList = [
        "none",
        "common",
        "uncommon",
        "rare",
        "vRare",
        "legendary",
        "artifact"
      ];
      var minionWeight = [0.8, 0.1, 0.05, 0.05, 0, 0, 0];
      var eliteWeight = [0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0];
      var champWeight = [0, 0.2, 0.4, 0.1, 0.15, 0.1, 0.05];
      var bossWeight = [0, 0, 0.4, 0.2, 0.2, 0.1, 0.1];

      for (var i = 0; i < this.monsterList.minion; i++) {
        console.log("minion rare check called" + i);
        this.quantityList[this.generateRarity(rarityList, minionWeight)]++;
      }
    },
    generateRarity(list, weight) {
      var random_num = Math.random() * (1.0 - 0.0) + 0.0;
      var weight_sum = 0.0;
      console.log("rand = " + random_num);
      for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(3);

        if (random_num <= weight_sum) {
          console.log("rare picked = " + list[i]);
          return list[i];
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
