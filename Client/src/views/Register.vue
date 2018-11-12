<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label>Email</label>
      <input v-model="userObj.email" type="email">
      <label>Password</label>
      <input v-model="userObj.password" type="password">
      <div class="error" v-html="error"></div>
      <input type="submit" value="Register">
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  data() {
    return {
      userObj: {
        name: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.userObj.email,
          password: this.userObj.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
</style>
