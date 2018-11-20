<template>
  <panel title="Roll Single Item" class="item-search-group">
    <v-container>
      <v-layout row align-start>
        <v-flex>
          <v-text-field 
            label="Item Level"
            v-model="searchObj.itemLevel"
            type="number"
            box
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-layout column align-start>
            <V-flex>
              <v-select
                :items="typeOptions"
                label="Item Type"
                v-model="searchObj.itemType"
                box
              ></v-select>
            </V-flex>
            <V-flex v-if="searchObj.itemType === '-Melee'">
              <v-select
                :items="meleeWeaponOptions"
                label="Weapon Type"
                v-model="searchObj.itemBase"
                box
              ></v-select>
            </V-flex>
            <V-flex v-if="searchObj.itemType === '-Ranged'">
              <v-select
                :items="meleeWeaponOptions"
                label="Weapon Type"
                v-model="searchObj.itemBase"
                box
              ></v-select>
            </V-flex>
            <V-flex v-if="searchObj.itemType === '-Body'">
              <v-select
                :items="armorOptions"
                label="Armor Type"
                v-model="searchObj.itemBase"
                box
              ></v-select>
            </V-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-select
            label="Item Rarity"
            :items="rarityOptions"
            v-model="searchObj.itemRarity"
            box
          ></v-select>
        </v-flex>
        <v-flex class="pb-3">
          <v-btn @click="itemSearchHandler">Roll</v-btn>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <v-checkbox
            v-model="officalOnly"
            label="Offical content only"
            color="success"
            hide-details
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  computed: {
    searchLevel() {
      return this.$store.state.searchState.partyLevel;
    }
  },
  data() {
    return {
      searchLines: this.$store.getters.rolledDrops,
      searchObj: this.createFreshSearchObj(),
      officalOnly: true,
      rarityOptions: [
        "Any",
        "Common",
        "Uncommon",
        "Rare",
        "Very Rare",
        "Legendary",
        "Artifact"
      ],
      typeOptions: [
        "Any",
        "Armor",
        "-Body",
        "-Helm",
        "-Cloak",
        "-Necklace",
        "-Ring",
        "-Gloves",
        "-Shield",
        "-Belt",
        "-Boots",
        "Weapon",
        "-Melee",
        "-Ranged",
        "Wondrous item"
      ],
      meleeWeaponOptions: [
        "Any",
        "Club",
        "Dagger",
        "Greatclub",
        "Handaxe",
        "Light Hammer",
        "Mace",
        "Quarterstaff",
        "Sickle",
        "Spear",
        "Battleaxe",
        "Flail",
        "Glave",
        "Greataxe",
        "Greatsword",
        "Halberd",
        "Lance",
        "Longsword",
        "Maul",
        "Morningstar",
        "Pike",
        "Rapier",
        "Scimitar",
        "Shortsword",
        "Trident",
        "War Pick",
        "Warhammer",
        "Whip",
        "Net"
      ],
      rangedWeaponOptions: [
        "Any",
        "Dagger",
        "Handaxe",
        "javalin",
        "light Hammer",
        "Spear",
        "Light Crossbow",
        "Dart",
        "Shortbow",
        "Sling",
        "Blowgun",
        "Hand Crossbow",
        "Heavy Crossbow",
        "Longbow"
      ],
      armorOptions: [
        "Any",
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
  },
  methods: {
    createFreshSearchObj() {
      return {
        itemLevel: 1,
        itemType: "Any",
        itemBase: "Any",
        itemRarity: "Any"
      };
    },
    itemSearchHandler() {
      this.$emit("handle-item-search", this.searchObj);
    }
  }
};
</script>

<style scoped>
label,
input {
  margin: 2px;
}
</style>
