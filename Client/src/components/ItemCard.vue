<template>
  <div class="item-link">
    <div class="item-card -shadow">
      <span class="item-level">Item Level {{item.level}}</span>
      <span class="search-level">Search Level {{searchLevel}}</span>
      <h3 class="item-name">{{item.name}}</h3>
      <h4 class="item-class">{{item.class}}</h4>
      <span class="item-base">Item Type: {{item.base}}</span>
      <span class="item-rarity">Rarity: {{item.rarity}}</span>
      <ul class="item-effects">
        <li v-for="effect in item.effects" :key="effect.id">{{effect.effect}}</li>
      </ul>
      <p class="item-flavor">{{item.flavor}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      searchLevel: this.$store.state.searchState.partyLevel
    };
  }
};
</script>

<style scoped>
.item-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.item-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.item-card > .item-name {
  margin: 0;
}
.item-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.item-rarity {
  display: block;
}
.search-level {
  margin-left: 5px;
}
.item-flavor {
  text-align: center;
}
</style>
