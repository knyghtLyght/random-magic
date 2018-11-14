<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" v-model="valid" class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field 
            v-model="userObj.email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field 
            v-model="userObj.password"
            label="Password"
            :rules="passRules"
            :counter="32"
            :append-icon="passMask ? 'visibility_off' : 'visibility'"
            :type="passMask ? 'text' : 'password'"
            @click:append="passMask = !passMask"
            required
          ></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn class="log-btn" @click="login">Login</v-btn>
          <v-btn class="reg-btn" @click="register">Register</v-btn>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  data() {
    return {
      valid: true,
      passMask: false,
      userObj: {
        email: "",
        password: ""
      },
      error: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passRules: [
        v => !!v || "Pssword is required",
        v => (v && v.length >= 8) || "Pssword must be at least 8 characters"
      ]
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
      if (!this.error) {
        this.freshUserObj();
      }
    },
    async login() {
      try {
        await AuthenticationService.login({
          email: this.userObj.email,
          password: this.userObj.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
      if (!this.error) {
        this.freshUserObj();
      }
    },
    freshUserObj() {
      this.error = null;
      this.userObj.email = "";
      this.userObj.password = "";
    }
  }
};
</script>

<style scoped>
</style>
