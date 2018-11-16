<template>
  <panel title="Roll Single Item" class="item-search-group">
    <v-container>
      <v-layout row align-center>
        <v-flex>
          <v-text-field 
            label="Item Level"
            v-model="searchObj.itemLevel"
            type="number"
            box
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-select
            :items="typeOptions"
            label="Item Type"
            v-model="searchObj.itemType"
            style="width:120px"
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            label="Item Rarity"
            :items="rarityOptions"
            v-model="searchObj.itemRarity"
          ></v-select>
        </v-flex>
        <v-btn @click="itemSearchHandler">Roll</v-btn>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <v-checkbox
            v-model="officalOnly"
            label="Offical content only"
            color="success"
            value="true"
            hide-details
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  computed: {
    searchLevel() {
      return this.$store.state.searchState.partyLevel;
    }
  },
  data() {
    return {
      searchLines: this.$store.getters.rolledDrops,
      searchObj: this.createFreshSearchObj(),
      officalOnly: true,
      rarityOptions: [
        "Any",
        "Common",
        "Uncommon",
        "Rare",
        "Very Rare",
        "Legendary",
        "Artifact"
      ],
      typeOptions: [
        "Any",
        "Armor",
        "-Body",
        "-Helm",
        "-Cloak",
        "-Necklace",
        "-Ring",
        "-Gloves",
        "-Shield",
        "-Belt",
        "-Boots",
        "Weapon",
        "-Melee",
        "-Ranged",
        "Trinket"
      ]
    };
  },
  methods: {
    createFreshSearchObj() {
      return {
        itemLevel: 1,
        itemType: "Any",
        itemRarity: "Any"
      };
    },
    itemSearchHandler() {
      this.$emit("handle-item-search", this.searchObj);
    }
  }
};
</script>

<style scoped>
label,
input {
  margin: 2px;
}
</style>
