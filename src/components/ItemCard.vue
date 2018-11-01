<template>
  <div class="item-card">
    <span class="item-level">{{item.level}}}</span>
    <span class="search-level">{{}}</span>
    <h3 class="item-name">{{item.name}}</h3>
    <h4 class="item-class">{{item.class}}</h4>
    <span class="item-base">{{item.base}}</span>
    <span class="item-rarity">{{item.rarity}}</span>
    <ul class="item-effects">
      <li v-for="effect in item.effects" :key="effect.id">{{effect.name}} {{effect.effect}}</li>
    </ul>
    <p class="item-flavor">{{item.flavor}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {}
};
</script>

<style scoped>
</style>
