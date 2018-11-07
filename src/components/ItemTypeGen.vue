<template>
  <div class="item-search-group">
    <form>
      <label>Item Level: </label>
      <input v-model="searchObj.itemLevel" type="number" style="width:35px" value="searchList[1]">
      <label>Item Type: </label>
      <select v-model="searchObj.itemType" class="item-type">
        <option v-for="type in typeOptions" :key="type">{{type}}</option>
      </select>
      <label>Item Rarity </label>
      <select v-model="searchObj.itemRarity" class="item-rarity">
        <option v-for="rarity in rarityOptions" :key="rarity">{{rarity}}</option>
      </select>
      <input type="submit" value="Set" class="set-button">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    searchList: Array
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
        itemType: "",
        itemRarity: ""
      };
    }
  }
};
</script>

<style scoped>
</style>
