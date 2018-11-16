<template>
  <v-container fluid grid-list-sm>
    <v-layout row>
      <v-flex>
        <v-text-field 
          v-model="item.level"
          label="Level"
          type="number"
          required
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field 
          v-model="item.name"
          label="Name"
          type="text"
          required
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-select
          :items="classOptions"
          label="Item Class"
          v-model="item.class"
        ></v-select>
      </v-flex>
      <v-flex v-if="item.class === 'Weapon'">
        <v-select
          :items="weaponOptions"
          label="Item Type"
          v-model="item.class"
        ></v-select>
      </v-flex>
      <v-flex v-if="item.class === 'Armor'">
        <v-select
          :items="armorOptions"
          label="Item Type"
          v-model="item.class"
        ></v-select>
      </v-flex>
      <v-flex>
        <v-select
          label="Item Rarity"
          :items="rarityOptions"
          v-model="item.rarity"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row align-end>
      <v-flex>
        <v-textarea
          name="input-7-1"
          label="Flavor text"
          auto-grow
          counter="255"
        ></v-textarea>
      </v-flex>
      <v-flex>
        <v-btn>Create Item</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      rarityOptions: [
        "Common",
        "Uncommon",
        "Rare",
        "Very Rare",
        "Legendary",
        "Artifact"
      ],
      classOptions: ["Armor", "Weapon", "Wondrous Item"],
      weaponOptions: ["sword", "ax", "sling"],
      armorOptions: [
        "Padded",
        "Leather",
        "Studded",
        "Hide",
        "Chain Shirt",
        "Scale Mail",
        "Breastplate",
        "Half plate",
        "Ring Mail",
        "Chain Mail",
        "Splint",
        "Plate",
        "Shield"
      ]
    };
  }
};
</script>

<style scoped>
</style>
