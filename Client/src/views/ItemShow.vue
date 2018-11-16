<template>
  <v-container fluid grid-list-lg>
    <v-layout column>
      <panel title="Create New Item">
        <ItemModifyForm :item="newItem"/>
      </panel>
      <panel>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.class }} |</td>
            <td class="text-xs-right">{{ props.item.base }} |</td>
            <td class="text-xs-right">{{ props.item.rarity }} |</td>
          </template>
        </v-data-table>
      </panel>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import ItemModifyForm from "@/components/ItemModifyForm";
import ItemService from "@/services/ItemService";

export default {
  components: {
    Panel,
    ItemModifyForm
  },
  data() {
    return {
      newItem: this.createFreshItemObj(),
      items: [],
      headers: [
        {
          text: "Item Name",
          align: "left",
          value: "name"
        },
        { text: "Class", value: "class" },
        { text: "Base", value: "base" },
        { text: "Rarity", value: "rarity" }
      ]
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
  },
  async mounted() {
    // Axios retuns us our data wrapped in an object so we need to access the data from it
    this.items = (await ItemService.indexItems()).data;
  }
};
</script>

<style scoped>
</style>
