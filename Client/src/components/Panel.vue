<template>
  <v-layout>
    <v-flex xs12>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red darken-4" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>

          </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
</style>
