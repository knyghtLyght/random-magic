<template>
  <div class="home">
    <v-container fluid grid-list-lg id="content">
      <v-layout align-start justify-center row>
        <v-flex d-flex xs12 sm6 md4>
          <ItemQuantityGen @update-Drops="updateDrops"/>
        </v-flex>
        <v-flex d-flex x12 sm6 md8>
          <v-layout row wrap>
            <v-flex d-flex>
              <panel title="Rolled Drops" class="random-drops-display">
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs2 class="text-xs-center drop-group" id="common-group">
                      <span class="drop-amount">{{dropsList.common}}</span>
                      <span class="drop-label">Common </span>
                    </v-flex>
                    <v-flex xs2 class="text-xs-center drop-group" id="uncommon-group">
                      <span class="drop-amount">{{dropsList.uncommon}}</span>
                      <span class="drop-label">Uncommon </span>
                    </v-flex>
                    <v-flex xs2 class="text-xs-center drop-group" id="rare-group">
                      <span class="drop-amount">{{dropsList.rare}}</span>
                      <span class="drop-label">Rare </span>
                    </v-flex>
                    <v-flex xs2 class="text-xs-center drop-group" id="vrare-group">
                      <span class="drop-amount">{{dropsList.vRare}}</span>
                      <span class="drop-label">Very Rare </span>
                    </v-flex>
                    <v-flex xs2 class="text-xs-center drop-group" id="leg-group">
                      <span class="drop-amount">{{dropsList.legendary}}</span>
                      <span class="drop-label">Legendary </span>
                    </v-flex>
                    <v-flex xs2 class="text-xs-center drop-group" id="art-group">
                      <span class="drop-amount">{{dropsList.artifact}}</span>
                      <span class="drop-label">Artifact </span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </panel>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex>
                  <ItemTypeGen @handle-item-search="searchSingle" class="search-list"/>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <div class="item-col">
          <v-btn v-on:click="clearHandler" class="clear-button">Clear Item List</v-btn>
          <ItemCard v-for="item in items" :key="item.id" :item="item"/>
        </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCard from "@/components/ItemCard.vue";
import ItemQuantityGen from "@/components/ItemQuantityGen.vue";
import ItemTypeGen from "@/components/ItemTypeGen.vue";
import Panel from "@/components/Panel";

export default {
  components: {
    ItemCard,
    ItemQuantityGen,
    ItemTypeGen,
    Panel
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
      return { item: searchObj, officalContentFlag: this.officalContent };
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
  background-color: #ffffffcc;
}
.drop-amount {
  display: block;
}
</style>
