<template>
  <div class="home">
    <img alt="Background img" src="../assets/bannerPic.jpg">
    <div id="content">
      <ItemQuantityGen @update-Drops="updateDrops" class="search-col"/>
      <div class="random-drops-display">
        <span>Common </span>
        <span>{{dropsList.common}}</span>
        <span>Uncommon </span>
        <span>{{dropsList.uncommon}}</span>
        <span>Rare </span>
        <span>{{dropsList.rare}}</span>
        <span>Very Rare </span>
        <span>{{dropsList.vRare}}</span>
        <span>Legendary </span>
        <span>{{dropsList.legendary}}</span>
        <span>Artifact </span>
        <span>{{dropsList.artifact}}</span>
        <ItemTypeGen class="search-list"/>
      </div>
      <div class="item-col">
        <ItemCard v-for="item in items" :key="item.id" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCard from "@/components/ItemCard.vue";
import ItemQuantityGen from "@/components/ItemQuantityGen.vue";
import ItemTypeGen from "@/components/ItemTypeGen.vue";

export default {
  components: {
    ItemCard,
    ItemQuantityGen,
    ItemTypeGen
  },
  computed: {
    searchLines() {
      return this.$store.getters.rolledDrops;
    }
  },
  data() {
    return {
      items: this.$store.state.itemsState,
      dropsList: this.$store.state.searchState
    };
  },
  methods: {
    updateDrops(updateObj) {
      this.dropsList = {
        partyLevel: 0,
        none: 0,
        common: 0,
        uncommon: 0,
        rare: 0,
        vRare: 0,
        legendary: 0,
        artifact: 0
      };
      this.dropsList = updateObj;
    }
  }
};
</script>

<style scoped>
#content {
  margin: auto;
  width: 900px;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 10px;
}
.search-col {
  grid-column: 1/2;
}
.item-col {
  grid-column: 1/3;
}
.search-list {
  grid-column: 2/3;
  margin-top: 18px;
}
</style>
