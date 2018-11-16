<template>
  <panel title="Drops by Monster Class">
    <v-form class="quantity-search">
      <v-text-field 
        label="Party Level"
        v-model="quantityList.partyLevel"
        type="number"
        box
      ></v-text-field>
      <v-text-field 
        label="Minions"
        v-model="monsterList.minion"
        type="number"
        box
      ></v-text-field>
      <v-text-field 
        label="Elites"
        v-model="monsterList.elite"
        type="number"
        box
      ></v-text-field>
      <v-text-field 
        label="Champions"
        v-model="monsterList.champ"
        type="number"
        box
      ></v-text-field>
      <v-text-field 
        label="Bosses"
        v-model="monsterList.boss"
        type="number"
        box
      ></v-text-field>
      <v-select
        :items="searchTypeOptions"
        v-model="searchType"
        box
      ></v-select>
      <v-layout row wrap>
        <v-flex xs6>
          <v-btn @click="generateItemTypes">Roll Drops</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-checkbox
            v-model="officalOnly"
            label="Offical content only"
            color="success"
            hide-details
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-form>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      quantityList: this.createFreshQuantityList(),
      monsterList: this.createFreshMonsterList(),
      officalOnly: true,
      searchTypeOptions: ["Get drops only", "Get drops and roll itmes"],
      searchType: "Get drops only"
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
      this.$emit("update-Drops", returnObj, this.searchType);
      this.quantityList = this.createFreshQuantityList();
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
</style>
