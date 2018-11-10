<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label>Email</label>
      <input v-model="userObj.email" type="email">
      <label>Password</label>
      <input v-model="userObj.password" type="password">
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
      }
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.userObj.email,
        password: this.userObj.password
      });
      console.log(response.data);
    }
  }
};
</script>

<style scoped>
</style>
