<template>
  <panel title="Create New Item">
    <ItemModifyForm :item="newItem"/>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
import ItemModifyForm from "@/components/ItemModifyForm";

export default {
  components: {
    Panel,
    ItemModifyForm
  },
  data() {
    return {
      newItem: this.createFreshItemObj()
    };
  },
  methods: {
    createFreshItemObj() {
      return {
        level: 1,
        name: null,
        class: null,
        base: null,
        rarity: null,
        flavor: null
      };
    }
  }
};
</script>

<style scoped>
</style>
