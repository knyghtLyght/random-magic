<template>
  <div class="home">
    <img alt="Background img" src="../assets/bannerPic.jpg">
    <div id="content">
      <ItemQuantityGen @update-Drops="updateDrops" class="search-col"/>
      <div class="random-drops-display">
        <h3>Rolled Drops</h3>
        <div class="drop-group" id="common-group">
          <span class="drop-amount">{{dropsList.common}}</span>
          <span class="drop-label">Common </span>
        </div>
        <div class="drop-group">
          <span class="drop-amount">{{dropsList.uncommon}}</span>
          <span class="drop-label">Uncommon </span>
        </div>
        <div class="drop-group">
          <span class="drop-amount">{{dropsList.rare}}</span>
          <span class="drop-label">Rare </span>
        </div>
        <div class="drop-group">
          <span class="drop-amount">{{dropsList.vRare}}</span>
          <span class="drop-label">Very Rare </span>
        </div>
        <div class="drop-group">
          <span class="drop-amount">{{dropsList.legendary}}</span>
          <span class="drop-label">Legendary </span>
        </div>
        <div class="drop-group">
          <span class="drop-amount">{{dropsList.artifact}}</span>
          <span class="drop-label">Artifact </span>
        </div>
        <ItemTypeGen @handle-item-search="searchSingle" class="search-list"/>
        <div class="utility-options">
          <label>Use Offical Content Only</label>
          <input type="checkbox" v-model="officalContent">
          <button v-on:click="clearHandler" class="clear-button">Clear Item List</button>
        </div>
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
      dropsList: this.$store.state.searchState,
      officalContent: true
    };
  },
  methods: {
    updateDrops(updateObj, dropType) {
      console.log(dropType);
      this.dropsList = updateObj;
    },
    searchSingle(searchObj) {
      console.log(searchObj);
      return searchObj;
    },
    clearHandler() {
      this.$store.dispatch("clearItems");
      this.items = this.$store.state.itemsState;
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
.drop-group {
  display: inline-block;
  margin: 5px;
}
.random-drops-display {
  text-align: center;
}
.drop-amount {
  display: block;
}
.utility-options {
  margin-top: 20px;
}
.utility-options > input {
  margin-right: 20px;
}
#common-group {
  background-color: #d1efd0;
}
</style>
