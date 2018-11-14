<template>
  <v-toolbar class="cyan" dark >
    <v-toolbar-title class="mr-4">
      Random Magic
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark router to="/">Home</v-btn>      
      <v-btn flat dark router to="/about">About</v-btn>   
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark router to="register">Sign In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
