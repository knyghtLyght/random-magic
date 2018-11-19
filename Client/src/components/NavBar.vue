<template>
  <v-toolbar class="red darken-4" dark >
    <v-toolbar-title class="mr-4">
      Random Magic
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark router to="/">Home</v-btn>      
      <v-btn v-if="$store.state.userRole === 'admin'" flat dark router to="/items">Items</v-btn>
      <v-btn flat dark router to="/about">About</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="register">Sign In</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark router to="profile">{{this.$store.state.user.email}}</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
