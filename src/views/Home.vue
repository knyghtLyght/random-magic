<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/bannerPic.jpg">
    <ItemQuantityGen/>
    <ItemCard v-for="item in items" :key="item.id" :item="item"/>
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
