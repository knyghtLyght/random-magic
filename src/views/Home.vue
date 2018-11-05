<template>
  <div class="home">
    <img alt="Background img" src="../assets/bannerPic.jpg">
    <div id="content">
      <ItemQuantityGen class="search-col"/>
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

export default {
  name: "home",
  components: {
    ItemCard,
    ItemQuantityGen
  },
  data() {
    return {
      items: this.$store.state.itemsState
    };
  }
};
</script>

<style scoped>
#content {
  margin: auto;
  width: 900px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 10px;
}
.search-col {
  grid-column: 1/2;
}
.item-col {
  grid-column: 1/3;
}
</style>
