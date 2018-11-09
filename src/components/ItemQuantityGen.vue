<template>
  <div class="quantity-card">
    <h3>Drops by Monster Class</h3>
    <form @submit.prevent="generateItemTypes" class="quantity-search">
      <label>Party Level</label>
      <input v-model="quantityList.partyLevel" type="number" step="1" style="width:35px">
      <label>Minions</label>
      <input v-model="monsterList.minion" type="number" step="1" style="width:35px">
      <label>Elites</label>
      <input v-model="monsterList.elite" type="number" step="1" style="width:35px">
      <label>Champions</label>
      <input v-model="monsterList.champ" type="number" step="1" style="width:35px">
      <label>Bosses</label>
      <input v-model="monsterList.boss" type="number" step="1" style="width:35px">
      <label>Get Number of Drops</label>
      <input v-model="dropType" type="radio" name="dropType" value="drops" class="drops-radio">
      <label>Get Random items</label>
      <input v-model="dropType" type="radio" name="dropType" value="items" class="random-radio">
      <input type="submit" value="Submit" class="search-button">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantityList: this.createFreshQuantityList(),
      monsterList: this.createFreshMonsterList(),
      dropType: "items"
    };
  },
  methods: {
    createFreshQuantityList() {
      return {
        partyLevel: 1,
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
      var returnObj = this.quantityList;
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
        console.log("minion rare check called " + i);
        returnObj[this.generateRarity(rarityList, minionWeight)]++;
      }
      for (var k = 0; k < this.monsterList.elite; k++) {
        console.log("elite rare check called " + k);
        returnObj[this.generateRarity(rarityList, eliteWeight)]++;
      }
      for (var j = 0; j < this.monsterList.champ; j++) {
        console.log("champ rare check called " + j);
        returnObj[this.generateRarity(rarityList, champWeight)]++;
      }
      for (var h = 0; h < this.monsterList.boss; h++) {
        console.log("boss rare check called " + h);
        returnObj[this.generateRarity(rarityList, bossWeight)]++;
      }
      this.$emit("update-Drops", returnObj, this.dropType);
      this.quantityList = {
        partyLevel: 0,
        none: 0,
        common: 0,
        uncommon: 0,
        rare: 0,
        vRare: 0,
        legendary: 0,
        artifact: 0
      };
      // this.$store.dispatch("updateSearch", this.quantityList);
      // this.$store.dispatch("updateMonster", this.monsterList);
    },
    generateRarity(list, weight) {
      var random_num = Math.random() * (1.0 - 0.0) + 0.0;
      var weight_sum = 0.0;
      console.log("rand = " + random_num);
      for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(3);

        if (random_num <= weight_sum) {
          console.log("rareity picked = " + list[i]);
          return list[i];
        }
      }
    }
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 5px;
}
label,
button {
  grid-column: 1/2;
}
input {
  grid-column: 2/3;
}
.search-button {
  grid-column: 1/2;
}
.random-button {
  grid-column: 2/3;
}
</style>
